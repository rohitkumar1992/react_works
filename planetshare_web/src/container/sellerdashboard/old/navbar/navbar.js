import React, { Component } from 'react';
import {Link} from "react-router-dom";
const Navbar =(props)=>{
  return(    <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
          <Link to="/"><a class="navbar-brand brand-logo" href="">
            <img src="img/login-logo.png" alt="logo" />
          </a></Link>
          <Link to="/"><a class="navbar-brand brand-logo-mini" href="index.html">
            <img src="img/login-logo.png" alt="logo" />
          </a></Link>
        </div>
        <div class="navbar-menu-wrapper d-flex align-items-center">

          <ul class="navbar-nav navbar-nav-right">
            <li class="nav-item dropdown">
              <a class="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <i class="mdi mdi-file-document-box"></i>
                <span class="count">7</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                <div class="dropdown-item">
                  <p class="mb-0 font-weight-normal float-left">You have 7 unread mails
                  </p>
                  <span class="badge badge-info badge-pill float-right">View all</span>
                </div>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <img src="images/faces/face4.jpg" alt="image" class="profile-pic"/>
                  </div>
                  <div class="preview-item-content flex-grow">
                    <h6 class="preview-subject ellipsis font-weight-medium text-dark">David Grey
                      <span class="float-right font-weight-light small-text">1 Minutes ago</span>
                    </h6>
                    <p class="font-weight-light small-text">
                      The meeting is cancelled
                    </p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <img src="images/faces/face2.jpg" alt="image" class="profile-pic"/>
                  </div>
                  <div class="preview-item-content flex-grow">
                    <h6 class="preview-subject ellipsis font-weight-medium text-dark">Tim Cook
                      <span class="float-right font-weight-light small-text">15 Minutes ago</span>
                    </h6>
                    <p class="font-weight-light small-text">
                      New product launch
                    </p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <img src="images/faces/face3.jpg" alt="image" class="profile-pic"/>
                  </div>
                  <div class="preview-item-content flex-grow">
                    <h6 class="preview-subject ellipsis font-weight-medium text-dark"> Johnson
                      <span class="float-right font-weight-light small-text">18 Minutes ago</span>
                    </h6>
                    <p class="font-weight-light small-text">
                      Upcoming board meeting
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                <i class="mdi mdi-bell"></i>
                <span class="count">4</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                <a class="dropdown-item">
                  <p class="mb-0 font-weight-normal float-left">You have 4 new notifications
                  </p>
                  <span class="badge badge-pill badge-warning float-right">View all</span>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-success">
                      <i class="mdi mdi-alert-circle-outline mx-0"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-medium text-dark">Application Error</h6>
                    <p class="font-weight-light small-text">
                      Just now
                    </p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-warning">
                      <i class="mdi mdi-comment-text-outline mx-0"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-medium text-dark">Settings</h6>
                    <p class="font-weight-light small-text">
                      Private message
                    </p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-info">
                      <i class="mdi mdi-email-outline mx-0"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-medium text-dark">New user registration</h6>
                    <p class="font-weight-light small-text">
                      2 days ago
                    </p>
                  </div>
                </a>
              </div>
            </li>
             <li class="nav-item dropdown  d-xl-inline-block">
              <a class="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
              Manage Account
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
              	<div class="d-flex"><img src="img/40x40.png" />
              	<p>Your Store Name will appear here</p></div>
              	<div class="wrapper">

                      <div class="progress">
                        <div class="progress-bar bg-primary progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "20%"}} aria-valuenow="20"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                       <div class="d-flex justify-content-between mt-2">
                        <p class="mb-2">Your Account is </p>
                        <p class="mb-2 text-primary">20%  complete</p>
                      </div>
                    </div>
                <a class="dropdown-item p-0">
                  <div class="d-flex border-bottom">
                    <div class="py-3 px-4 d-flex align-items-center justify-content-center">
                      <i class="mdi mdi-bookmark-plus-outline mr-0 text-gray"></i>
                    </div>
                    <div class="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                      <i class="mdi mdi-account-outline mr-0 text-gray"></i>
                    </div>
                    <div class="py-3 px-4 d-flex align-items-center justify-content-center">
                      <i class="mdi mdi-alarm-check mr-0 text-gray"></i>
                    </div>
                  </div>
                </a>
                <div class=" align-items-left  justify-content-left ">
                	<ul class="nav flex-column">
                   <li class="nav-item">
  			    	  <div class="border-bottom">
  			    	 	 <div class="text-left"> <a class="nav-link"><p class="nav-link1"> Account Details </p></a> </div>
  			    	 	 <div class="d-flex"> <i class=" mdi mdi-checkbox-marked-circle-outline text-warning mdi-18px pt-2  text-indent5"></i> <a class="nav-link nav-link1" href="#"> <p class="mb-0 manage-account"> Email Verification </p></a> </div>
  			    	 	 <div class="d-flex"> <i class=" mdi mdi-checkbox-marked-circle-outline text-danger mdi-18px pt-2 text-indent5"></i> <a class="nav-link nav-link1" href="#"> <p  class="mb-0 manage-account"> Phone Verification </p></a> </div>
  			         </div>
                   </li>
                  </ul>


             <ul class="nav flex-column">
                             <li class="nav-item">
                                  <div class="border-bottom">
                                      <div class="text-left"> <a class="nav-link"><p class="nav-link1"> Business Details </p></a> </div>
                                      <div class="d-flex"> <i class=" mdi mdi-checkbox-marked-circle-outline text-dark mdi-18px pt-2 text-indent5"></i> <a class="nav-link"> <p class="mb-0 manage-account"> GSTIN </p></a> </div>
                                      <div class="d-flex"> <i class=" mdi mdi-checkbox-marked-circle-outline text-dark mdi-18px pt-2 text-indent5"></i> <a class="nav-link nav-link1" href="#"> <p  class="mb-0 manage-account">Signature Verified </p></a> </div>
                                 </div>
                             </li>
                            </ul>

                       <ul class="nav flex-column">
                             <li class="nav-item">
                                  <div class="border-bottom">
                                      <div class="text-left"> <a class="nav-link"><p class="nav-link1"> Bank Account Details </p></a> </div>
                                      <div class="d-flex"> <i class=" mdi mdi-checkbox-marked-circle-outline text-dark mdi-18px pt-2 text-indent5"></i> <a class="nav-link nav-link1" href="#"> <p class="mb-0 manage-account"> Bank Acc. Verified </p></a> </div>
                                      <div class="d-flex"> <i class=" mdi mdi-checkbox-marked-circle-outline text-dark mdi-18px pt-2 text-indent5"></i> <a class="nav-link nav-link1" href="#"> <p  class="mb-0 manage-account">Cancelled Cheque </p></a> </div>
                                 </div>
                             </li>
                            </ul>

                 <ul class="nav flex-column">
                   <li class="nav-item">
  			    	  <div class="border-bottom">
  			    	 	 <div class="text-left d-flex"><i class=" mdi mdi-checkbox-marked-circle-outline text-dark mdi-18px pt-2"></i> 	 <a class="nav-link nav-link1"><p class=""> Listing Created </p></a> </div>
  			    	 </div>
                   </li>
                  </ul>
                   <ul class="nav flex-column">
                   <li class="nav-item">
  			    	  <div class="border-bottom">
  			    	 	 <div class="text-left d-flex"><i class=" mdi mdi-checkbox-marked-circle-outline text-dark mdi-18px pt-2"></i> 	 <a class="nav-link nav-link1"><p class=" "> Store Details </p></a> </div>
  			    	 </div>
                   </li>
                  </ul>


                </div>
              </div>
            </li>
            <li class="nav-item dropdown   d-xl-inline-block">
              <a class="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <span class="profile-text">Hello, V.Welsh !</span>
                <img class="img-xs rounded-circle" src="images/faces/face1.jpg" alt="Profile image"/>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                <a class="dropdown-item p-0">
                  <div class="d-flex border-bottom">
                    <div class="py-3 px-4 d-flex align-items-center justify-content-center">
                      <i class="mdi mdi-bookmark-plus-outline mr-0 text-gray"></i>
                    </div>
                    <div class="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                      <i class="mdi mdi-account-outline mr-0 text-gray"></i>
                    </div>
                    <div class="py-3 px-4 d-flex align-items-center justify-content-center">
                      <i class="mdi mdi-alarm-check mr-0 text-gray"></i>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item mt-2">
                  Manage Accounts
                </a>
                <a class="dropdown-item">
                  Change Password
                </a>
                <a class="dropdown-item">
                  Check Inbox
                </a>
                <a class="dropdown-item">
                  Sign Out
                </a>
              </div>
            </li>
          </ul>
          <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span class="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>);
}
export default Navbar;
