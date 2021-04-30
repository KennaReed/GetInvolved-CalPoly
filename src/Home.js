import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './home.module.css';
import moment from 'moment';

function pad(n) {
  return n < 10 ? '0'+n : n;
}

function formatDate(datestr) {
  const dateobj = new Date(datestr);
  return pad(dateobj.getDate())+'/'+
    pad(dateobj.getMonth()+1)+'/'+dateobj.getFullYear();
}

function DisplayPost(post, index) {
  return (
    <div key={index} className={styles.whole}>
      <div className={styles.shiftText}>
        <div className={styles.top}>
          {console.log(post.title)}
          <p className={styles.title}> {post.title} </p>
          <p className={styles.datePosted}>
            Posted On: {formatDate(post.DatePosted)} </p>
        </div>

        <p className={styles.description}> {post.content} </p>
        {handleEvent(post)}
        <p className={styles.generalInfo}>Cost: {post.Cost}</p>
      </div>
    </div>
  );
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
    console.log(response.data.posts_list);
    return response.data.posts_list;
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
      <h1 className={styles.opener}> Most Relevant Posts </h1>
      <br/>
      <div className="container">
      {sortedposts.map((p, index) => {
        return <DisplayPost post={p, index}/>;
      })}
      </div>
    </div>
  );
}

export default Home;
