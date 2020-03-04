import React, { Component } from 'react';
import axios from 'axios';
import
{VENDOR_SINGLE_JOB_DETAILS,ADD_VENDOR_SERVICE,VENDOR_DELETE_SERVICE,VENDOR_SERVICE_EDIT,VENDOR_SERVICE_UPDATE}
from '../../../../url.js';
import './vendor_service_details.css';
import TranscodeForm from '../service_form/transcodeform.js';
import DubbingForm from '../service_form/dubbing_form.js';
import $ from 'jquery';
import DubbingLangList from '../service_form/language_list';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from "react-js-pagination";
import Select from 'react-select';
const preset = [
  { value: '720p', label: '720p' },
  { value: '1080p', label: '1080p' },
  { value: '480p 16:9', label: '480p 16:9' },
  { value: '480p 4:3', label: '480p 4:3' },
  { value: '360p 16:9', label: '360p 16:9' },
  { value: '360p 4:3', label: '360p 4:3' },
  { value: '240p', label: '240p' },
  { value: '144p', label: '144p' },
  { value: 'Iphone4', label: 'Iphone4' },
  { value: 'Iphone4s', label: 'Iphone4s' },
  { value: 'Iphone5', label: 'Iphone5' },
  { value: 'Iphone5s', label: 'Iphone5s' },
  { value: 'Iphone6', label: 'Iphone6' },
  { value: 'Iphone6s', label: 'Iphone6s' },
  { value: 'Kindle Fire HD', label: 'Kindle Fire HD' },
  { value: 'HLS 2M', label: 'HLS 2M' },
  { value: 'HLS 1.5M', label: 'HLS 1.5M' },
  { value: 'HLS 1M', label: 'HLS 1M' },
  { value: 'HLS 600K', label: 'HLS 600' },
  { value: 'HLS 400K', label: 'HLS 400K' },
  { value: 'HLS Video-400K', label: 'HLS Video-400K' },
  { value: 'HLS Video-160K', label: 'HLS Video-160K' },
];
class ServiceDetails extends Component {
  state={
    loader:false,
    serviceoption:'',
    service_name:'',
    addMoreOption:'',
    selectedAspectRatio:[],
    rates:'',
    service_attr:'',
    action_tag:'',editId:'',
    activePage:1,
    itemsCountPerPage:1,
    totalItemsCount:1,
    pageRangeDisplayed:3,
    pageNumber:'1',
  }

      componentDidMount()
      {
this.setState({service_name:this.props.match.params.jobType.charAt(0).toUpperCase()+this.props.match.params.jobType.slice(1)})
        this.getData('1');
      }
      getData = (pageNumber)=>{
axios.post(`${VENDOR_SINGLE_JOB_DETAILS}?page=${pageNumber}`, {
vendor_id:localStorage.getItem('userid'),service_name:this.props.match.params.jobType
            })
          .then(response=>{
            if(response.data.success=='1')
            {
              var result=response.data.vendor_service_details;
if(response.data.vendor_service_details.data.length<=0)
                {
this.props.history.push('/dashboard/vendor/servicelist');
                }
                else {
this.setState({serviceoption:response.data.vendor_service_details.data,activePage:result.current_page,
                    itemsCountPerPage:result.per_page,
                    totalItemsCount:result.total,
                    pageNumber:pageNumber});
                }
            }
          })
          .catch(function (error) {
            console.log(error);
        });
      }
addMore=(name)=>{
  this.setState({action_tag:'adding'});
  $('#myNav_vendor').show();
document.getElementById("myNav_vendor").style.height = "50%";
}
closeNav=()=> {
this.setState({rates:'',service_attr:'',selectedAspectRatio:[]});
$('#subtitle_err_msg').html('');
$('#dubb_err_msg').html('');
  $('#transcode_err_msg').html('');
  $('#myNav_vendor').hide();
document.getElementById("myNav_vendor").style.height = "0%";
}
// ----------------- Table Action-----------------------
Action =(id,service_name)=>{
  return(<div>
    <button   id={`action_edit_${id}`}
onClick={()=>this.EditAction(id,service_name)}
style={{background:'white',border:'none',pointer:'cursor',color:'green'}}><i
class="fa fa-edit" ></i></button>
    <button   id={`action_trash_${id}`}
onClick={()=>this.deleteAction(id)}
style={{background:'white',border:'none',color:'black',pointer:'cursor'}}><i
class="fa fa-trash" style={{color:'rgb(128,0,0)'}}></i></button></div>)
}
deleteAction=(id)=>{
  $('#action_trash_'+id).attr('disabled',true);
  axios.post(VENDOR_DELETE_SERVICE, {
      id:id
      })
    .then(response=>{
      if(response.data.success=='1')
      {
        toast("Deleting");
        setTimeout(()=>{$('#action_trash_'+id).attr('disabled',false);this.getData()},2000);
      }
      else {
        $('#action_trash_'+id).attr('disabled',false);
        alert('Error');
      }
    })
    .catch(function (error) {
      console.log(error);
  });
}
// ------------ end----------------------------
//------------- Edit Content ---------------------
EditAction=(id,service_name)=>{
  this.setState({action_tag:'edit',editId:id});
  $('#myNav_vendor').show();
document.getElementById("myNav_vendor").style.height = "50%";
axios.post(VENDOR_SERVICE_EDIT, {
    id:id
    })
  .then(response=>{
    if(response.data.success=='1')
    {
      var data=response.data.data;
      if(service_name=="transcoding")
      {
        this.setState({rates:data.rates,selectedAspectRatio:{
value:data.serviceoption, label:data.serviceoption}})
      }
      else {
this.setState({rates:data.rates,service_attr:data.serviceoption})
      }
    }
  })
  .catch(function (error) {
    console.log(error);
});
}
// ------------end-------------------------
//-----------------  Add Language In dubb list --------------//
addDubbList=(e)=>{
  e.preventDefault();
  $('#save_button').html('Loading...');
  $('#save_button').attr('disabled',true);
    $('#dubb_err_msg').html('');
    var lang=[];
    var price=[];
   lang[0]=e.target.dubb_lang.value;
   price[0]=e.target.dubb_price.value;
  var price_match=/^[0-9]+$/;
    var lang_match=/^[a-zA-Z]+$/;
    var button_text=this.state.action_tag=="edit"?"Update":"Add";
  if(!price[0].match(price_match))
  {
    $('#save_button').html(button_text);
      $('#save_button').attr('disabled',false);
      $('#dubb_err_msg').html('Price Must Be Numeric');
      return false;
  }
  if(!lang[0].match(lang_match)){
    $('#save_button').html(button_text);
      $('#save_button').attr('disabled',false);
      $('#err_msg').html('Language Must Be In Characters');
      return false;
  }
  if(lang[0]==null || price[0]==null)
  {
      $('#save_button').html(button_text);
        $('#dubb_err_msg').html('All options must be filled');
      $('#save_button').attr('disabled',false);
      return false;
  }
  var url='';var props={};
  if(this.state.action_tag=='edit')
  {
    url=VENDOR_SERVICE_UPDATE;
    props={id:this.state.editId,
    serviceoption:lang[0],
    rate:price[0],}
  }
  else {
    url=ADD_VENDOR_SERVICE;
    props={vendor_id:localStorage.getItem('userid'),
    service_name:'vendor_dubb',
    service_params:lang,
    rates:price,}
  }
  axios.post(url,props
  )
  .then(response=>{
    console.log(response);
    if(response.data.success=='1' || response.data.success==1)
    {
      toast("Saving Your Record");
      setTimeout(()=>{
        this.getData();
        this.setState({rates:'',
      service_attr:'',
      editId:''});
        $("#add_dubb_lang_form").trigger("reset");
        $('#save_button').html(button_text);
        $('#save_button').attr('disabled',false);
        $('#myNav_vendor').hide();
    document.getElementById("myNav_vendor").style.height = "0%";
    },2000);
    }
    else {
          $('#save_button').html(button_text);
      $('#save_button').attr('disabled',false);
      return false;
    }
  })
  .catch(function (error) {
  console.log(error);
  });
}

//-----------------  Add Language In subtitle list --------------//

addSubtitleList=(e)=>{
  e.preventDefault();
  $('#subtitle_save_button').html('Loading...');
  $('#subtitle_save_button').attr('disabled',true);
    $('#subtitle_err_msg').html('');
    var lang=[];
    var price=[];
   lang[0]=e.target.subtitle_lang.value;
   price[0]=e.target.subtitle_price.value;
  var price_match=/^[0-9]+$/;
  var lang_match=/^[a-zA-Z]+$/;
    var button_text=this.state.action_tag=="edit"?"Update":"Add";
  if(!price[0].match(price_match))
  {
    $('#subtitle_save_button').html(button_text);
      $('#subtitle_save_button').attr('disabled',false);
      $('#subtitle_err_msg').html('Price Must Be Numeric');
      return false;
  }
  if(!lang[0].match(lang_match)){
    $('#subtitle_save_button').html(button_text);
      $('#subtitle_save_button').attr('disabled',false);
      $('#subtitle_err_msg').html('Language Must Be In Characters');
      return false;
  }
  if(lang[0]==null || price[0]==null)
  {
      $('#subtitle_save_button').html(button_text);
      $('#subtitle_err_msg').html('All options must be filled');
      $('#subtitle_save_button').attr('disabled',false);
      return false;
  }
  var url='';var props={};
  if(this.state.action_tag=='edit')
  {
    url=VENDOR_SERVICE_UPDATE;
    props={id:this.state.editId,
    serviceoption:lang[0],
    rate:price[0],}
  }
  else {
    url=ADD_VENDOR_SERVICE;
    props={vendor_id:localStorage.getItem('userid'),
    service_name:'vendor_subtitle',
    service_params:lang,
    rates:price,}
  }
  axios.post(url,props
  )
  .then(response=>{
    if(response.data.success=='1' || response.data.success==1)
    {
        $('#subtitle_save_button').html('Loading...');
        this.setState({rates:'',
      service_attr:'',
      editId:''});
      toast("Saving Your Record");
      setTimeout(()=>{
        this.getData()
        $('#subtitle_save_button').html(button_text);
        $('#subtitle_save_button').attr('disabled',false);
        $('#myNav_vendor').hide();
    document.getElementById("myNav_vendor").style.height = "0%";
    },2000);
    }
    else {
          $('#subtitle_save_button').html(button_text);
      $('#subtitle_save_button').attr('disabled',false);
      return false;
    }
  })
  .catch(function (error) {
  console.log(error);
  });
}
// --------------- Transcode ------------------------
selectedAspectRatioChange = (selectedOption) => {
this.setState({ selectedAspectRatio:selectedOption });
}
addTranscodeList =(e)=>{
  e.preventDefault();
  $('#transcode_save_button').html('Loading...');
  $('#transcode_save_button').attr('disabled',true);
    $('#transcode_err_msg').html('');
    var lang=[];
    var price=[];
   lang[0]=this.state.selectedAspectRatio.value;
   price[0]=e.target.transcode_price.value;
    var price_match=/^[0-9]+$/;
  var button_text=this.state.action_tag=="edit"?"Update":"Add";
  if(!price[0].match(price_match))
  {
    $('#transcode_save_button').html(button_text);
      $('#transcode_save_button').attr('disabled',false);
      $('#transcode_err_msg').html('Price Must Be Numeric');
      return false;
  }

  if(lang[0]==null || price[0]==null)
  {
      $('#transcode_save_button').html(button_text);
      $('#transcode_err_msg').html('All options must be filled');
      $('#transcode_save_button').attr('disabled',false);
      return false;
  }
  var url='';var props={};
  if(this.state.action_tag=='edit')
  {
    url=VENDOR_SERVICE_UPDATE;
    props={id:this.state.editId,
    serviceoption:lang[0],
    rate:price[0],}
  }
  else {
    url=ADD_VENDOR_SERVICE;
    props={vendor_id:localStorage.getItem('userid'),
    service_name:'vendor_transcode',
    service_params:lang,
    rates:price,}
  }
  axios.post(url,props
  )
  .then(response=>{
    console.log(response);
    if(response.data.success=='1' || response.data.success==1)
    {

      toast("Saving Your Record");
        $('#transcode_save_button').html('Loading...');
      setTimeout(()=>{
        this.getData();
        this.setState({selectedAspectRatio:[],rates:[]});
      $("#add_transcode_lang_form").trigger("reset");
      $('#myNav_vendor').hide();
        $('#transcode_save_button').attr('disabled',false);
    document.getElementById("myNav_vendor").style.height = "0%";
    },2000);
    }
    else {
          $('#transcode_save_button').html(button_text);
      $('#transcode_save_button').attr('disabled',false);
      return false;
    }
  })
  .catch(function (error) {
  console.log(error);
  });
}
//----------------End-------------------
  render()
  {
    const videolist=(this.state.serviceoption.length>0 &&
this.state.serviceoption.map((result,key)=>{
    return (
      <tr>
      <td class="ser_width">{result.serviceoption}</td>
      <td class="ser_width">{result.rates}</td>
      <td class="ser_width">Per Minute</td>
      <td class="ser_width">{this.Action(result.id,result.services)}</td>
    </tr>)
  }));
  if(this.props.match.params.jobType=="transcoding"){
    return (
      <div class="vendor_ser_det" style={{marginTop:'80px',minHeight:'500px'}}>
        <ToastContainer autoClose={2000}/>
        <div id="myNav_vendor" class="overlay_vendor">
          <form style={{padding:'40px'}} onSubmit={this.addTranscodeList} id="add_transcode_lang_form">
            <a href="javascript:void(0)" class="closebtn_vendor" onClick={()=>this.closeNav()}>&times;</a>
            <label for="pwd">Preset:</label>
            <div class="inner-addon right-addon">
              <Select
               value={this.state.selectedAspectRatio}
               onChange={this.selectedAspectRatioChange}
               placeholder={'Select Preset'}
               options={preset}
               isMulti={false}
               required/>
             </div>
             <label for="pwd">Price:</label>
             <div class="inner-addon right-addon">
               <span class="fa fa-money"></span>
               <input type="text" title="Enter Price" class="form-control effect-7" id="transcode_price" placeholder="Enter Price/Minute" name="transcode_price" value={this.state.rates} onChange={(e)=>this.setState({rates:e.target.value})} required />
               <span class="focus-border"> <i></i></span>
             </div>
             <center><span id="transcode_err_msg" style={{color:'red'}}></span></center>
             <button type="submit" class="btn btn-success float-right mt-2" id="transcode_save_button">{this.state.action_tag=="edit"?"Update":"Add"}</button>
           </form>
        </div>
        <div class="gap wrapper">
          <div class="container">
            <h4>{this.state.service_name} List &nbsp;<button class="btn btn-sm btn-primary float-right" style={{color:'white',cursor:'pointer'}} onClick={()=>this.addMore(this.props.match.params.jobType)}>Add More</button></h4>
            <div class="table-responsive" >
              <table class="table">
                <thead >
                  <tr>
                    <th scope="col">Presets</th>
                    <th scope="col">Price</th>
                    <th scope="col">Units</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                {this.state.serviceoption.length>0 && <tbody>
                 {videolist}
                </tbody>}
              </table>
            </div>
            <div class="col-lg-2 col-md-2 ml-4 mt-2 float-right">
              <div className="d-flex justify-content-end">
                <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={this.state.itemsCountPerPage}
                totalItemsCount={this.state.totalItemsCount}
                pageRangeDisplayed={this.state.pageRangeDisplayed}
                onChange={this.getData}
                itemClass='page-item'
                linkClass="page-link bold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  if(this.props.match.params.jobType=="dubbing"){
    return (
      <div class="vendor_ser_det" style={{marginTop:'80px',minHeight:'500px'}}>
        <ToastContainer autoClose={2000}/>
        <div id="myNav_vendor" class="overlay_vendor">
          <form style={{padding:'40px'}} onSubmit={this.addDubbList} id="add_dubb_lang_form">
            <a href="javascript:void(0)" class="closebtn_vendor" onClick={()=>this.closeNav()}>&times;</a>
            <label for="pwd">Language:</label>
            <div class="inner-addon right-addon">
              <span class="fa fa-language"></span>
              <input type="text" list="lang_list" title="Enter Language"  class="form-control effect-7" id="dubb_lang" placeholder="Enter Language" name="dubb_lang" value={this.state.service_attr} onChange={(e)=>this.setState({service_attr:e.target.value})} required />
              <DubbingLangList Id="lang_list"/>
              <span class="focus-border"> <i></i></span>
            </div>
            <label for="pwd">Price:</label>
            <div class="inner-addon right-addon">
              <span class="fa fa-money"></span>
              <input type="text" title="Enter Price" class="form-control effect-7" id="dubb_price" placeholder="Enter Price/Minute" name="dubb_price" value={this.state.rates} onChange={(e)=>this.setState({rates:e.target.value})} required />
              <span class="focus-border"> <i></i></span>
            </div>
            <center><span id="dubb_err_msg" style={{color:'red'}}></span></center>
            <button type="submit" class="btn btn-success float-right mt-2" id="save_button">{this.state.action_tag=="edit"?"Update":"Add"}</button>
          </form>
        </div>
        <div class="gap wrapper">
          <div class="container">
            <h4>{this.state.service_name} List &nbsp;<button class="btn btn-sm btn-primary float-right" style={{color:'white',cursor:'pointer'}} onClick={()=>this.addMore(this.props.match.params.jobType)}>Add More</button></h4>
            <div class="table-responsive" >
              <table class="table">
                <thead >
                  <tr>
                    <th scope="col">Language</th>
                    <th scope="col">Price(in Rupees)</th>
                    <th scope="col">Units</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                {this.state.serviceoption.length>0 && <tbody>
                 {videolist}
                </tbody>}
              </table>
            </div>
            <div class="col-lg-2 col-md-2 ml-4 mt-2 float-right">
              <div className="d-flex justify-content-end">
                <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={this.state.itemsCountPerPage}
                  totalItemsCount={this.state.totalItemsCount}
                  pageRangeDisplayed={this.state.pageRangeDisplayed}
                  onChange={this.getData}
                  itemClass='page-item'
                  linkClass="page-link bold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  if(this.props.match.params.jobType=="subtitle"){
    return (
      <div class="vendor_ser_det" style={{marginTop:'80px',minHeight:'500px'}}>
        <ToastContainer autoClose={2000}/>
        <div id="myNav_vendor" class="overlay_vendor">
          <form style={{padding:'40px'}} onSubmit={this.addSubtitleList} id="add_subtitle_lang_form">
            <a href="javascript:void(0)" class="closebtn_vendor" onClick={()=>this.closeNav()}>&times;</a>
            <label for="pwd">Language:</label>
            <div class="inner-addon right-addon">
              <span class="fa fa-language"></span>
              <input type="text" list="lang_list" title="EnterLanguage"  class="form-control effect-7" id="subtitle_lang" placeholder="Enter Language" name="subtitle_lang" value={this.state.service_attr} onChange={(e)=>this.setState({service_attr:e.target.value})} required />
              <DubbingLangList Id="lang_list"/>
              <span class="focus-border"><i></i></span>
            </div>

            <label for="pwd">Price:</label>
            <div class="inner-addon right-addon">
              <span class="fa fa-money"></span>
              <input type="text" title="Enter Price" class="form-control effect-7" id="subtitle_price" value={this.state.rates} placeholder="Enter Price/Minute" name="subtitle_price" onChange={(e)=>this.setState({rates:e.target.value})} required />
              <span class="focus-border"><i></i></span>
            </div>
            <center><span id="subtitle_err_msg" style={{color:'red'}}></span></center>
            <button type="submit" class="btn btn-success float-right mt-2" id="subtitle_save_button">{this.state.action_tag=="edit"?"Update":"Add"}</button>
          </form>
        </div>
        <div class="gap wrapper">
          <div class="container">
            <h4>{this.state.service_name} List &nbsp;<button class="btn btn-sm btn-primary float-right" style={{color:'white',cursor:'pointer'}} onClick={()=>this.addMore(this.props.match.params.jobType)}>Add More</button></h4>

            <div class="table-responsive" >
              <table class="table">
                <thead >
                  <tr>
                    <th scope="col">Language</th>
                    <th scope="col">Price(in Rupees)</th>
                    <th scope="col">Units</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                {this.state.serviceoption.length>0 && <tbody>
                 {videolist}
                </tbody>}
              </table>
            </div>
            <div class="col-lg-2 col-md-2 ml-4 mt-2 float-right">
              <div className="d-flex justify-content-end">
                <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={this.state.itemsCountPerPage}
                totalItemsCount={this.state.totalItemsCount}
                pageRangeDisplayed={this.state.pageRangeDisplayed}
                onChange={this.getData}
                itemClass='page-item'
                linkClass="page-link bold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  }
}
export default ServiceDetails;
