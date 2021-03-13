import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./Navibar";

class App extends React.Component {					
	
   render(){	
      return (			
         <div className='App'>
	   <h1 style={{backgroundColor: "green"}}>Get Involved - Cal Poly </h1>
	   <Navibar/>

           <h1> Events and Recent Posts : </h1>		
 		Example Post 1:
		Meet up at the Pac! Freshman Welcome! Come meet other students!
		Time: 12:30 PM  
	</div>
	);
	}
}

export default App;
