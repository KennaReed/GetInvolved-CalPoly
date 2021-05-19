import React, {useState} from 'react';
import styles from './forum.module.css';
import {FaAngleDown} from 'react-icons/fa';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import Comment from './Comment';
import axios from 'axios';

function ForumPost(props) {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState(false);
  const [commentList, setAllComments] = useState([]);

  function getDetails() {
    if (open) {
      return (
        <div className={styles.hiddenDetails}>
          <p>{props.postData.content}</p>
          <p>Cost: {props.postData.Cost}</p>
          {handleEvents()}
          {handleLocation()}
          {getComments()}
          <Button onClick={() => showComments()}>Show Comments</Button>
        </div>
      );
    }
  }

  function getComments() {
    console.log("getComments")
    if (comments) {
      return (
        <div>
          {postCommentBox()}
          {fetchComments()}
          {commentList.map((c, i) => {
            return <DisplayComment comment={c} index={i}/>;
          })}
        </div>
      );
    }
  }

  function showComments() {
    console.log("In showComments");
    setComments(!comments);
  }

  function postCommentBox() {
    console.log("PostCommentBox")
    return (
      <div>
        <Comment handleSubmit={updateList}/>
      </div>
    );
  }

  function fetchComments() {
    console.log("fetchComments")
    fetchAll().then( (result) => {
      if (result) {
        setAllComments(result);
      }
    });
  }

  async function fetchAll() {
    const response = await axios.get('localhost:5000/comment');
    console.log(response.data.comments_list);
    return response.data.comments_list;
  }

  async function makePostCall(comment) {
    try {
      const response = await axios.post('localhost:5000/comment', comment);
      return response;
    } finally {
      return 500;
    }
  }

  function updateList(comment) {
    makePostCall(comment).then((result) => {
      if (result.status === 201) {
        comment['_id'] = result.data['_id'];
        setAllComments([...commentList, comment] );
      }
    });
  }

  function handleLocation() {
    if (props.postData.Location) {
      return (
        <div>
          <p>Location: {props.postData.Location}</p>
        </div>
      );
    }
  }
  function convertTime(time) {
    return moment(time, 'HH:mm').format('h:mm A');
  }

  function pad(n) {
    return n < 10 ? '0'+n : n;
  }

  function formatDate(datestr) {
    const dateobj = new Date(datestr);
    return pad(dateobj.getMonth()+1)+'/'+
      pad(dateobj.getDate())+'/'+dateobj.getFullYear();
  }

  function handleEvents() {
    if (props.postData.DateEvent !== props.postData.DatePosted) {
      return (
        <div className={styles.eventInfo}>
          <p>Event Date: {
            formatDate(props.postData.DateEvent)}</p>
          <p>Start Time: {convertTime(props.postData.time)}</p>
        </div>
      );
    }
  }

  function expand() {
    setOpen(!open);
  }

  return (
    <div className={styles.displayPost}>
      <div className={styles.top}>
        <h2 className={styles.shiftText}>{props.postData.title}</h2>
        <p className={styles.shiftText}>{props.postData.publisher}</p>
      </div>

      <h5 className={styles.shiftText}>
          Date Posted: {formatDate(props.postData.DatePosted)}</h5>
      {getDetails()}
      <div className={styles.down}>
        <FaAngleDown onClick={() => expand()}/>
      </div>

    </div>
  );
}

function DisplayComment(props) {
  return (
    <div>
      <div>
        <div>
          <p> {props.comment.publisher} </p>
        </div>

        <p> {props.comment.content} </p>
        <p> {props.comment.DatePosted} </p>
      </div>
    </div>
  );
}

export default ForumPost;
