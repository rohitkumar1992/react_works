import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Router,Link,Route,Switch,HashRouter,Redirect} from "react-router-dom";
import Movies from './container/Movies/movies';

const Result = ()=>{
  return (
    <HashRouter>
    <Switch>
    <Route  path="/"  component={App} />
    </Switch>
    </HashRouter>
  )
}
ReactDOM.render(<Result />, document.getElementById('root'));
// serviceWorker.unregister();
      // <Route path="/upload"  component={Upload}/>
