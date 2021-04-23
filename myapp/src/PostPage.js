/* eslint-disable require-jsdoc */
import React, {useState, useEffect} from 'react';
import Form from './Form';
import axios from 'axios';
import styles from './postpage.module.css';

function MyApp() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    //  fetchAll().then( result => {
    //      if (result)
    //          setPost(result);
    //   });
  }, [] );

  async function makePostCall(post) {
    try {
      const response = await axios.post('http://localhost:5000/posts', post);
      return response;
    } finally {
      return 500;
    }
  }

  function updateList(post) {
    makePostCall(post).then((result) => {
      if (result.status === 201) {
        post['_id'] = result.data['_id'];
        setPost([...posts, post] );
      }
    });
  }
  return (
    <div>
      <h1 className={styles.title}>Create a Post</h1>
      <Form handleSubmit={updateList} />
    </div>
  );
}

export default MyApp;
