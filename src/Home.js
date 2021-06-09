import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './home.module.css';
import moment from 'moment';

function pad(n) {
  return n < 10 ? '0'+n : n;
}

function formatDate(datestr) {
  const dateobj = new Date(datestr);
  return pad(dateobj.getMonth()+1)+'/'+
    pad(dateobj.getDate())+'/'+dateobj.getFullYear();
}

function DisplayPost(props) {
  return (
    <div className={styles.whole}>
      <div className={styles.shiftText}>
        <div className={styles.top}>
          <p className={styles.title}> {props.post.title} </p>
          <p className={styles.datePosted}>
            Posted On: {formatDate(props.post.DatePosted)} </p>
        </div>

        <p className={styles.description}> {props.post.content} </p>
        {handleEvent(props.post)}
        <p className={styles.generalInfo}>Cost: {props.post.Cost}</p>
      </div>
    </div>
  );
}

function grabRelevant(posts) {
  var retPosts = [];
  var truth = false;
  posts.forEach((p) => {
    truth = false
    console.log(p.DatePosted);
    console.log(p.DateEvent);
    if (Date.parse(new Date(p.DatePosted)) ===Date.parse(new Date(p.DateEvent))) {
      truth = relevantPost(p, 432000000);
    } else {
      console.log("Is Event")
      truth = relevantPost(p, 86400000);
    }
    if (truth) {
      retPosts.push(p);
    }
  });
  console.log(retPosts)
  return retPosts;
}

function relevantPost(p, offset) {
  const datePostedAdded = Date.parse(new Date(p.DatePosted)) + parseInt(offset);
  const today = Date.parse(new Date());
  if (datePostedAdded > today) {
    return true
  }
  return false 
}


function handleEvent(post) {
  if (post.DateEvent !== post.DatePosted) {
    return (
      <div className={styles.generalInfo}>
        <p>Date of Event: {formatDate(post.DateEvent)}</p>
        <p>Starting at: {convertTime(post.time)}</p>
        <p>Location: {post.Location}</p>
      </div>
    );
  }
}

function convertTime(time) {
  return moment(time, 'HH:mm').format('h:mm A');
}


function Home(props) {
  const [posts, setPost] = useState([]);

  async function fetchAll() {
    const response = await axios.get('https://getinvolvedapi.herokuapp.com/posts');
    console.log("relevant posts");
    console.log(response.data.posts_list);
    return grabRelevant(response.data.posts_list.reverse());
  }

  useEffect(() => {
    fetchAll().then( (result) => {
      if (result) {
        setPost(result);
      }
    });
  }, [] );


  const sortedposts = posts.reverse().sort((a, b) =>
    Math.abs((b.DatePosted - a.DatePosted)));

  return (
    <div className={styles.home}>
      <br/>
      <h1 className={styles.opener}> Most Recent Posts </h1>
      <br/>
      <div className="container">
      {sortedposts.map((p, i) => {
        return <DisplayPost post={p} index={i}/>;
      })}
      </div>
    </div>
  );
}

export default Home;
