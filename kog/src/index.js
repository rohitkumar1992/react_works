import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Router,Link,Route,Switch,HashRouter,Redirect} from "react-router-dom";
import Movies from './container/Movies/movies';
import NotFound from './component/not_found/not_found';
import {PARTNER_ID,GET_TOKEN} from './url'
import axios from 'axios'
// import NotFound from './component/not_found/not_found.js'
class Result extends React.Component{
  componentDidMount()
  {
    this.getGeoLocation()
    if(localStorage.getItem('token')==null)
    {
          this.getToken()
    }
  }
  getGeoLocation=()=>{
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
           localStorage.setItem('countrycode',data.country)
        }).catch((error) => {
            console.log(error);
        });
  }
  getToken=()=>{
    var formData1=new FormData();
    formData1.append('partnerid',PARTNER_ID);
    axios.post(GET_TOKEN,formData1).then((response)=>{
        if(response.status=='200'){
          localStorage.setItem('token',response.data.Token)
        }
        else{
        }
      }).catch((error)=>{
        console.log(error);
      })
  }
  render()
  {
  return (
    <HashRouter>
    <Switch>
        <Route path="/"  component={App}/>
        <Route path="*"  component={NotFound}/>
    </Switch>
    </HashRouter>
  )
}
}
ReactDOM.render(<Result />, document.getElementById('root'));
// serviceWorker.unregister();
      // <Route path="/upload"  component={Upload}/>
