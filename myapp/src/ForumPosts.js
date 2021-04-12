import React, {useState} from 'react';
import styles from "./forum.module.css"

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
    });
    console.log(posts.length);
    return posts;
}
export default ForumPosts;