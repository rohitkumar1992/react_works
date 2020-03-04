import React, { Component } from 'react';
import {Link} from "react-router-dom";
import $ from 'jquery';
import {LOGOUT} from '../../../url.js';
import axios from 'axios';
import './navbar.css';
class Navbar extends Component{
    componentDidMount()
    {
$('ul.nav li.dropdown').click(function(){
     $(this).parents('.dropdown-menu').stop(true,
true).delay(200).fadeOut(500);
})
// $('ul.nav li.dropdown').hover(function() {
//     $(this).find('.dropdown-menu').stop(true,
//true).delay(200).fadeIn(500);
// }, function() {
//     $(this).find('.dropdown-menu').stop(true,
//true).delay(200).fadeOut(500);
// });
// $('.dropdown').click(function(){
//      $(this).parents('.dropdown-menu').stop(true,
// true).delay(200).fadeOut(500);
// })
    }
    logout=()=>
  {
    axios.post(LOGOUT,{

    })
  .then(response=>{
    console.log(response.data.success);
    if(response.data.success=="1" || response.data.success==1){
      localStorage.clear();
      // this.props.history.push('/web');
        window.location.href="/"
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  }
    render()
    {
    if(this.props.role=="buyer")
    {
  return(
    <nav class="navbar navbar-expand-md navbar-light fixed-top"  style={{background:'rgba(202,52,100,1)'}}>
      <div class="container">
        <a class="navbar-brand" href="#" class="img-responsive" style={{width: "14%"}}><img src="img/logo.png"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse order-2 main_nav" id="collapsibleNavbar" >
          <ul class="nav navigation nav-dropdown dropdown-menu-center">
              <Link to="/dashboard/buyer">
                <li class="dropdown justify-content-center nav-item">
                  <a href="#" class=" nav-link" style={{color:'white'}}>Dashboard</a>
                </li>
              </Link>
              <Link to="/dashboard/buyer/service">
                <li class="dropdown justify-content-center nav-item">
                  <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" style={{color:'white'}}>My Services</a>
                  <ul class="dropdown-menu mt-3">
                    <Link to="/dashboard/buyer/service/transcoding">
                      <li>
                        <a href="#" class=" nav-link"><i class="fa fa-film"></i>Transcoding</a>
                      </li>
                    </Link>
                    <Link to="/dashboard/buyer/service/dubbing">
                      <li>
                        <a href="#" class="nav-link"><i class="fa fa-film"></i>Dubbing</a>
                      </li>
                    </Link>
                    <Link to="/dashboard/buyer/service/tagging">
                      <li>
                        <a href="#" class="nav-link"><i class="fa fa-film"></i>Auto Tagging</a>
                      </li>
                    </Link>
                    <Link to="/dashboard/buyer/service/streaming">
                      <li>
                        <a href="#" class="nav-link"><i class="fa fa-film"></i>Streaming</a>
                      </li>
                    </Link>
                    <Link to="/dashboard/buyer/service/archieving">
                      <li>
                        <a href="#" class=" nav-link"><i class="fa fa-film"></i>Archiving</a>
                      </li>
                    </Link>
                    <Link to="/dashboard/buyer/service/subtitling">
                      <li>
                        <a href="#" class=" nav-link"><i class="fa fa-film"></i>Subtitling & Caption</a>
                      </li>
                    </Link>
                  </ul>
                </li>
              </Link>
          </ul>
          <ul class="nav  navbar-right nav-dropdown ml-auto dropdown-menu-center">
            <li class="dropdown mr-8 justify-content-center">
              {localStorage.getItem('Name')==null?<a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <div class="btn btn-login"><img src="img/user.png" width="40px" height="40px" /></div><b class="caret"></b></a>:<a href="#" class="dropdown-toggle user_btn" data-toggle="dropdown" style=
              {{color:'white'}}><div class="btn" ><b>
              {localStorage.getItem('Name').charAt(0).toUpperCase()}</b></div><b class="caret"></b>
              </a>}
              <ul class="dropdown-menu rounded" style={{marginLeft:'-100px', marginTop:"10px" }}>
                <li>
                  <a href="#" class="nav-link" onClick={this.logout}><i class="fa fa-sign-out pr-2"></i>&nbsp;Logout</a>
                </li>
                <li class="divider"></li>
                </ul>
              </li>
              <li class="cart">
               <Link to="#" class=" nav-link"><i class="fa fa-shopping-cart pr-2"></i></Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
      );
     }
     if(this.props.role=="seller")
     {
             return(
        <nav class="navbar navbar-expand-md navbar-light fixed-top "  style={{background:'rgba(202,52,100,1)'}}>
          <div class="container">
              <a class="navbar-brand" href="#" class="img-responsive" style={{width: "14%"}}><img src="img/logo.png"/></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse order-2 main_nav" id="collapsibleNavbar" >
                <ul class="nav navigation nav-dropdown dropdown-menu-center">
                    <Link to="/dashboard/seller/upload">
                      <li class="dropdown justify-content-center nav-item">
                        <a href="#" class=" nav-link" style={{color:'white'}}>Upload</a>
                      </li>
                    </Link>
                    <Link to="/dashboard/seller">
                      <li class="dropdown justify-content-center nav-item">
                        <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" style={{color:'white'}}>Listings</a>
                        <ul class="dropdown-menu mt-3">
                          <Link to="/dashboard/seller/mylist">
                            <li>
                              <a href="#" class="nav-link"><i class="fa fa-film"></i>My Listing</a>
                            </li>
                          </Link>
                          <Link to="/dashboard/seller/approvalrequest">
                            <li>
                              <a href="#" class="nav-link"><i class="fa fa-film"></i>Approval Request</a>
                            </li>
                          </Link>
                        </ul>
                      </li>
                    </Link>
                </ul>
                <ul class="nav  navbar-right nav-dropdown ml-auto dropdown-menu-center">
                  <li class="dropdown mr-8 justify-content-center">
                    {localStorage.getItem('Name')==null?<a href="#" class="dropdown-toggle" data-toggle="dropdown"><div class="btn btn-login"><img src="img/user.png" width="40px" height="40px" /></div><b class="caret"></b></a>:<a href="#" class="dropdown-toggle user_btn" data-toggle="dropdown" style=
                    {{color:'white'}}><div class="btn" ><b>
                    {localStorage.getItem('Name').charAt(0).toUpperCase()}</b></div><b class="caret"></b>
                    </a>}
                    <ul class="dropdown-menu rounded"    style={{marginLeft:'-100px', marginTop:"10px" }}>
                      <Link to="/dashboard/seller">
                        <li>
                          <a href="#" class=" nav-link" ><i class="fa fa-user pr-2" style={{fontSize:'18px'}}></i>&nbsp;My Dashboard</a>
                        </li>
                      </Link>
                      <Link to="/dashboard/seller/profile">
                        <li>
                          <a href="#" class="nav-link" ><i class="fa fa-user pr-2" style={{fontSize:'18px'}}></i>&nbsp;Your Profile</a>
                        </li>
                      </Link>
                      <li>
                        <a href="#" class=" nav-link" onClick={this.logout}><i class="fa fa-sign-out pr-2"></i>&nbsp;Logout</a>
                      </li>
                      <li class="divider"></li>
                    </ul>
                  </li>
                  <li class="cart">
                   <Link to="#" class=" nav-link"><i class="fa fa-shopping-cart pr-2"></i></Link>
                  </li>
                </ul>
            </div>
          </div>
         </nav>
                     );
    }
    if(this.props.role=="vendor")
    {
        return(
        <nav class="navbar navbar-expand-md navbar-light fixed-top " style={{background:'rgba(202,52,100,1)'}}>
          <div class="container">
            <a class="navbar-brand" href="#" class="img-responsive" style={{width: "14%"}}><img src="img/logo.png"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
              <span class="navbar-toggler-icon"></span>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse order-2 main_nav" id="collapsibleNavbar" >
              <ul class="nav navigation nav-dropdown dropdown-menu-center">
                <Link to="/dashboard/vendor">
                  <li class="dropdown justify-content-center nav-item">
                    <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" style={{color:'white'}}>Services</a>
                    <ul class="dropdown-menu mt-3">
                      <Link to="/dashboard/vendor/addservice">
                        <li>
                          <a href="#" class=" nav-link"><i class="fa fa-film"></i>Add Service</a>
                        </li>
                      </Link>
                      <Link to="/dashboard/vendor/servicelist">
                        <li>
                          <a href="#" class=" nav-link"><i class="fa fa-film"></i>List Service</a>
                        </li>
                      </Link>
                    </ul>
                  </li>
                </Link>
                <Link to="/dashboard/vendor">
                  <li class="dropdown justify-content-center nav-item">
                    <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" style={{color:'white'}}>Jobs</a>
                    <ul class="dropdown-menu mt-3">
                      <Link to="/dashboard/vendor/listjobs"><li><a href="#" class="nav-link"><i class="fa fa-film"></i>My Jobs</a></li></Link>
                    </ul>
                  </li>
                </Link>
                <Link to="/dashboard/vendor"><li class="dropdown justify-content-center nav-item">
                  <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" style={{color:'white'}}>Payments</a>
                  <ul class="dropdown-menu mt-3">
                    <Link to="/dashboard/vendor/payment_overview"><li><a href="#" class=" nav-link"><i class="fa fa-film"></i>Payments Overview</a></li></Link>
                  </ul>
                </li>
              </Link>
              </ul>
              <ul class="nav  navbar-right nav-dropdown ml-auto dropdown-menu-center">
                <li class="dropdown mr-8 justify-content-center">
                  {localStorage.getItem('Name')==null?<a href="#" class="dropdown-toggle" data-toggle="dropdown"><div class="btn btn-login"><img src="img/user.png" width="40px" height="40px" /></div><b class="caret"></b></a>:<a href="#" class="dropdown-toggle user_btn" data-toggle="dropdown" style=
                  {{color:'white'}}><div class="btn" ><b>
                  {localStorage.getItem('Name').charAt(0).toUpperCase()}</b></div><b class="caret"></b>
                  </a>}
                  <ul class="dropdown-menu rounded" style={{marginLeft:'-100px', marginTop:"10px" }}>
                    <Link to="/dashboard/vendor"><li><a href="#" class=" nav-link" ><i class="fa fa-user pr-2" style={{fontSize:'18px'}}></i>&nbsp;My Dashboard</a></li></Link>
                    <Link to="/dashboard/vendor/profile"><li><a href="#" class="nav-link" ><i class="fa fa-user pr-2" style={{fontSize:'18px'}}></i>&nbsp;Your Profile</a></li></Link>
                    <li>
                      <a href="#" class=" nav-link" onClick={this.logout}><i class="fa fa-sign-out pr-2"></i>&nbsp;Logout</a>
                    </li>
                    <li class="divider"></li>
                  </ul>
                </li>
                <li class="cart">
                 <Link to="#" class=" nav-link"><i class="fa fa-shopping-cart pr-2"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
                );
}
}
}
export default Navbar;
