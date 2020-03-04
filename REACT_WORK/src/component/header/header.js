import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component
{
  render()
  {
    return(  <header class="home_header">
          <div class="header-top">
              <div class="row">
                  <div class="col-md-2">
                      <div class="logo">
                          <Link to="/"><img src="images/logo.png" alt="" /></Link>
                      </div>
                  </div>
                  <div class="col-md-10">
                      <nav class="navbar navbar-expand-md">
                          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                              <span class="navbar-toggler-icon"><i class="fa fa-bars" aria-hidden="true"></i></span>
                          </button>
                          <div class="mobile_bg"></div>
                          <div class="collapse navbar-collapse" id="collapsibleNavbar">
                              <span class="close_icon" style={{display:"none"}}>X</span>
                              <ul class="navbar-nav f">
                                  {/* <li class="nav-item dropdown">
                                      <a class="nav-link dropdown-toggle" href="Javascript:;" data-toggle="dropdown">Images</a>
                                      <div class="dropdown-menu">
                                          <a class="dropdown-item" href="javascript:;">Photos</a>
                                          <a class="dropdown-item" href="javascript:;">Vendor</a>
                                      </div>
                                  </li>*/}
                                  <li class="nav-item active">
                                      <Link to="/"  class="nav-link" href="index.html">Home</Link>
                                  </li>
                                  <li class="nav-item">
                                      <Link to="/movies" class="nav-link" href="movies.html">Movies</Link>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="javascript:;">Cooking</a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="javascript:;">K world</a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="javascript:;">Kids</a>
                                  </li>
                              </ul>
                              <ul class="navbar-nav float-right">
                                  <li class="h_search">
                                      <form action="javascript:;" class="search_f">
                                          <div class="inputbox">
                                              <input type="text" placeholder="Search" />
                                              <button type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
                                          </div>
                                          <div class="clearfix"></div>
                                      </form>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" data-toggle="modal" data-target="#login" href="javascript:;">Login</a>
                                  </li>
                              </ul>
                          </div>
                      </nav>
                  </div>
              </div>
          </div>
      </header>
    );
  }
}
export default Header;
