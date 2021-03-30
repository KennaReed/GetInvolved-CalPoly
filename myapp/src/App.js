import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Forum from './ForumPage.js'
import PostPage from "./PostPage";

class MyNavbar extends React.Component {

  render() {
    return(
        <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#news">Post</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
  )
  }
}

class App extends React.Component {					
	
	render(){
		return (
			<Forum />
		);
	}
}

export default App;