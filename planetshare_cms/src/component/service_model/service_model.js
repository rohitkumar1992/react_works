import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import {VIDEO_DESCRIPTION_EDIT} from '../../url.js';
// import './modal.css';
const customStylesLogin = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '50%',
    minWidth              :'30%',
    height                : 'auto',
    overflow              :  'hidden',
  }
};

class modal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      video_details:[]
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(video_id) {
    this.setState({modalIsOpen: true});
    this.getData(video_id);
  }
  getData=(video_id)=>
  {
  axios.post(VIDEO_DESCRIPTION_EDIT, {
      video_id:video_id,
      })
    .then(response=>{
      this.setState({video_details:response.data.data[0]})
    })
    .catch(function (error) {
      console.log(error);
  });
}
  closeModal() {
    this.setState({modalIsOpen: false,signUpModal:false,loginModal:true,phoneLogin:false});
  }
  render() {
    const {video_details}=this.state;
      return (
        <div>
        <a onClick={this.openModal.bind(this,this.props.dubb_id)} style={{cursor:'pointer',color:'#3687b0'}}>{this.props.dubb_id}</a>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStylesLogin}
            contentLabel="Example Modal"
          >
                    <div class="close-btn" onClick={this.closeModal}><i class="fa fa-close" >close</i> </div>

        <div class="container emp-profile">
                    <form method="post">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="profile-img">
                                    <img src="" alt=""/>
                                    <div class="file btn btn-lg btn-primary">
                                        Change Photo
                                        <input type="file" name="file"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="profile-head">
                                            <h5>
                                                {video_details.title}
                                            </h5>
                                            <h6>
                                                {video_details.description}
                                            </h6>
                                            <p class="proile-rating">{video_details.tag}</p>
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-md-8">
                                <div class="tab-content profile-tab" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Dubbing Id</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.title}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Email</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.title}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Original Language</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.cast}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Dubbed Language</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.producer}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Priority</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.director}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Requested By</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.genre}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Requested At</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.language}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Status</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.territory_right}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Payment</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.license_right}</p>
                                                    </div>
                                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
          </Modal>
        </div>
      );

  }
}
export default modal;
