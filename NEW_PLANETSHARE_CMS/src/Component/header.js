import React from 'react';
import {LOGOUT,TAG,TOKEN,USERLIST,USERID,HEADER} from '../url.js';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Header extends React.Component
{
  logout=()=>{
    axios.post(LOGOUT,{
      'tag':'dash'
    },HEADER).then((res)=>{
      if(res.data.success==1)
      {
        localStorage.clear();
      setTimeout(()=>window.location.href='/',1000);
      }
      else {
        alert(res.data.msg);
      }
    }).catch((error)=>{

    })
  }
  render()
  {
  return( <header class="home_header">
            <div class="sidebar-header">
              <Link to="/" >
                <img class="small" src="images/logo_small.png" alt="" />
                <img src="images/f_logo.png" alt="" />
              </Link>
            </div>
            <nav class="navbar navbar-expand-sm">
                <button type="button" id="sidebarCollapse" class="btn btn-sidebar">
                    <span><i class="fa fa-align-left"></i></span>
                </button>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"><i class="fa fa-bars" aria-hidden="true"></i></span>
                </button>
                <div class="h_search">
                    <form action="javascript:;" class="search_f">
                        <div class="inputbox">
                            <input type="text" placeholder="Search" />
                            <button type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
                        </div>
                        <div class="clearfix"></div>
                    </form>
                </div>
                <div class="mobile_bg"></div>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <span class="close_icon" style={{display:"none"}}>X</span>
                    <ul class="navbar-nav float-right">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="Javascript:;" data-toggle="dropdown">
                              <i class="fa fa-bell-o" aria-hidden="true"></i>
                              <span class="count">1</span>
                            </a>
                            <div class="dropdown-menu preview-list">
                              <a class="dropdown-item py">
                                <p class="">You have 7 unread mails <span class="badge badge-pill badge-primary">View all</span></p>
                              </a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item">
                                <div class="preview-thumbnail">
                                  <img src="images/face8.jpg" alt="image" class="img-sm profile-pic" />
                                </div>
                                <div class="preview-item-content">
                                  <p class="preview-subject">Marian Garner </p>
                                  <p>The meeting is cancelled </p>
                                </div>
                              </a>
                              <a class="dropdown-item">
                                <div class="preview-thumbnail">
                                  <img src="images/face8.jpg" alt="image" class="img-sm profile-pic" />
                                </div>
                                <div class="preview-item-content">
                                  <p class="preview-subject">David Grey </p>
                                  <p>The meeting is cancelled </p>
                                </div>
                              </a>
                              <a class="dropdown-item">
                                <div class="preview-thumbnail">
                                  <img src="images/face8.jpg" alt="image" class="img-sm profile-pic" />
                                </div>
                                <div class="preview-item-content">
                                  <p class="preview-subject">Travis Jenkins </p>
                                  <p>The meeting is cancelled </p>
                                </div>
                              </a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="Javascript:;" data-toggle="dropdown">
                              <i class="fa fa-envelope-o" aria-hidden="true"></i>
                              <span class="count">1</span>
                            </a>
                            <div class="dropdown-menu preview-list">
                              <a class="dropdown-item py">
                                <p class="">You have 7 unread mails <span class="badge badge-pill badge-primary">View all</span></p>
                              </a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item">
                                <div class="preview-thumbnail">
                                  <i class="fa fa-cog" aria-hidden="true"></i>
                                </div>
                                <div class="preview-item-content">
                                  <p class="preview-subject">Marian Garner </p>
                                  <p>The meeting is cancelled </p>
                                </div>
                              </a>
                              <a class="dropdown-item">
                                <div class="preview-thumbnail">
                                  <i class="fa fa-cog" aria-hidden="true"></i>
                                </div>
                                <div class="preview-item-content">
                                  <p class="preview-subject">David Grey </p>
                                  <p>The meeting is cancelled </p>
                                </div>
                              </a>
                              <a class="dropdown-item">
                                <div class="preview-thumbnail">
                                  <i class="fa fa-cog" aria-hidden="true"></i>
                                </div>
                                <div class="preview-item-content">
                                  <p class="preview-subject">Travis Jenkins </p>
                                  <p>The meeting is cancelled </p>
                                </div>
                              </a>
                            </div>
                        </li>
                       <li class="nav-item dropdown login">
                           <a class="nav-link dropdown-toggle" href="Javascript:;" data-toggle="dropdown"><i class="fa fa-user-circle" aria-hidden="true"></i><i class="fa fa-angle-down" aria-hidden="true"></i></a>
                           <div class="dropdown-menu">
                               <div class="dropdown-header text-center">
                                 <img class="img-md rounded-circle" src="images/face8.jpg" alt="Profile image" />
                                 <p class="font-weight-semibold">{localStorage.getItem('name')}</p>
                                 <p class="font-weight-light text-muted mb-0">{localStorage.getItem('email')}</p>
                               </div>
                               <a class="dropdown-item" href="javascript:;">
                                  <i class="fa fa-user" aria-hidden="true"></i>
                                  My Profile
                                  <span class="badge badge-pill badge-danger">1</span>
                               </a>
                               <a class="dropdown-item" href="javascript:;">
                                  <i class="fa fa-comment" aria-hidden="true"></i>
                                  Message
                                  <span class="badge badge-pill badge-danger">1</span>
                               </a>
                               <a class="dropdown-item" href="javascript:;">
                                  <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                                  Activity
                                  <span class="badge badge-pill badge-danger">1</span>
                               </a>
                               <a class="dropdown-item" href="javascript:;" onClick={this.logout}>
                                  <i class="fa fa-sign-out" aria-hidden="true"></i>
                                  Logout
                               </a>
                           </div>
                       </li>
                   </ul>
                </div>
            </nav>
            <div class="clearfix"></div>
          </header>)
        }
}
export default Header;
