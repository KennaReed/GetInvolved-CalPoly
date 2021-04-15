import React from 'react';
import styles from "./forum.module.css"
import { FaAngleDown } from 'react-icons/fa'

function ForumPosts(props) {
    console.log(props);
    const posts = props.postData.map((p, index) => {
        return(
            <div className={styles.displayPost}>
                <h1>{p.title}</h1>
                <p>{p.publisher}</p>
                <p>{p.content}</p>
                <p>{p.cost}</p>
            </div>
    );
        }
    
}
export default ForumPost;