import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import axios from 'axios';
import {MENU_DATA} from '../../url'
class Header extends React.Component
{
  state={
    menuItems:[]
  }
  componentDidMount()
  {
    this.getData();
  }
  getData=()=>{
    var formData=new FormData();
    formData.append('userid',0);
    formData.append('countrycode','IN');
    formData.append('partnerid','ott357');
    axios.post(MENU_DATA,formData).then((response)=>{
      if(response.status=='200')
      {
          var result=response.data;
          this.setState({menuItems:result.Menu})
      }
    }).catch((error)=>{
      console.log(error);
    })
  }
  render()
  {
    const route_name=this.props.location.pathname.split('/')[1]
    const {menuItems}=this.state;
    const MenuItems=menuItems.map((result,key)=>{
      return(<li class={`nav-item ${(route_name.length==0 && result.catName=='HOME')?'active':result.catName.replace(/\s/g,'').toLowerCase()==route_name?'active':''}`}>
          <Link to={`/${(result.catName.replace(/\s/g,'')).toLowerCase()}/${result.catID}`}  class="nav-link" href="index.html">{result.catName}</Link>
      </li>);
    })
    return(<header class="home_header">
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
                                  {MenuItems}

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
                                   <a class="nav-link" data-toggle="modal" data-target="#login_form" href="javascript:;">Login</a>
                               </li>
                               <li class="nav-item dropdown">
                                   <a class="nav-link dropdown-toggle" href="Javascript:;" data-toggle="dropdown"><i class="fa fa-user-circle" aria-hidden="true"></i><i class="fa fa-angle-down" aria-hidden="true"></i></a>
                                   <div class="dropdown-menu">
                                       <a class="dropdown-item" href="javascript:;">dashboard</a>
                                       <a class="dropdown-item" href="javascript:;">profile</a>
                                       <a class="dropdown-item" href="javascript:;">Logout</a>
                                   </div>
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
