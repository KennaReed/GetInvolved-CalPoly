import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostPage from "./PostPage";


class App extends React.Component {					
	
	render(){
		return (
			<div className='App'>
				<h1>Create a Post!</h1>
                <PostPage/>

			</div>
		);
	}
}

export default App;