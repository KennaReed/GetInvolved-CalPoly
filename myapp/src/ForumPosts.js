import React, {useState} from 'react';
import styles from './forum.module.css';
import {FaAngleDown} from 'react-icons/fa';

function ForumPost(props) {
  const [open, setOpen] = useState(false);

  function getDetails() {
    console.log(props.postData.content);
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
        {getDetails()}
        <FaAngleDown onClick={() => expand()}/>
      </div>
    </div>
  );
}
export default ForumPost;
