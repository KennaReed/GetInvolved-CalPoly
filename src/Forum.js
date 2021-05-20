import React, {useState, useEffect} from 'react';
import ForumPost from './ForumPosts';
import axios from 'axios';
import styles from './forum.module.css';
import SearchBar from './SearchBar';
import ForumFiltering from './ForumFiltering';

function Forum() {
  const [forumPosts, setForumPosts] = useState([]);
  useEffect(() => {
    fetchAll().then((result) => {
      if (result) {
        setForumPosts(result);
      }
    });
  }, []);

  async function fetchAll() {
    try {
      const response = await axios.get('https://getinvolvedapi.herokuapp.com/forum');
      return response.data.posts_list.reverse();
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  function updatePost(updated) {
    setForumPosts(updated);
  }

  return (
    <div className={styles.ForumComp}>
      <div className={styles.search}>
        <h1 className={styles.opener}>Community Forum Page</h1>
        <SearchBar upPost = {updatePost}/>
      </div>
      <div className={styles.ForumBody}>
        <div>
          {forumPosts.map((p, index) => {
            return <ForumPost postData={p}/>;
          })}
        </div>
          < ForumFiltering upPost = {updatePost}/>
      </div>
    </div>
  );
}

export default Forum;