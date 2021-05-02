import React, { useState }  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './better';
import Forum from './Forum';
import Cal from './Cal';
import Home from './Home';
import PostPage from './PostPage';
import {Switch, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom/cjs/react-router-dom.min';
import Dashboard from './components/Dashboard/dashboard'
import Login from './components/Login'
import Preferences from './components/Preferences/preferences'
import useToken from './useToken';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}



function App() {
  const { token, setToken } = useToken();
  //const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <body>
      <BrowserRouter>

        <div className='App'>
          <div className="it">
            <Header/>
          </div>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
            <Route path="/calendar" component={Cal}/>
            <Route path="/forum" component={Forum}/>
            <Route path="/post" component={PostPage}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    </body>
  );
}

export default App;
