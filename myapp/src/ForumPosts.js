/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import styles from './forum.module.css';
import {FaAngleDown} from 'react-icons/fa';
import moment from 'moment';

function ForumPost(props) {
  const [open, setOpen] = useState(false);

  function getDetails() {
    console.log(props.postData.content);
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

  function handleEvents() {
    if (props.postData.DateEvent) {
      return (
        <div className={styles.eventInfo}>
          <p>Date of Event: {props.postData.DateEvent}</p>
          <p>Time of Event: {convertTime(props.postData.time)}</p>
        </div>
      );
    }
  }

  function expand() {
    setOpen(!open);
  }

  console.log(open);
  return (
    <div className={styles.displayPost}>
      <div className={styles.top}>
        <h2 className={styles.shiftText}>{props.postData.title}</h2>
        <p className={styles.shiftText}>{props.postData.publisher}</p>
      </div>

      <h5 className={styles.shiftText}>
          Date Posted: {props.postData.DatePosted}</h5>
      {getDetails()}
      <div className={styles.down}>
        <FaAngleDown onClick={() => expand()}/>
      </div>

    </div>
  );
}
export default ForumPost;
