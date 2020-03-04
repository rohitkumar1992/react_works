import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  HashRouter
} from "react-router-dom";
import './App.css';
import Login from './container/Login1/login.js';
import Dashboard from './container/dashboard.js';
//import VOD from './component/chunkupload/videoupload.js';
import VOD from './component/chunkupload/resumable.js';
import USERLIST from './container//userlist/userlist.js';
// import createHistory from 'history/createBrowserHistory'
//import VOD from './component/chunkupload/test.js';
class CustomLinkExample extends Component{
  render()
  {
    // const history = createHistory();
// history.go(0)
    return(
      <HashRouter>
      <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/"  name="Home" component={Dashboard} />
        </Switch>
      </HashRouter>
    );
  }
}

export default CustomLinkExample;
