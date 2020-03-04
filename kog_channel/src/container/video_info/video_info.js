import React from 'react'
import axios from 'axios';
import ReactJWPlayer from 'react-jw-player';
import {VIDEO_DATA} from '../../url'
import Loader from '../../component/loader/video_player_loader.js';
class VideoInfo extends React.Component{
  state={response_data:[],thumbnail:[]}
  componentDidMount()
  {
    this.setState({entry_id:this.props.match.params.video_id},function(){this.getData()});
  }
   getData=async ()=>{
    var formData=new FormData();
    formData.append('userid',0);
    formData.append('countrycode','IN');
    formData.append('partnerid','ott357');
    formData.append('entryid',this.state.entry_id);
    let response= await axios.post(VIDEO_DATA,formData);
      if(response.data.status!='101')
      {
          var result=response.data;
          setTimeout(()=>this.setState({response_data:result.Video[0],thumbnail:result.Video[0].thumbnailurl,isLoading:true}),1000)
      }
      else {
      this.props.history.push('/not_found');
      }
  }
  componentDidUpdate()
  {
    if(this.state.entry_id!=this.props.match.params.video_id)
    {
    this.setState({entry_id:this.props.match.params.video_id},function(){this.getData()});
    }
  }
  render()
  {
    const {response_data,thumbnail}=this.state
    if(this.state.isLoading)
    {
    return(<div class="inner_wrap">
        <section class="catdet_video">
            <div class="container">
                <article class="vd_area">

                    <ReactJWPlayer
                    playerId='jw-player'
                    image={`${thumbnail.h_thumburl}`}
                    playerScript='https://content.jwplatform.com/libraries/jvJ1Gu3c.js'
                    file={response_data.downloadurl}
                    aspectRatio="16:9"
                    className="col-md-12"
                    isAutoPlay={false}
                    controls={true}
                    repeat="true"
                    />

                    <div class="clearfix"></div>
                </article>
                <article class="view_info">
                    <div class="ttl_info">
                        <div class="row">
                            <div class="col-sm-8">
                                <h2>{response_data.name}</h2>
                                <ul class="time_list">
                                    <li>2018</li>
                                    <li>1hr 42mins</li>
                                    <li>{response_data.SubGenre}</li>
                                    <li><span>U/A</span></li>
                                </ul>
                            </div>
                            <div class="col-sm-4">
                                <ul class="icon_list">
                                    <li><a href="javascript:;"><img src="images/icon_view1.png" alt="" /></a></li>
                                    <li><a href="javascript:;"><img src="images/icon_view2.png" alt="" /></a></li>
                                    <li><a href="javascript:;"><img src="images/icon_view3.png" alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="desc">
                        <h4>Description</h4>
                        <p>{response_data.longdescription}</p>
                        <div class="clearfix"></div>
                    </div>
                    <div class="clearfix"></div>
                </article>
                <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
        </section>

        <section class="cat_gal">
            <div class="container">
                <article class="cat_slides">
                    <div class="slider_box">
                        <h2>We Recommend</h2>
                        <aside id="vartcat_slider" class="owl-carousel">
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
                        </aside>
                        <div class="clearfix"></div>
                    </div>
                    <div class="clearfix"></div>
                </article>
                <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
        </section>

        <div class="clearfix"></div>
    </div>)
  }
  else {
    return(<Loader/>)
  }
}
}
export default VideoInfo;
