import React, { Component } from 'react';
import './category_cards.css';
import {Link} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class CategoryCards extends Component
 {
  render() {
    const responsive={
      320:{items:2},
      480:{items:4},
      600:{items:4},
      960:{items:5},
      1200:{items:6}
      }
    return (
    <div class="home_categories">
      <div class="container">
        <h4 class="wow fadeInUp">Buy From Our Curated Playlists </h4>
        <OwlCarousel
           className="owl-theme"
           nav
           items={6}
           loop={true}
           mouseDrag={false}
           dots={false}
           margin={20}
           autoplay={false}
           responsive={responsive}
           >
           <div class="item">
              <div class="img">
                <Link to="/web/category/business"><img src="img/all-img/services/Business.jpg" alt="" /></Link>
              </div>
              <div class="img" >
                <Link to="/web/category/education"><img src="img/all-img/services/Education.jpg" alt="" /></Link>
              </div>
           </div>
           <div class="item">
              <div class="img" >
                  <Link to="/web/category/fashion"><img src="img/all-img/services/Fashion.jpg" alt="" /></Link>
              </div>
              <div class="img" >
                  <Link to="/web/category/food & drink"><img src="img/all-img/services/Food-&-Drink.jpg" alt="" /></Link>
              </div>
           </div>
           <div class="item">
              <div class="img" >
                  <Link to="/web/category/healthcare"><img src="img/all-img/services/Healthcare.jpg" alt="" /></Link>
              </div>
              <div class="img">
                  <Link to="/web/category/holidays"><img src="img/all-img/services/Holidays.jpg" alt="" /></Link>
              </div>
           </div>
           <div class="item">
              <div class="img">
                <Link to="/web/category/science">  <img src="img/all-img/services/Science.jpg" alt="" /></Link>
              </div>
              <div class="img">
                  <Link to="/web/category/sports"><img src="img/all-img/services/Sport.jpg" alt="" /></Link>
              </div>
           </div>
           <div class="item">
              <div class="img">
                  <Link to="/web/category/wildlife"><img src="img/all-img/services/Wildlife.jpg" alt="" /></Link>
              </div>
              <div class="img">
                  <Link to="/web/category/finance"><img src="img/all-img/services/Finance.jpg" alt="" /></Link>
              </div>
           </div>
           <div class="item">
              <div class="img">
                  <Link to="/web/category/beauty"><img src="img/all-img/services/Beauty.jpg" alt="" /></Link>
              </div>
              <div class="img">
                  <Link to="/web/category/animals"><img src="img/all-img/services/Animals.jpg" alt="" /></Link>
              </div>
           </div>
           <div class="item">
              <div class="img">
                <Link to="/web/category/business"><img src="img/all-img/services/Business.jpg" alt="" /></Link>
              </div>
              <div class="img" >
                <Link to="/web/category/education"><img src="img/all-img/services/Education.jpg" alt="" /></Link>
              </div>
           </div>
           <div class="item">
              <div class="img" >
                  <Link to="/web/category/fashion"><img src="img/all-img/services/Fashion.jpg" alt="" /></Link>
              </div>
              <div class="img" >
                  <Link to="/web/category/food & drink"><img src="img/all-img/services/Food-&-Drink.jpg" alt="" /></Link>
              </div>
           </div>
           <div class="item">
              <div class="img" >
                  <Link to="/web/category/healthcare"><img src="img/all-img/services/Healthcare.jpg" alt="" /></Link>
              </div>
              <div class="img">
                  <Link to="/web/category/holidays"><img src="img/all-img/services/Holidays.jpg" alt="" /></Link>
              </div>
           </div>
         </OwlCarousel>
       </div>
      {/*<div class="box top_div stock_video_cat" style={{marginTop:'30px'}}>
        <div class="container">
          <h4 class="wow fadeInUp">Popular Stock Video Categories </h4>
         	<div class="row card_row m-5 wow bounceInLeft " >
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 cursor_on_hover" onClick={() => this.props.clicked('/web/category/people')}>
    					  <div class="box-part text-center img_2">
                  <img src="img/front_img/people.png" />
    						   <div class="title" >
    							 <h4 id="h_4" >People</h4>
    					   </div>
    					</div>
    				</div>

    				 <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-xs-p-2 cursor_on_hover"  onClick={() => this.props.clicked('/web/category/technology')}>
    					<div class="box-part text-center img_2">
    					     <img src="img/front_img/technology.png" />
    						<div class="title">
    							<h4 id="h_4">Technology</h4>
    						</div>
    					 </div>
    				</div>

    				 <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 cursor_on_hover"  onClick={() => this.props.clicked('/web/category/slowmotion')}>
    					<div class="box-part text-center img_2">
                      <img src="img/front_img/slowmotion.png" />
    						<div class="title">
    							<h4 id="h_4">Slow Motion</h4>
    						</div>
    					 </div>
    				</div>

    				<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 mt-3 cursor_on_hover"  onClick={() => this.props.clicked('/web/category/language')}>
    					<div class="box-part text-center img_2">
              <img src="img/all-img/language_cat.jpg " />
    						<div class="title">
    							<h4 id="h_4">Language</h4>
    						</div>
    					 </div>
    				</div>

    				 <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 mt-3 cursor_on_hover"  onClick={() => this.props.clicked('/web/category/business')}>
    					<div class="box-part text-center img_2">
       	    <img src="img/all-img/buisness.jpg " />
    						<div class="title">
    							<h4 id="h_4">Business</h4>
    						</div>
    					 </div>
    				</div>

    			<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 mt-3 cursor_on_hover"  onClick={() => this.props.clicked('/web/category/nature')} >
    			<div class="box-part text-center img_2">
          <img src="img/front_img/nature.png" />
    		 	<div class="title">
    			<h4 id="h_4">Nature</h4>
    		  </div>
    			</div>
    			</div>
    		  </div>
        </div>
      </div>*/}

      <div class="clearfix"></div>
    </div>
    );
  }
}
export default CategoryCards;
