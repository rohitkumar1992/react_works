import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Router,Link,Route,Switch,HashRouter,Redirect} from "react-router-dom";
import Movies from './container/Movies/movies';
import Not_Found from './component/not_found/not_found.js';
import axios from 'axios'
class Result extends React.Component{
  componentDidMount()
  {
    //localStorage.setItem('token','ade46788d77e90ed7e532ce83873716e');
  //  localStorage.setItem('userid',327);
    this.getGeoLocation()
  }
  getGeoLocation=()=>{
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
           localStorage.setItem('countrycode',data.country)
        }).catch((error) => {
            console.log(error);
        });
  }
  render()
  {
  return (
    <HashRouter>
    <Switch>
        <Route path="/"  component={App}/>
    </Switch>
    </HashRouter>
  )
}
}
ReactDOM.render(<Result />, document.getElementById('root'));
// serviceWorker.unregister();
      // <Route path="/upload"  component={Upload}/>
