/* eslint-disable require-jsdoc */
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostPage from './PostPage';
class App extends React.Component {
  render() {
    return (
      <body className='App1'>
        <div className='App'>
          <h1>Create a Post!</h1>
          <PostPage class="postpage"/>

        </div>
      </body>
    );
  }
}

export default App;
