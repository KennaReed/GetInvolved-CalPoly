import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./better";
import {Switch, Route} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import SubmissionPage from './SubmissionPage';

class PostPageConnected extends React.Component {					
	
   render(){	
      return (	
		<BrowserRouter>		
			<div className='PostPageConnected'>
				<Header/>
				<Switch>
					<Route path="/submission" component={SubmissionPage}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
	}
}

export default PostPageConnected;