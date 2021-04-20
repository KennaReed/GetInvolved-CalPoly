/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import styles from './forum.module.css';
import {FaAngleDown} from 'react-icons/fa';
function ForumPost(props) {
  const [open, setOpen] = useState(false);

  function getDetails() {
    if (open) {
      return (
        <div>
          <p>{props.postData.content}</p>
          <p>{props.postData.cost}</p>
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
