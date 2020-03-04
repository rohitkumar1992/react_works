import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter, Router,Link,Route,Switch,HashRouter,Redirect} from "react-router-dom";
import UserList from './Container/UserList/UserList'
const MainContainer=()=>{
  return(
    <HashRouter>
      <Switch>
          <Route path="/"  component={App}/>
          <Route path="/userlist"  component={UserList}/>
      </Switch>
      </HashRouter>)
}
ReactDOM.render(
  <MainContainer />,
  document.getElementById('root')
);
