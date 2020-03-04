import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Router,Link,Route,Switch,HashRouter,Redirect} from "react-router-dom";
import Movies from './container/Movies/movies';
import Not_Found from './component/not_found/not_found.js';
import axios from 'axios';
import Loader from './component/loader/home_loading'
import {PARTNER_ID,GET_TOKEN} from './url'

class Result extends React.Component{
  state={isLoading:false}
  componentDidMount()
  {
    //localStorage.setItem('token','ade46788d77e90ed7e532ce83873716e');
  //  localStorage.setItem('userid',327);
  if(localStorage.getItem('userid')==null)
  {
        localStorage.setItem('userid',0)
  }
    this.getGeoLocation()
    this.getToken();
  }
  getGeoLocation=()=>{
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
           localStorage.setItem('countrycode',data.country)
        }).catch((error) => {
            console.log(error);
        });
  }
  getToken=(mobile_num)=>{
    var formData1=new FormData();
    formData1.append('partnerid',PARTNER_ID);
    axios.post(GET_TOKEN,formData1).then((response)=>{
        if(response.status=='200'){
          localStorage.setItem('token',response.data.Token)
          this.setState({isLoading:true})
        }
        else{
        }
      }).catch((error)=>{
        console.log(error);
      })
  }
  render()
  {
    if(this.state.isLoading)
    {
  return (
    <HashRouter>
    <Switch>
        <Route path="/"  component={App}/>
    </Switch>
    </HashRouter>
  )
}
else {
  return(<Loader/>)
}
}
}
ReactDOM.render(<Result />, document.getElementById('root'));
// serviceWorker.unregister();
      // <Route path="/upload"  component={Upload}/>
