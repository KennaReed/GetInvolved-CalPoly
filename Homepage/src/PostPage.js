import React, {useState, useEffect} from 'react';
import Form from './Form';
import axios from 'axios';

function MyApp() {
  const [characters, setPost] = useState([]);

  useEffect(() => {
    fetchAll().then( result => {
        if (result)
            setPost(result);
     });
  }, [] );

  async function makePostCall(person){
    try {
       const response = await axios.post('http://localhost:5000/posts', person);
       return response;
    }
    catch (error) {
       console.log(error);
       return false;
    }
 }

  function updateList(person) { 
    makePostCall(person).then( result => {
    if (result.status === 201)
       setPost([...characters, person.data] );
    });
 }

  async function fetchAll(){
    try {
       const response = await axios.get('http://localhost:5000/posts');
       return response.data.users_list;     
    }
    catch (error){
       //We're not handling errors. Just logging into the console.
       console.log(error); 
       return false;         
    }
  }
  
  return (
    <div className="container">
      <Form handleSubmit={updateList} />
    </div>
  )

}

export default MyApp;