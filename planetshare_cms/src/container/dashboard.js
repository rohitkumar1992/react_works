import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  HashRouter
} from "react-router-dom";
import logo from './../logo.svg';
import './../App.css';
import Header from '../component/header/header.js';
import Sidebar from './sidebar/sidebar.js';
import MainContainer from './maincontainer/maincontainer.js';
// import Footer from '../component/Footer/footer.js';
class Dashboard extends Component {
   render() {
     const name=localStorage.getItem('name');
    if(!localStorage.getItem('token'))
    {
      return <Redirect to='/login' />
    }
    else
    {
        return (
          <div className="App">
          <div id="main-wrapper">
            <Header name={name}/>
            <Sidebar />
            <MainContainer />
            <div style={{height:'100px'}}></div>
            <footer class="footer text-center">
             <span style={{float:'right'}}>All Rights Reserved by Planetcast. <a href="https://www.planetcast.in">Planetcast</a></span>.
            </footer>
          </div>
          </div>
        );
    }
  }
}

export default Dashboard;
// <div class="preloader">
//     <div class="lds-ripple">
//         <div class="lds-pos"></div>
//         <div class="lds-pos"></div>
//     </div>
// </div>
