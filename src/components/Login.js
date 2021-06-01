import React, {useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import bcryptjs from 'bcryptjs';

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
    e.preventDefault();
    fetch('https://getinvolvedapi.herokuapp.com/login').then(response => response.json()).then(async json => {
      
      console.log(json);
      let check = 2;
      let i = 0;
      for (i=0; i < (json.account_list.length); i ++){
        if (json.account_list[i].username === username){
          if (await bcryptjs.compare(password, json.account_list[i].password))
            check = 0;
          else
            check = 1;
        }
      }
      if (check === 1){
        window.confirm("Wrong Password");
        return Login;
      }
      else if (check === 2){
        window.confirm("Account Doesn't Exist - Please Sign Up");
        return Login;
      }
      const token = await loginUser({
        username,
        password
      });
      setToken(token);
      });}

  const handleGuest = async e => {
    e.preventDefault();
    fetch('https://getinvolvedapi.herokuapp.com/login').then(response => response.json()).then(async json => {
    const token = await loginUser({
      "username" :"guest@gmail.com",
      "password" :"password"
    });
    setToken(token);
    })
  }

  return(
    <div className="login-wrapper">
      <a href="https://getinvolvedcalpoly.herokuapp.com/sign-up">
        <button className="myButton">Sign Up</button>
      </a>
      <button onClick={handleGuest} className="myButtonnext" id="Guest">Sign in as Guest</button>
      <div className="holder1">
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
            <button className="submit" id="check" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}


Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
