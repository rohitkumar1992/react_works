import React, { Component } from 'react';
import Analytics from '../../analytics/analytics.js';
import {TRANSCODE_HOME,DUBB_HOME,SUBTITLE_HOME,TAGGING_HOME,VIDEOS} from '../../../url';
import VideoList from '../../../component/videolist/videolist';
import axios from 'axios';
import './landing_page.css';
import {Chart} from 'primereact/chart';
class LANDINGPAGE extends Component{
  state={list:[]}
componentDidMount()
{
  axios.post(VIDEOS,{
    page_limit:'5',
    request_coming_from:'web'
  })
.then(response=>{
  if(response.data.data!='')
  this.setState({list:response.data.data.data});
})
.catch(function (error) {
  console.log(error);
});
}
  render()
  {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#4bc0c0'
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#565656'
          }
      ]
  };
  const options = {
        title: {
            display: true,
            text: 'My Title',
            fontSize: 16
        },
        legend: {
            position: 'bottom'
        }
    };

       const data1 = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
          datasets: [
              {
                  label: 'Dubbing',
                  data: [15, 25, 20, 16, 26, 35, 40,25,15,32,68,52],
                  fill: false,
                  backgroundColor: '#42A5F5',
                  borderColor: '#42A5F5'
              },
              {
                  label: 'Transcoding',
                  data: [28, 48, 40, 19, 86, 27, 90,65,68,54,62,55],
                  fill: false,
                  backgroundColor: '#66BB6A',
                  borderColor: '#66BB6A'
              },
              {
                  label: 'Subtitling & Captioning',
                  data: [18, 48, 40, 29, 16, 27, 20,84,12,34,61,64],
                  fill: false,
                  backgroundColor: '#565656',
                  borderColor: '#565656'
              },
              {
                  label: 'Autotagging',
                  data: [28, 48, 40, 19, 86, 17,51,36,15,61,12,61],
                  fill: false,
                  backgroundColor: '#FFCE56',
                  borderColor: '#FFCE56'
              }
          ]
      };
      const videolist = (this.state.list.length>0 && this.state.list.map((result,index)=>{
      return <VideoList cast={result.cast} language={result.language} video_id={result.video_id} tag="buyer_video_list" img_url={`${result.thumbnail}`} host_url={result.host_url} title={result.title} description={result.description} video_tag={result.Premium=='0'?'Free':'Premium'} price={result.Premium=='0'?'0':result.Price}/>
    }));
  return(
    <div class="home_dashboard" style={{marginTop:'100px'}}>
      <div class="chart_page">
         <div class="container">
            {/* <Chart type="bar" data={data} options={options} />*/}
            <div class="chartbox">
              <h2>No. of Service Requested</h2>
              <div class="row">
                  <div class="col-md-12"><Chart type="line" data={data1} /></div>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="cardbox">
              <div class="row">
                <div class="col-md-6" >
                  <div class="card border-left-primary shadow">
                    <div class="card-body">
                      <p class="ttl">Top 5 Sellers</p>
                      <span class="no">Netelectra <em>50 Sold</em></span>
                      <ul>
                        <li>
                          <span class="nm">Caratch</span> <span class="value">45 Sold</span>
                        </li>
                        <li>
                          <span class="nm">Netelectra</span> <span class="value">40 Sold</span>
                        </li>
                        <li>
                          <span class="nm">Reelectra</span> <span class="value">38 Sold</span>
                        </li>
                        <li>
                          <span class="nm">Cardecu</span> <span class="value">24 Sold</span>
                        </li>
                      </ul>
                      {/*<div class="h5 mb-0 font-weight-bold text-gray-800">{this.state.total}</div>*/}
                    </div>
                  </div>
                </div>
                <div class="col-md-6" >
                  <div class="card border-left-primary shadow">
                    <div class="card-body">
                      <p class="ttl">Top 5 Vendors</p>
                      <span class="no">Steploop <em>60 Jobs</em></span>
                      <ul>
                        <li>
                          <span class="nm">Steploop</span> <span class="value">50 Jobs</span>
                        </li>
                        <li>
                          <span class="nm">Titanicpower</span> <span class="value">44 Jobs</span>
                        </li>
                        <li>
                          <span class="nm">Leaderhigh</span> <span class="value">35 Jobs</span>
                        </li>
                        <li>
                          <span class="nm">Surfacefashion</span> <span class="value">19 Jobs</span>
                        </li>
                      </ul>
                      {/*<div class="h5 mb-0 font-weight-bold text-gray-800">{this.state.total}</div>*/}
                    </div>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="video_list">
              <div class="videos_buyr">
                <h2>Top Selling Videos</h2>
                <div class="row">{videolist}</div>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="row"></div>
            {/*<Analytics api={DUBB_HOME} heading="Dubbing"/>
              <Analytics api={TRANSCODE_HOME} heading="Transcoding"/>
              <Analytics api={SUBTITLE_HOME} heading="Subtitling"/>
              <Analytics api={TAGGING_HOME} heading="Auto Tagging"/>*/}
          </div>
        </div>
      </div>
  );
}
}
export default LANDINGPAGE;

  //       <HighchartsReact
  // highcharts={Highcharts}
  // constructorType={'chart'}
  // options={this.state.options}
