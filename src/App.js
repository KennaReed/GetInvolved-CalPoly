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
import useToken from './useToken';


function App() {
  const { token, setToken } = useToken();
  console.log(token);
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
