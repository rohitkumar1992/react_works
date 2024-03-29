import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*========Header===========*/}
        <header class="home_header">
          <div class="sidebar-header">
            <a href="javascript:;">
              <img class="small" src="images/logo_small.png" alt="" />
              <img src="images/f_logo.png" alt="" />
            </a>
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
                               <p class="font-weight-semibold">Allen Moreno</p>
                               <p class="font-weight-light text-muted mb-0">allenmoreno@gmail.com</p>
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
                             <a class="dropdown-item" href="javascript:;">
                                <i class="fa fa-sign-out" aria-hidden="true"></i>
                                Logout
                             </a>
                         </div>
                     </li>
                 </ul>
              </div>
          </nav>
          <div class="clearfix"></div>
        </header>

        <div class="wrapper">
          {/*========sidebar===========*/}
          <nav id="sidebar">
            <div class="user_head">
              <a href="javascript:;" class="box">
                <div class="icon">
                  <i class="fa fa-user-circle" aria-hidden="true"></i>
                </div>
                <p>User Name</p>
              </a>
            </div>
            <div class="nav_category">Main Menu</div>
            <ul class="components">
              <li>
                <a href="javascript:;">
                  <i class="fa menu_icon fa-puzzle-piece" aria-hidden="true"></i>
                  <span class="menu-title">Dashboard</span>
                </a>
              </li>
              <li class="drop">
                <a href="javascript:;">
                  <i class="fa menu_icon fa-tachometer" aria-hidden="true"></i>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <span class="menu-title">Publisher</span>
                </a>
                <ul id="dashboardmenu">
                  <li>
                    <a href="javascript:;">publisher 1</a>
                  </li>
                  <li>
                    <a href="javascript:;">publisher 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="fa menu_icon fa-book" aria-hidden="true"></i>
                  <span class="menu-title">About</span>
                </a>
              </li>
              <li class="drop">
                <a href="javascript:;">
                  <i class="fa menu_icon fa-camera" aria-hidden="true"></i>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <span class="menu-title">Page Layout</span>
                </a>
                <ul id="pageSubmenu">
                  <li><a href="javascript:;">Page 1</a></li>
                  <li><a href="javascript:;">Page 2</a></li>
                  <li><a href="javascript:;">Page 3</a></li>
                </ul>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="fa menu_icon fa-envelope-open" aria-hidden="true"></i>
                  <span class="menu-title">Page Layout</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="fa menu_icon fa-telegram" aria-hidden="true"></i>
                  <span class="menu-title">Setting</span>
                </a>
              </li>
            </ul>
          </nav>

          {/*========Content===========*/}
          <div id="content">
            <div class="content_area">
              <div class="content_header">
                <h2>Dashboard</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:;"><i class="fa fa-home" aria-hidden="true"></i></a></li>
                    <li class="breadcrumb-item"><a href="javascript:;">Dashboard</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Dashboard1</li>
                  </ol>
                </nav>
              </div>

              {/*========total cards===========*/}
              <div class="ttl_cards">
                <div class="row">
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="card clr1">
                      <div class="icon">
                        <i class="fa fa-user-plus" aria-hidden="true"></i>
                      </div>
                      <div class="number">
                        <span>26</span>
                      </div>
                      <div class="ttl">
                        <p>Total Registration</p>
                      </div>
                      <a href="javascript:;">View Detail <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="card clr2">
                      <div class="icon">
                        <i class="fa fa-user" aria-hidden="true"></i>
                      </div>
                      <div class="number">
                        <span>12</span>
                      </div>
                      <div class="ttl">
                        <p>Total User</p>
                      </div>
                      <a href="javascript:;">View Detail <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="card clr3">
                      <div class="icon">
                        <i class="fa fa-users" aria-hidden="true"></i>
                      </div>
                      <div class="number">
                        <span>124</span>
                      </div>
                      <div class="ttl">
                        <p>Total Subscription</p>
                      </div>
                      <a href="javascript:;">View Detail <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="card clr4">
                      <div class="icon">
                        <i class="fa fa-inr" aria-hidden="true"></i>
                      </div>
                      <div class="number">
                        <span>13</span>
                      </div>
                      <div class="ttl">
                        <p>Total Revenue</p>
                      </div>
                      <a href="javascript:;">View Detail <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>

              {/*========table===========*/}
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>User Id</th>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Gender</th>
                      <th>Register Date</th>
                      <th>Provider</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>87</td>
                      <td>Tester</td>
                      <td>test@gmail.com</td>
                      <td>Male</td>
                      <td>2019-07-08</td>
                      <td>Application</td>
                      <td>
                        <div class="status_btn">
                          <button type="button" class="btn btn-success btn-sm">Active</button>
                        </div>
                      </td>
                      <td>
                        <a href="javascript:;"><i class="fa fa-check-square" aria-hidden="true"></i></a>
                        <a href="javascript:;"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>87</td>
                      <td>Tester</td>
                      <td>test@gmail.com</td>
                      <td>Male</td>
                      <td>2019-07-08</td>
                      <td>Application</td>
                      <td>
                        <div class="status_btn">
                          <button type="button" class="btn btn-success btn-sm">Active</button>
                        </div>
                      </td>
                      <td>
                        <select>
                          <option>Pending</option>
                          <option>In Process</option>
                          <option>Close</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>87</td>
                      <td>Tester</td>
                      <td>test@gmail.com</td>
                      <td>Male</td>
                      <td>2019-07-08</td>
                      <td>Application</td>
                      <td>
                        <div class="status_btn">
                          <button type="button" class="btn btn-success btn-sm">Active</button>
                        </div>
                      </td>
                      <td>
                        <div class="dropdown">
                          <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Active
                          </button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a class="dropdown-item" href="javascript:;"><i class="fa fa-eye" aria-hidden="true"></i> View Entries</a>
                              <a class="dropdown-item" href="javascript:;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</a>
                              <a class="dropdown-item" href="javascript;;"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
                          </div>
                      </div>
                      </td>
                    </tr>
                    <tr>
                      <td>87</td>
                      <td>Tester</td>
                      <td>test@gmail.com</td>
                      <td>Male</td>
                      <td>2019-07-08</td>
                      <td>Application</td>
                      <td>
                        <div class="status_btn">
                          <button type="button" class="btn btn-success btn-sm">Active</button>
                        </div>
                      </td>
                      <td>
                        <a href="javascript:;"><i class="fa fa-check-square" aria-hidden="true"></i></a>
                        <a href="javascript:;"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>87</td>
                      <td>Tester</td>
                      <td>test@gmail.com</td>
                      <td>Male</td>
                      <td>2019-07-08</td>
                      <td>Application</td>
                      <td>
                        <div class="status_btn">
                          <button type="button" class="btn btn-success btn-sm">Active</button>
                        </div>
                      </td>
                      <td>
                        <select>
                          <option>Pending</option>
                          <option>In Process</option>
                          <option>Close</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>87</td>
                      <td>Tester</td>
                      <td>test@gmail.com</td>
                      <td>Male</td>
                      <td>2019-07-08</td>
                      <td>Application</td>
                      <td>
                        <div class="status_btn">
                          <button type="button" class="btn btn-success red btn-sm">Inactive</button>
                        </div>
                      </td>
                      <td>
                        <div class="dropdown">
                          <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Active
                          </button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a class="dropdown-item" href="javascript:;"><i class="fa fa-eye" aria-hidden="true"></i> View Entries</a>
                              <a class="dropdown-item" href="javascript:;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</a>
                              <a class="dropdown-item" href="javascript;;"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
                          </div>
                      </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <footer class="home_footer">
                <article class="footer_t">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="box l">
                              <p>© Copyright 2018 PlayFlix. All rights reserved.</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="box r">
                                <div class="social">
                                    <ul>
                                        <li>
                                            <a href="javascript:;"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="javascript:;"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="javascript:;"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </article>
            </footer>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
