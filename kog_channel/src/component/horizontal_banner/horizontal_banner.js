import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link} from 'react-router-dom'
const responsive={
  320:{items:2},
  480:{items:2},
  600:{items:3},
  960:{items:4},
  1200:{items:4}
  }
  function convertTime(sec1) {
      var sec=sec1/1000
      var hours = Math.floor(sec/3600);
      (hours >= 1) ? sec = sec - (hours*3600) : hours = '00';
      var min = Math.floor(sec/60);
      (min >= 1) ? sec = sec - (min*60) : min = '00';
      (sec < 1) ? sec='00' : void 0;

      (min.toString().length == 1) ? min = '0'+min : void 0;
      (sec.toString().length == 1) ? sec = '0'+sec : void 0;

      return hours+':'+min+':'+sec;
  }
const Horizontal_Banner=(props)=>{
  return( <section class="cat_gal">
          <article class="container">
              <div class={`horz_cat cat_slides`}>
                  <div class={`slider_box ${props.result.cat_type!="cat"?'sub_cat':''}`}>
                      <h2>{props.result.title_tag_name}</h2>
                      <OwlCarousel
                         className="owl-theme"
                         items={4}
                         nav={true}
                         loop={false}
                         mouseDrag={false}
                         dots={false}
                         animateOut={'fadeOut'}
                         animateIn={'fadeIn'}
                         autoplay={false}
                         margin={0}
                         navigation={true}
                         navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
                         responsive={responsive}

                         >
                        {props.result.search_tag.map((res,key)=>{return(<div class="item">
                                <Link to={props.result.cat_type=="cat"?`/video/${res.name}/${res.entryid}`:`/cat/${props.route_name}/${res.name}/${res.id}`} class={` ${props.result.cat_type=="cat"?'box':''}`}>
                                  <div class="img">
                                      <img  class="load_place_horiz" src={props.result.cat_type=="cat"?res.thumburl.h_thumburl:res.t_custom_url} alt="" />
                                      <p class="duration">{convertTime(res.duration)}</p>
                                  </div>
                                  {props.result.cat_type!="cat" && <div class="caption">
                                      <p>{res.name}</p>
                                  </div>}
                                  <div  class={` ${props.result.cat_type=="cat"?'desc':''}`}>
                                      {props.result.cat_type=="cat" && <span class="title">{res.name}</span>}
                                      {props.result.cat_type=="cat" && <span class="title">{convertTime(res.duration)}</span>}
                                      {props.result.cat_type=="cat" && <span class="subtitle">{res.sub_count}</span>}
                                      {props.result.cat_type=="cat" && <div class="det">{res.description}</div>}
                                  </div>
                              </Link>
                          </div>)
                        })
                        }
                      </OwlCarousel>
                      <div class="clearfix"></div>
                  </div>



                  <div class="clearfix"></div>
              </div>
          </article>
          <div class="clearfix"></div>
      </section>)
}
export default Horizontal_Banner
