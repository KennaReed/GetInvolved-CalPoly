import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import { PLACES } from './shared/places';
import {BrowserRouter as Router,Route, Link,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'mdbreact';
import { NavDropdown, Button, Form, FormControl, ControlLabel } from "react-bootstrap";
import PostPage from "./PostPage";

class MyNavbar extends React.Component {

  render() {
    return(
        <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">Post</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
  )
  }
}

class App extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			places: PLACES
		};
	}
	
	render(){
		return (
			<div className='App'>
        <MyNavbar/>
				<h1>Create a Post!</h1>
                <PostPage/>

			</div>
		);
	}
}

export default App;