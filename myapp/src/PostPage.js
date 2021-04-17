/* eslint-disable require-jsdoc */
import React, {useState, useEffect} from 'react';
import Form from './Form';
import axios from 'axios';

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
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  function updateList(post) {
    console.log('Here in UpdateList');
    makePostCall(post).then( (result) => {
      if (result.status === 201) {
        post['_id'] = result.data['_id'];
      }
      setPost([...posts, post] );
    });
  }

  //   async function fetchAll(){
  //     try {
  //        const response = await axios.get('http://localhost:5000/posts');
  //        return response.data.users_list;
  //     }
  //     catch (error){
  //        //We're not handling errors. Just logging into the console.
  //        console.log(error);
  //        return false;
  //     }
  //   }

  return (
    <div className="container">
      <Form handleSubmit={updateList} />
    </div>
  );
}

export default MyApp;
