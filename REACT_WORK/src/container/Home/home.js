import React from 'react';
import ReactDOM from 'react-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class App extends React.Component {
  render()
  {
    const responsive={
      320:{items:2},
      480:{items:2},
      600:{items:3},
      960:{items:4},
      1200:{items:4}
      }
      const responsive_vertical={
        320:{items:2},
        480:{items:3},
        600:{items:5},
        960:{items:6},
        1200:{items:6}
        }
  return (
      <div>
      <section class="home_banner">
      <OwlCarousel
         className="owl-theme"
         items={1}
         nav={false}
         loop={false}
         mouseDrag={false}
         dots={false}
         animateOut={'fadeOut'}
         animateIn={'fadeIn'}
         autoplay={false}
         margin={30}
         navigation={false}
         navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
         >
              <div class="item">
                  <img src="images/home_banner1.jpg" alt="" />
                  <div class="caption">
                      <div class="b_title">
                          <a class="play_icon" data-toggle="modal" data-target="#homevideo_pop"><img src="images/icon_play.png" alt="" /></a>
                          <h2>Jabariya jodi</h2>
                          <p>1 hr 42 mins <span></span> Action, Adventure, Animation</p>
                      </div>
                  </div>
              </div>
          </OwlCarousel>
          <div class="clearfix"></div>
      </section>

      <section class="cat_gal">
          <article class="container">
              <div class="horz_cat cat_slides">
                  <div class="slider_box">
                      <h2>Trending Now</h2>
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
                         margin={30}
                         navigation={true}
                         navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
                         responsive={responsive}

                         >
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/trending1.jpg" alt="" />
                                  </div>
                                  <div class="caption">
                                      <p>Journey</p>
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/trending2.jpg" alt="" />
                                  </div>
                                  <div class="caption">
                                      <p>Holiday</p>
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/trending3.jpg" alt="" />
                                  </div>
                                  <div class="caption">
                                      <p>Light</p>
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/trending4.jpg" alt="" />
                                  </div>
                                  <div class="caption">
                                      <p>Hater</p>
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/trending1.jpg" alt="" />
                                  </div>
                                  <div class="caption">
                                      <p>Journey</p>
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                      </OwlCarousel>
                      <div class="clearfix"></div>
                  </div>

                  <div class="slider_box">
                      <h2>Recommended</h2>
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
                         margin={30}
                         navigation={true}
                         navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
                         responsive={responsive}

                         >
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/recommend1.jpg" alt="" />
                                  </div>
                                  <div class="caption">
                                      <p>Monday</p>
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/recommend2.jpg" alt="" />
                                  </div>
                                  <div class="caption">
                                      <p>Youth of today</p>
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/recommend3.jpg" alt="" />
                                  </div>
                                  <div class="caption">
                                      <p>Marigold</p>
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/recommend4.jpg" alt="" />
                                  </div>
                                  <div class="caption">
                                      <p>Chaos</p>
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/recommend1.jpg" alt="" />
                                  </div>
                                  <div class="caption">
                                      <p>Monday</p>
                                  </div>
                              </a>
                          </div>
                      </OwlCarousel>
                      <div class="clearfix"></div>
                  </div>

                  <div class="clearfix"></div>
              </div>
          </article>
          <div class="clearfix"></div>
      </section>



      <section class="cat_gal">
          <div class="container">
              <article class="cat_slides">
                  <div class="slider_box">
                      <h2>Hollywood Movies</h2>
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
                         margin={30}
                         navigation={true}
                         navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
                         responsive={responsive_vertical}
                         >
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywood1.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywood2.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywood3.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywood4.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywood5.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywood6.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywood1.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                      </OwlCarousel>
                      <div class="clearfix"></div>
                  </div>

                  <div class="slider_box">
                      <h2>Hollywood Hindi Movies</h2>
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
                         margin={30}
                         navigation={true}
                         navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
                         responsive={responsive_vertical}

                         >
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywoodh1.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywoodh2.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywoodh3.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywoodh4.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywoodh5.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywoodh6.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywoodh1.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                      </OwlCarousel>
                      <div class="clearfix"></div>
                  </div>

                  {/*<div class="slider_box">
                      <h2>Hollywood Marathi Movies</h2>
                      <aside id="vartcat_slider2" class="owl-carousel">
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywoodm1.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywoodm2.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywoodm3.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywoodm4.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywoodm5.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywoodm6.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                          <div class="item">
                              <a href="javascript:;" class="box">
                                  <div class="img">
                                      <img src="images/hollywoodm1.jpg" alt="" />
                                  </div>
                                  <div class="desc">
                                      <span class="title">playfix</span>
                                      <span class="subtitle">Family, StarPlus</span>
                                      <div class="det">Sweet, cute and completely charming, Kulfi is a singing prodigy, who is blessed with a nightingale’s ...</div>
                                  </div>
                              </a>
                          </div>
                      </aside>
                      <div class="clearfix"></div>
                  </div>*/}
                  <div class="clearfix"></div>
              </article>
              <div class="clearfix"></div>
          </div>
          <div class="clearfix"></div>
      </section>
      </div>
  );
}
}
export default App;
