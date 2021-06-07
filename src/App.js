import React  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './better';
import Forum from './Forum';
import Cal from './Cal';
import Home from './Home';
import PostPage from './PostPage';
import {Switch, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom/cjs/react-router-dom.min';
import Login from './components/Login'
import Signup from './components/Signup'
import useToken from './useToken';
import Signout from './signout';


function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return (
      <body>
          <BrowserRouter>
          <Switch>
            <Route path="/sign-up">
              <Signup setToken={setToken}/>
            </Route>
            <Route path="/">
              <Login setToken={setToken}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </body>)
  }
  return (
    <body>
      <div id = "wrapper">
      <BrowserRouter>
        <div className='App'>
          <div className="it">
            <Header/>
          </div>
          <Switch>
            <Route path="/calendar" component={Cal}/>
            <Route path="/forum" component={Forum}/>
            <Route path="/logout" component={Signout}/>
            <Route path="/post" component={PostPage}/>
            <Route path="/" component={Home}/>
            <Route path="/sign-up" component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
      <div className='main'> 
      </div>
      <div>
      <br/>
    
      </div>
      </div>
    </body>
  );
}

export default App;
