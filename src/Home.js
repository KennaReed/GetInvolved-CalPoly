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

function DisplayPost(props) {
  const posts = props.post1.map((post, index) => {
    return (
      <div key={index} className={styles.whole}>
        <div className={styles.shiftText}>
          <div className={styles.top}>
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
  });
  return (
    <DisplayPost>
      <div>
        {posts}
      </div>
    </DisplayPost>
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
    console.log("HERE");
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
        <DisplayPost post1={sortedposts}/>
      </div>
    </div>
  );
}

export default Home;
