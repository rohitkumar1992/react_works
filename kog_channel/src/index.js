import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Router,Link,Route,Switch,HashRouter,Redirect} from "react-router-dom";
import Movies from './container/Movies/movies';
import Login from './component/login';
import Profile from './component/profile';
class Result extends React.Component{
  render()
  {
  return (
    <HashRouter>
    <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/login" exact  component={Login}/>
        <Route path="/profile" exact  component={Profile}/>
    </Switch>
    </HashRouter>
  )
}
}
ReactDOM.render(<Result />, document.getElementById('root'));
// serviceWorker.unregister();
      // <Route path="/upload"  component={Upload}/>
