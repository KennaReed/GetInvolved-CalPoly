import React, {useState} from 'react';
import styles from './forum.module.css';
import {FaAngleDown} from 'react-icons/fa';
import moment from 'moment';

function ForumPost(props) {
  const [open, setOpen] = useState(false);

  function getDetails() {
    if (open) {
      return (
        <div className={styles.hiddenDetails}>
          <p>{props.postData.content}</p>
          <p>Cost: {props.postData.Cost}</p>
          {handleEvents()}
          {handleLocation()}
        </div>
      );
    }
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
    return pad(dateobj.getDate())+'/'+
      pad(dateobj.getMonth()+1)+'/'+dateobj.getFullYear();
  }

  function handleEvents() {
    if (props.postData.DateEvent != props.postData.DatePosted) {
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
export default ForumPost;
