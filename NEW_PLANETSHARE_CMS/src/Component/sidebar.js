import React from 'react';
import {Link} from 'react-router-dom';
function Sidebar()
{
  return(
    <nav id="sidebar">
      <div class="user_head">
        <a href="#" class="box">
          <div class="icon">
            <i class="fa fa-user-circle" aria-hidden="true"></i>
          </div>
          <p>{localStorage.getItem('name')}</p>
        </a>
      </div>
      <ul class="components" id="accordion">
        <li>
          <a href="#">
            <i class="fa menu_icon fa-tachometer" aria-hidden="true"></i>
            <span class="menu-title">Dashboard</span>
          </a>
        </li>
        <li>
          <Link to="/userlist">
            <i class="fa menu_icon fa-users" aria-hidden="true"></i>
            <span class="menu-title">UserList</span>
          </Link>
        </li>
        <li class="drop">
          <Link to="/" data-toggle="collapse" data-target="#seller_l" >
            <i class="fa menu_icon fa-briefcase" aria-hidden="true"></i>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
            <span class="menu-title">Seller</span>
          </Link>
          <ul id="seller_l" class="collapse">
          <li>
            <Link to="/seller">Seller List</Link>
          </li>
            <li>
              <Link to="/seller/imagelist">Seller Images</Link>
            </li>
            <li>
              <Link to="/seller/videolist">Seller Videos</Link>
            </li>
            <li>
              <Link to="/seller/categories">Categories</Link>
            </li>
            <li>
              <Link to="/seller/bidding">Bidding</Link>
            </li>
          </ul>
        </li>
        <li class="drop">
          <Link to="/" data-toggle="collapse" data-target="#vedor_l">
            <i class="fa menu_icon fa-shopping-bag" aria-hidden="true"></i>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
            <span class="menu-title">Vendor</span>
          </Link>
          <ul id="vedor_l" class="collapse">
          <li>
            <Link to="/vendor">Vendor List</Link>
          </li>
            <li>
              <Link to="/vendor/servicelist">Vendor Service List</Link>
            </li>
            <li>
              <Link to="/vendor/gigList">Vendor Gigs List</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/packs">
            <i class="fa menu_icon fa-gift" aria-hidden="true"></i>
            <span class="menu-title">Packs</span>
          </Link>
        </li>
        <li>
        <Link to="/orders">
          <i class="fa menu_icon fa-shopping-cart" aria-hidden="true"></i>
          <span class="menu-title">Orders</span>
        </Link>
        </li>
        <li class="drop">
          <Link to="/" data-toggle="collapse" data-target="#contact_l" >
            <i class="fa menu_icon fa-life-ring" aria-hidden="true"></i>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
            <span class="menu-title">Support</span>
          </Link>
          <ul id="contact_l" class="collapse">
          <li>
            <Link to="/contactlist">User Query</Link>
          </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
export default Sidebar;
