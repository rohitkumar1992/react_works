import React,{Component} from 'react';
import {TRANSCODE_HOME,DUBB_HOME,SUBTITLE_HOME,TAGGING_HOME} from '../../../url';
import axios from 'axios';
class Card extends Component {
  state={
    total:0,completed:0,queued:0,inprogress:0
  }
  componentDidMount()
  {
    var location=this.props.location.pathname.split('/');
    var url=location[4];
    var api='';
    if(url=="dubbing")
    {
      api=DUBB_HOME;
    }
    if(url=="transcoding")
    {
      api=TRANSCODE_HOME;
    }
    if(url=="subtitling")
    {
      api=SUBTITLE_HOME;
    }
    if(url=="tagging")
    {
      api=TAGGING_HOME;
    }
    axios.post(api, {
      user_id:localStorage.getItem('userid')
    })
   .then(response=>{

    if(response.data.success)
    {
   var result=response.data;
   this.setState({
                total:result.total_record,
                completed:result.total_completed,
                queued:result.total_queued_record,
                inprogress:result.total_in_progress
                });
              }
   })
   .catch(function (error) {
    console.log(error);
   });
  }
  render()
  {
return (<div class="row"><div class="col-xl-3 col-md-3 mb-4" style={{marginTop:'30px'}}>
                      <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                          <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-sm font-weight-bold text-primary text-uppercase mb-1">Total Request</div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">{this.state.total}</div>
                            </div>
                            <div class="col-auto">
                              <i class="fa fa-calendar fa-2x text-gray-300"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
<div class="col-xl-3 col-md-3 mb-4" style={{marginTop:'30px'}}>
                      <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                          <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-sm font-weight-bold text-primary text-uppercase mb-1">Total Completed Request</div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">{this.state.completed}</div>
                            </div>
                            <div class="col-auto">
                              <i class="fa fa-calendar fa-2x text-gray-300"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
          <div class="col-xl-3 col-md-3 mb-4" style={{marginTop:'30px'}}>
                                <div class="card border-left-primary shadow h-100 py-2">
                                  <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                      <div class="col mr-2">
                                          <div class="text-sm font-weight-bold text-primary text-uppercase mb-1">Total Inprogress Request</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{this.state.inprogress}</div>
                                      </div>
                                      <div class="col-auto">
                                        <i class="fa fa-calendar fa-2x text-gray-300"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
          <div class="col-xl-3 col-md-3 mb-4" style={{marginTop:'30px'}}>
                                <div class="card border-left-primary shadow h-100 py-2">
                                  <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                      <div class="col mr-2">
                                          <div class="text-sm font-weight-bold text-primary text-uppercase mb-1">Total Queued Request</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{this.state.queued}</div>
                                      </div>
                                      <div class="col-auto">
                                        <i class="fa fa-calendar fa-2x text-gray-300"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                    </div>);
                }
}
export default Card;
// import React, { Component } from 'react';
// import './homedashboard.css';
// import './homedashboard.css';
// const Data =(props)=>{
//   return( <div>
//     <div class="home_dashboard mt-4">
//         <div class="row">
//             <div class="col-md-4 col-xl-4">
//               <div class="card">
//                                 <div class="card-body text-center">
//                                     <div class="row  justify-content-center align-items-center d-center"><img class="d-block img-fluid" src="/img/all-img/payments.png" alt="card image"/></div>
//                                     <h4 class="card-title">Account Kit</h4>
//                                     <p class="card-text text-sm">Seamless account creation. no more Passwords.</p>
//                                     <div class="border-bottom mb-16 mt-16"></div>
//                                     <a href="#" class="card-link float-left text-sm">Read Docs</a>
//                                     <a href="#" class="btn btn-primary btn-default-card btn-sm float-right">Setup</a>
//                                 </div>
//                             </div>
//             </div>
//
//             <div class="col-md-4 col-xl-4">
//                <div class="card">
//                         <div class="card-body text-center">
//                             <div class="row  justify-content-center align-items-center d-center"><img class="d-block img-fluid" src="/img/all-img/accountkit.png" alt="card image"/></div>
//                             <h4 class="card-title">Account Kit</h4>
//                             <p class="card-text text-sm">Seamless account creation. no more Passwords.</p>
//                             <div class="border-bottom mb-16 mt-16"></div>
//                             <a href="#" class="card-link float-left text-sm">Read Docs</a>
//                             <a href="#" class="btn btn-primary btn-default-card btn-sm float-right">Setup</a>
//                         </div>
//                     </div>
//             </div>
//
//              <div class="col-md-4 col-xl-4">
//                <div class="card">
//                         <div class="card-body text-center">
//                             <div class="row  justify-content-center align-items-center d-center"><img class="d-block img-fluid" src="/img/all-img/payments.png" alt="card image"/></div>
//                             <h4 class="card-title">Account Kit</h4>
//                             <p class="card-text text-sm">Seamless account creation. no more Passwords.</p>
//                             <div class="border-bottom mb-16 mt-16"></div>
//                             <a href="#" class="card-link float-left text-sm">Read Docs</a>
//                             <a href="#" class="btn btn-primary btn-default-card btn-sm float-right">Setup</a>
//                         </div>
//                     </div>
//             </div>
//            <div class="col-md-4 col-xl-4">
//                <div class="card">
//                         <div class="card-body text-center">
//                             <div class="row  justify-content-center align-items-center d-center"><img class="d-block img-fluid" src="/img/all-img/payments.png" alt="card image"/></div>
//                             <h4 class="card-title">Account Kit</h4>
//                             <p class="card-text text-sm">Seamless account creation. no more Passwords.</p>
//                             <div class="border-bottom mb-16 mt-16"></div>
//                             <a href="#" class="card-link float-left text-sm">Read Docs</a>
//                             <a href="#" class="btn btn-primary btn-default-card btn-sm float-right">Setup</a>
//                         </div>
//                     </div>
//             </div>
//     	</div>
//     </div>
//     </div>);
// }
// export default Data;
