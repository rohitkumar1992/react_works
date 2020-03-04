import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Services from '../../container/services/services';
import {VIDEO_SEARCH} from '../../url.js';
import Banner from '../../container/banner/banner';
import axios from 'axios';
import './category_component.css';
class CategoryContent extends Component
 {
   state={
     searchList:[]
   }

     searchData=(e)=>{
       var keyword=e.target.search_keyword.value;
     if(keyword=='')
     {
       //this.props.history.push('/');
       return false;
     }
     this.props.history.push(`/web/search/${keyword}`);
   }
   componentDidMount()
   {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
   }
  render() {

    return (
      <div class="top_div" id="buyer_category_list">
        <div class="searchbox">
            <form onSubmit={this.searchData}>
                <div class="inputbox">
                    <input type="text" placeholder="Search Videos" name="search_keyword"/>
                    <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                </div>
                {/*<div class="selectbox">
                    <div class="cat_links">
                      <a href="javascript:;" data-toggle="collapse" data-target="#cat_links"><i class="fa fa-list-ul" aria-hidden="true"></i> Categories</a>
                      <div id="cat_links" class="collapse">
                        <h4>Browse Categories</h4>
                        <ul>
                          <li>
                            <Link to="#">Technology</Link>
                          </li>
                          <li>
                          <Link  to="#">People</Link>
                          </li>
                          <li>
                          <Link  to="#">Slow Motion</Link>
                          </li>
                          <li>
                          <Link to="#">Language</Link>
                          </li>
                          <li>
                          <Link  to="#">Business</Link>
                          </li>
                          <li>
                          <Link to="#">Nature</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                </div>*/}
                <div class="clearfix"></div>
            </form>
            <div class="clearfix"></div>
        </div>
        {/*<ul class="nav navigation  nav-dropdown  dropdown-menu-center nav_banner">
        <li class="dropdown justify-content-center nav-item">
              <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" style={{color:'black',fontWeight:'1000'}}><b>Click</b></a>
              <ul class="dropdown-menu rounded mt-3">


                  <Link to="/"><li ><a href="#" class=" nav-link">>&nbsp;Test</a></li></Link>

              </ul>
          </li>
           </ul>*/}
        <Services tag="category_content" heading={this.props.match.params.cat_name} />
     </div>

    );

  }
}
export default CategoryContent;
// <div class="top_div">
// <Banner />
// <Services tag="category_content" heading={this.props.match.params.cat_name} /></div>
