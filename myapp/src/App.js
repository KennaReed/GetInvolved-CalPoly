import React from 'react';
import './App.css';
import { PLACES } from './shared/places';
import 'bootstrap/dist/css/bootstrap.min.css';
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