import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import InfiniteScroll from 'react-infinite-scroller';
import {Link} from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis'
import Duration from '../duration'
  const responsive_vertical={
    320:{items:2},
    480:{items:3},
    600:{items:5},
    960:{items:6},
    1200:{items:6}
    }
const Horizontal_Banner=(props)=>{
  return(<section class="cat_gal">
          <article class="container">
              <div class=" cat_slides">
                  <div class="slider_box">
                  <h2>
                    {props.uniqId!="season_list" && props.result.title_tag_name}
                    {props.uniqId=="season_list" && props.result.Parent_name}
                    {(props.uniqId!="season_list" && props.result.categoryid!=0 && (props.result.cat_type=="sh" || props.result.cat_type=="ser" || props.result.cat_type=="sea" )) && <Link to={`/${(props.route_name.replace(/\s/g,'')).toLowerCase()}/collection/season/${(props.result.title_tag_name.replace(/\s/g,'_')).toLowerCase()}/${props.result.categoryid}`}>More</Link>}
                    {(props.uniqId!="season_list" && props.result.categoryid!=0 && (props.result.cat_type=="cat" )) && <Link to={`/${(props.route_name.replace(/\s/g,'')).toLowerCase()}/collectionv/${(props.result.title_tag_name.replace(/\s/g,'_')).toLowerCase()}/${props.result.categoryid}`}>More</Link>}

                    {(props.uniqId=="season_list" && props.result.Parent_id!=0 ) && <Link to={`/${(props.route_name.replace(/\s/g,'')).toLowerCase()}/collectionv/${(props.result.Parent_name.replace(/\s/g,'_')).toLowerCase()}/${props.result.Parent_id}`}>More</Link>}
                  </h2>
                      <OwlCarousel
                         className="owl-theme"
                         items={4}
                         slideBy={4}
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
                         responsive={responsive_vertical}

                         >
                         {props.result.search_tag.map((res,key)=>{return(<div class="item">
                                 {props.result.cat_type=="cat" && <Link to={`/video/${(res.name.replace(/\s/g,'')).toLowerCase()}/${res.entryid}`} class={`box`}>
                                   <div class="img">
                                       <img  class="load_place_vert" src={res.thumburl.v_thumburl} alt=""/>
                                       <p class="duration"><Duration sec1={res.duration}/></p>
                                   </div>
                                   <div  class={`desc`}>
                                   <span class="title">{res.name}</span>
                                   <div class="det"><LinesEllipsis
                                    text={res.description}
                                    maxLine='2'
                                    ellipsis='...'
                                    trimRight
                                    basedOn='words'
                                  /></div>
                                   </div>
                               </Link>}
                                 {((props.result.cat_type=="sh" || props.result.cat_type=="ser" || props.result.cat_type=="sea") && props.uniqId!="season_list") && <Link to={(props.result.cat_type=="sh" && res.sub_count==0)?`/video/${(res.name.replace(/\s/g,'_')).toLowerCase()}/${res.id}`:res.sub_count==null?`/cat/${props.route_name}/${(res.name.replace(/\s/g,'_')).toLowerCase()}/${res.id}`:`/season/${(res.name.replace(/\s/g,'')).toLowerCase()}/${res.id}`}>
                                 <div class="img">
                                     <img  class="load_place_vert" src={res.t_custom_url} alt=""/>
                                 </div>
                                 <div class="caption">
                                     <p>{res.name}</p>
                                 </div>

                             </Link>}




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
export default Horizontal_Banner;



                        // {props.result.search_tag.map((res,key)=>{return(<div class="item">
                        //       <Link to={props.result.cat_type=="cat"?`/video/${(res.name.replace(/\s/g,'')).toLowerCase()}/${res.entryid}`:`/cat/${props.route_name}/${res.name}/${res.id}`} class={` ${props.result.cat_type=="cat"?'box':''}`}>
                        //           <div class="img">
                        //               <img class="load_place_vert" src={props.result.cat_type=="cat"?res.thumburl.v_thumburl:res.t_custom_url}  />
                        //               {props.result.cat_type=="cat" && <p class="duration"><Duration sec1={res.duration}/></p>}
                        //           </div>
                        //           {props.result.cat_type!="cat" && <div class="caption">
                        //               <p>{res.name}</p>
                        //           </div>}
                        //           <div  class={` ${props.result.cat_type=="cat"?'desc':''}`}>
                        //              {props.result.cat_type=="cat" && <span class="title">{res.name}</span>}
                        //               {props.result.cat_type=="cat" && <span class="subtitle">{res.sub_count}</span>}
                        //               {props.result.cat_type=="cat" && <div class="det">{res.description}</div>}
                        //           </div>
                        //       </Link>
