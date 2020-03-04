import React from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class Movies extends React.Component
{
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
    return(
      <div class="inner_wrap">
          <section class="hm cat_gal">
              <div class="container">
                  <article class="cat_slides">
                      <div class="slider_box">
                          <h2>Hollywood Movies</h2>
                          <OwlCarousel
                             className="owl-theme"
                             items={6}
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
                                  <a href="detail.html" class="box">
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
                             items={6}
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

                      <div class="slider_box">
                          <h2>Hollywood Marathi Movies</h2>
                          <OwlCarousel
                             className="owl-theme"
                             items={6}
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
                          </OwlCarousel>
                          <div class="clearfix"></div>
                      </div>
                      <div class="clearfix"></div>
                  </article>
                  <div class="clearfix"></div>
              </div>
              <div class="clearfix"></div>
          </section>


          <div class="clearfix"></div>
      </div>
    );
  }
}
export default Movies;
