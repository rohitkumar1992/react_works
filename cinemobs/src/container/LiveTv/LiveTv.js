import React from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import Loader from '../../component/loader/loader';
import Horizontal_Banner from '../../component/horizontal_banner/horizontal_banner';
import Vertical_Banner from '../../component/vertical_banner/vertical_banner';
import {MOVIES_DATA,COUNTRYCODE,PARTNER_ID,USERID,LIVEFEED} from '../../url'
import ReactJWPlayer from 'react-jw-player';
import Authenticator from '../Authentication/Authentication'
class LiveTv extends React.Component
{
  state={liveData:[],isLoading:false,cat_id:'',hasMore:true}
  componentDidMount()
  {
    this.setState({cat_id:this.props.match.params.id},function(){
      this.getData();
    })
  }
   getData=async ()=>{
     if(this.props.match.params.menu_name=='home')
     {
       this.props.history.push('/')
     }
    var formData=new FormData();
    formData.append('userid',localStorage.getItem('userid'));
    formData.append('countrycode',COUNTRYCODE);
    formData.append('partnerid',PARTNER_ID);
    formData.append('limit',8);
    formData.append('page',0);
    formData.append('categoryid',this.state.cat_id);
    let response= await axios.post(LIVEFEED,formData,{headers:{'token':localStorage.getItem('token')}});
      if(response.status=='200')
      {
          var result=response.data;
          this.setState({liveData:result.Livefeed[0].live_tag})
          setTimeout(()=>this.setState({isLoading:true}),1000)
      }
  }
  componentDidUpdate()
  {
    if(this.state.cat_id!=this.props.match.params.id)
    {
      this.setState({cat_id:this.props.match.params.id,isLoading:false},function(){
          this.getData();
      })
    }
  }
  render()
  {
    const {liveData}=this.state
    const route_name=this.props.location.pathname.split('/')[1]
          if(this.state.isLoading)
          {
    return(
      <div class="inner_wrap top_div">
          {liveData.length>0?
            <section class="catdet_video">
              <div class="container">
                <article class="vd_area liveTV">
                  <ReactJWPlayer
                      style={{backgroundColor:'grey'}}
                      ref={(ref) => { this.player = ref }}
                      playerId='jw-player'
                      image={`${liveData[0].thumbnail}`}
                      playerScript='https://content.jwplatform.com/libraries/jvJ1Gu3c.js'
                      file={liveData[0].downloadurl}
                      aspectRatio="16:9"
                      className=""
                      isAutoPlay={false}
                      controls={true}
                      repeat="true"
                        customProps={{
                          controls: true,
                          repeat: true,
                          stretching: 'fill',
                          preload: 'auto',
                          volume: 100,
                          width: '100%',
                          height: '100%',
                      }}
                    />
                    <h3 class="ttl">{liveData[0].name}</h3>
                    <p class="desc">{liveData[0].longdescription}</p>
                  </article>
                </div>
              </section>:(<center>No Result Found</center>)}
          <div class="clearfix"></div>
      </div>
    );
  }
  else {
    return(<Loader/>)
  }
  }
}
export default Authenticator(LiveTv);
