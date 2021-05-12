import axios from 'axios';
import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('https://getinvolvedapi.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
    }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    if (errorCheck() > 1){
      window.confirm("Existing Account with Wrong Password");
      return Login;
    }
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  async function indatabase() {
    try {
      const response = await axios.get('');
      let i = 0;
      for (i=0; i < (response.data.account_list.length); i ++){
        if (response.data.account_list[i] === username){
            return true;
        }
      }
      return false;
    } 
    catch (error) {
      console.log(error);
      return false;
    }
  }
  async function getpassword(){
    try{
      const response = await axios.get('');
      let i = 0;
      for (i=0; i < (response.data.account_list.length); i ++){
        if (response.data.account_list[i]["username"] === username){
            return response.data.account_list[i][password];
        }
      }
    }
    catch (error) {
      console.log(error);
      return false;
    }

  }

  
  function errorCheck(){
    let error = 0;
    if (indatabase() && getpassword() === password){
      error += 1
    }
    return error;}



  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input id="username" type="email"  onChange={(e) => setUserName(e.target.value)} required/>
        </label>
        <label>
          <p>Password</p>
          <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} required/>
        </label>
        <div>
          <button id="check" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
