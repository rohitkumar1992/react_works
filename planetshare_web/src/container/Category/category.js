import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Link,withRouter} from "react-router-dom";
import {VIDEO_SEARCH} from '../../url.js';
import $ from 'jquery';
import './category.css'
class Category extends Component {
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
      $(".filter_btn").click(function() {
          $(this).toggleClass("filter_on");
          $(".category_page").toggleClass("fullwidth");
          $(".side_filter").toggleClass("open_filter");
      });
      $(function(){
          $(".cat_i_v_list .col .box .q_t span.ttle").text(function(index, currentText) {
              return currentText.substr(0, 20) + '...';
          });
      });
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();

          if (scroll >= 100) {
              $(".filter_area").addClass("fixed_filter");
              $(".side_filter").addClass("fixed_side");
          } else {
              $(".filter_area").removeClass("fixed_filter");
              $(".side_filter").addClass("fixed_side");
          }
      });
}
  render() {
    return (
      <section class="category_page">
          <div class="filter_area">
              <div class="filter_btn">
                  <h2><i class="fa fa-exchange" aria-hidden="true"></i> Filters</h2>
                  <div class="btntoggle"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
              </div>
              <div class="searchbox">
                  <form onSubmit={this.searchData}>
                      <div class="inputbox">
                          <input type="text" placeholder="Search Videos" name="search_keyword"/>
                          <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                      </div>
                      <div class="clearfix"></div>
                  </form>
                  <div class="clearfix"></div>
              </div>
              <div class="clearfix"></div>
          </div>
          <div class="filter_content">
            <div  class="side_filter">
                <form action="javascript:;" id="filter_form" class="filter_form">
                    <h3>
                        <span class="txt">Planetshare Select</span>
                        <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
                    </h3>
                    <p>Only show our selection of premium quality clips</p>

                    <div id="accordion">
                        <div class="card">
                            <h3 class="card-header">
                                <a class="card-link" data-toggle="collapse" href="#sortby">
                                    Sort By
                                    <i class="fa fa-angle-up" aria-hidden="true"></i>
                                </a>
                            </h3>
                            <div id="sortby" class="collapse show">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col col-sm-6">
                                            <button type="button" class="btn btn-success">Populer</button>
                                        </div>
                                        <div class="col col-sm-6">
                                            <button type="button" class="btn btn-success">Fresh Content</button>
                                        </div>
                                        <div class="col col-sm-6">
                                            <button type="button" class="btn btn-success">Best Match</button>
                                        </div>
                                        <div class="col col-sm-6">
                                            <button type="button" class="btn btn-success">Random</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="card">
                            <h3 class="card-header">
                                <a class="card-link" data-toggle="collapse" href="#maxresolution">
                                    Maximum Resolution
                                    <i class="fa fa-angle-up" aria-hidden="true"></i>
                                </a>
                            </h3>
                            <div id="maxresolution" class="collapse show">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <button type="button" class="btn btn-success">4K</button>
                                        </div>
                                        <div class="col col-sm-4">
                                            <button type="button" class="btn btn-success">HD</button>
                                        </div>
                                        <div class="col col-sm-4">
                                            <button type="button" class="btn btn-success">SD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="card">
                            <h3 class="card-header">
                                <a class="card-link" data-toggle="collapse" href="#fps">
                                    FPS
                                    <i class="fa fa-angle-up" aria-hidden="true"></i>
                                </a>
                            </h3>
                            <div id="fps" class="collapse show">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <button type="button" class="btn btn-success">23.98</button>
                                        </div>
                                        <div class="col col-sm-4">
                                            <button type="button" class="btn btn-success">24</button>
                                        </div>
                                        <div class="col col-sm-4">
                                            <button type="button" class="btn btn-success">25</button>
                                        </div>
                                        <div class="col col-sm-4">
                                            <button type="button" class="btn btn-success">23.98</button>
                                        </div>
                                        <div class="col col-sm-4">
                                            <button type="button" class="btn btn-success">24</button>
                                        </div>
                                        <div class="col col-sm-4">
                                            <button type="button" class="btn btn-success">25</button>
                                        </div>
                                        <div class="col col-sm-4">
                                            <button type="button" class="btn btn-success">23.98</button>
                                        </div>
                                        <div class="col col-sm-4">
                                            <button type="button" class="btn btn-success">24</button>
                                        </div>
                                        <div class="col col-sm-4">
                                            <button type="button" class="btn btn-success">Other</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="card">
                            <h3 class="card-header">
                                <a class="card-link" data-toggle="collapse" href="#duration">
                                    Duration
                                    <i class="fa fa-angle-up" aria-hidden="true"></i>
                                </a>
                            </h3>
                            <div id="duration" class="collapse show">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col col-sm-12">
                                            <p class="dur">
                                                <input type="text" />
                                                <span>to</span>
                                                <input type="text" />
                                                <span>seconds</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="card">
                            <h3 class="card-header">
                                <a class="card-link" data-toggle="collapse" href="#people">
                                    People
                                    <i class="fa fa-angle-up" aria-hidden="true"></i>
                                </a>
                            </h3>
                            <div id="people" class="collapse show">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col col-sm-6">
                                            <button type="button" class="btn btn-success">With people</button>
                                        </div>
                                        <div class="col col-sm-6">
                                            <button type="button" class="btn btn-success">Without people</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="card">
                            <h3 class="card-header">
                                <a class="card-link" data-toggle="collapse" href="#category_filter">
                                    Category
                                    <i class="fa fa-angle-up" aria-hidden="true"></i>
                                </a>
                            </h3>
                            <div id="category_filter" class="collapse show">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col col-sm-12">
                                            <div class="selectbox">
                                                <label>Select a category</label>
                                                <select>
                                                    <option>Select Category</option>
                                                    <option>Animal/Wildlife</option>
                                                    <option>Animal/Wildlife</option>
                                                    <option>Animal/Wildlife</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="card">
                            <h3 class="card-header">
                                <a class="card-link" data-toggle="collapse" href="#contributor">
                                    Contributor
                                    <i class="fa fa-angle-up" aria-hidden="true"></i>
                                </a>
                            </h3>
                            <div id="contributor" class="collapse show">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col col-sm-12">
                                            <div class="inputbox">
                                                <input type="text" />
                                                <label>Name</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="card">
                            <h3 class="card-header">
                                <a class="card-link" data-toggle="collapse" href="#usage">
                                    Usage
                                    <i class="fa fa-angle-up" aria-hidden="true"></i>
                                </a>
                            </h3>
                            <div id="usage" class="collapse show">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col col-sm-6">
                                            <button type="button" class="btn btn-success">Only editorial</button>
                                        </div>
                                        <div class="col col-sm-6">
                                            <button type="button" class="btn btn-success">Non editorial</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="clearfix"></div>
                </form>
                <div class="clearfix"></div>
            </div>
            <div class="cat_content_area">
                <div class="top_info">
                    <h2>Technology royalty-free stock images</h2>
                    <p>
                        17,32,240 technology royalty-free stock videos <a href="javascript:;">See technology stock images</a>
                    </p>
                    <div class="pagination_page">
                        <ul>
                            <li class="prv">
                                <a href="javascript"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <input type="text" value="1" alt="" />
                            </li>
                            <li class="nxt">
                                <a href="javascript"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                        <span>of 1700</span>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="cat_btn_list">
                    <a href="javascript:;" class="btn btn_catlist">business</a>
                    <a href="javascript:;" class="btn btn_catlist">fashion</a>
                    <a href="javascript:;" class="btn btn_catlist">healthcare</a>
                    <a href="javascript:;" class="btn btn_catlist">wildlife</a>
                    <a href="javascript:;" class="btn btn_catlist">beauty</a>
                    <a href="javascript:;" class="btn btn_catlist">education</a>
                    <a href="javascript:;" class="btn btn_catlist">food & drink</a>
                    <a href="javascript:;" class="btn btn_catlist">holidays</a>
                    <a href="javascript:;" class="btn btn_catlist">sports</a>
                    <a href="javascript:;" class="btn btn_catlist">finance</a>
                    <a href="javascript:;" class="btn btn_catlist">animals</a>
                    <div class="clearfix"></div>
                </div>

                <div class="cat_i_v_list">
                    <div class="row">
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery2.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery3.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery2.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery3.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery2.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery3.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery2.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery3.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery2.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery3.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery2.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery3.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery2.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery3.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery2.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery3.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery2.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery3.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery2.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery3.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery2.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery3.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery2.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery3.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery2.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery3.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery2.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery3.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-sm-4">
                            <div class="box">
                                <img src="img/gallery1.jpg" alt="" />
                                <div class="ov"></div>
                                <div class="q_t">
                                    <span class="ql">4K</span>
                                    <span class="tm">00:11</span>
                                    <span class="ttle">In recover recover technology recover</span>
                                </div>
                                <div class="sv_crt">
                                    <button type="button" class="crt">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="sv">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>

                <div class="top_info b_i">
                    <div class="buttons">
                        <button type="button" class="btn btn-success">Next</button>
                    </div>
                    <div class="pagination_page">
                        <ul>
                            <li class="prv">
                                <a href="javascript"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <input type="text" value="1" alt="" />
                            </li>
                            <li class="nxt">
                                <a href="javascript"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                        <span>of 1700</span>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="clearfix"></div>
      </section>
    );
  }
}
export default withRouter(Category);
