import React, {useState} from 'react';
import styles from './forum.module.css';
import {FaAngleDown} from 'react-icons/fa';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import Comment from './Comment';
import axios from 'axios';

function pad(n) {
  return n < 10 ? '0'+n : n;
}

function formatDate(datestr) {
  const dateobj = new Date(datestr);
  return pad(dateobj.getMonth()+1)+'/'+
    pad(dateobj.getDate())+'/'+dateobj.getFullYear() + '  ' + formatAMPM(dateobj);
}

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return hours + ':' + minutes + '' + ampm;
}

function ForumPost(props) {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState(false);
  const [commentList, setAllComments] = useState([]);
  const [button, setButton] = useState(true);

  function getDetails() {
    if (open) {
      return (
        <div className={styles.hiddenDetails}>
          <h5>{props.postData.content}</h5>
          <h5>Cost: {props.postData.Cost}</h5>
          <img src={props.postData.image} alt={props.postData.image} border= '1px' border-radius= '4px' padding= '5px' width= '150px'/>
          {handleEvents()}
          {handleLocation()}
          {getComments()}
          <Button onClick={() => showComments()}>{buttonLabel(button)}</Button>
        </div>
      );
    }
  }

  function getComments() {
    if (comments) {
      console.log(commentList);
      return (
        <div>
          {postCommentBox()}
          {commentList.map((c, i) => {
            return <DisplayComment comment={c} index={i}/>;
          })}
        </div>
      );
    }
  }

  function buttonLabel(bool) {
    if (bool) {
      return "Show Comments";
    } else {
      return "Hide Comments";
    }
  }

  function showComments() {
    console.log("In showComments");
    setComments(!comments);
    setButton(!button)
    fetchComments();
  }

  function postCommentBox() {
    return (
      <div>
        <Comment handleSubmit={updateList} publisher={JSON.parse(localStorage.getItem("token")).token} _id={props.postData._id}/>
      </div>
    );
  }

  function fetchComments() {
    console.log("fetchComments")
    fetchAll({"postID": props.postData._id}).then( (result) => {
      if (result) {
        setAllComments(result);
        getComments();
        setComments(!comments);
        setButton(!button)
      }
    });
  }

  async function fetchAll(filter) {
    const response = await axios.post('https://getinvolvedapi.herokuapp.com/getComment', filter);
    return response.data.comments_list.reverse();
  }

  async function makePostCall(comment) {
    try {
      const response = await axios.post('https://getinvolvedapi.herokuapp.com/comment', comment);
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
  fetchComments()  
}

  function handleLocation() {
    if (props.postData.Location) {
      return (
        <div>
          <h5>Location: {props.postData.Location}</h5>
        </div>
      );
    }
  }
  function convertTime(time) {
    return moment(time, 'HH:mm').format('h:mm A');
  }

  function handleEvents() {
    if (props.postData.DateEvent !== props.postData.DatePosted) {
      return (
        <div className={styles.eventInfo}>
          <h5>Event Date: {
            formatDate(props.postData.DateEvent)}</h5>
          <h5>Start Time: {convertTime(props.postData.time)}</h5>
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
        <h3 className={styles.shiftText}>{props.postData.publisher}</h3>
      </div>

      <h4 className={styles.shiftText}>
          Date Posted: {formatDate(props.postData.DatePosted)}</h4>
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
        <h1> </h1>
        <div className={styles.topComment}>
          <p> {props.comment.publisher} </p>
          <p> {formatDate(props.comment.DatePosted)} </p>
        </div>

        <p className={styles.commentBody}> {props.comment.content} </p>
      </div>
    </div>
  );
}

export default ForumPost;
