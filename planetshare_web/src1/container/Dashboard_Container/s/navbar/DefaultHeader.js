import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
// import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import {
  BrowserRouter as Router,
  Link,Redirect
} from "react-router-dom";
class DefaultHeader extends Component {
  constructor(props) {
    super(props);
}
logout()
{

  setTimeout(function(){
      localStorage.clear();
    window.location.href='http://localhost:3000/#/login';

  }.bind(this),1000);
       alert('Bye '+localStorage.getItem('name'));
}
render()
  {
return(

  <React.Fragment >
          <AppSidebarToggler className="d-lg-none" display="md" mobile />
          <AppNavbarBrand><h3><b>CMS</b></h3></AppNavbarBrand>
          <AppSidebarToggler className="d-md-down-none" id="toggle-bar" display="lg" />

          <Nav className="d-md-down-none " navbar>
            <NavItem className="px-3" >
              <Link to="/dashboard" className="header-data-color">Dashboard</Link>
            </NavItem>
            <NavItem className="px-3">
              <Link to="/users" className="header-data-color">Users</Link>
            </NavItem>
            <NavItem className="px-3">
              <Link to="/Settings" className="header-data-color">Settings</Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem className="d-md-down-none">
              <NavLink href="#"><i className="fa fa-bell"></i><Badge pill color="danger">5</Badge></NavLink>
            </NavItem>
            <NavItem className="d-md-down-none">
              <NavLink href="#"><i className=" 	fa fa-list-ul"></i></NavLink>
            </NavItem>
            <NavItem className="d-md-down-none">
              <NavLink href="#"><i className="icon-location-pin"></i></NavLink>
            </NavItem>
            <NavItem className="d-md-down-none">
            <b>{localStorage.getItem('name')}</b>
            </NavItem>
            <AppHeaderDropdown direction="down">
              <DropdownToggle nav>
              hi
              </DropdownToggle>
              <DropdownMenu right style={{ right: 'auto' }}>
                <DropdownItem ><i  style={{color:'black'}}>Hello {localStorage.getItem('name')} !</i></DropdownItem>
                <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
                <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
                <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
                <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
                <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
                <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
                <Link to="/profile">
                  <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
                </Link>
                <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
                <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
                <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
                <DropdownItem onClick={this.logout.bind(this)}><i className="fa fa-lock"></i> Logout</DropdownItem>
              </DropdownMenu>
            </AppHeaderDropdown>
          </Nav>
          {/*<AppAsideToggler className="d-lg-none" mobile />*/}
        </React.Fragment>
);
  }
}
export default DefaultHeader;
