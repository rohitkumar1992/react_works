import React, { Component } from 'react';
import axios from 'axios';
import {VENDOR_SINGLE_JOB_DETAILS} from '../../url.js';
import Loader from '../../component/loader/loader.js';
class ServiceDetails extends Component {
  state={
    loader:false,
    serviceoption:'',
  }

      componentDidMount()
      {
        this.setState({service_name:this.props.match.params.service.charAt(0).toUpperCase()+this.props.match.params.service.slice(1)})
        axios.post(VENDOR_SINGLE_JOB_DETAILS, {
            vendor_id:this.props.match.params.id,
            service_name:this.props.match.params.service
            })
          .then(response=>{

            if(response.data.success=='1')
            {
              this.setState({serviceoption:response.data.vendor_service_details.data,loader:true})
            }
          })
          .catch(function (error) {
            console.log(error);
        });
      }

  render()
  {
    const videolist=(this.state.serviceoption.length>0 && this.state.serviceoption.map((result,key)=>{
    return (
      <tr>
      <td class="ser_width">{result.serviceoption}</td>
      <td class="ser_width">{result.rates}</td>
      <td class="ser_width">per minute</td>
    </tr>)
  }));
  if(!this.state.loader)
  {
  return (<Loader content={`${this.state.service_name} List`}/>);
  }
  if(this.props.match.params.service=="transcoding"){
    return (
      <div >
      <h2 >{this.state.service_name} List</h2>
      <br/><br/><br/>
      <div class="table-responsive" >
  <table class="table">
    <thead >
      <tr>
        <th scope="col">Presets</th>
        <th scope="col">Price</th>
        <th scope="col">Units</th>
      </tr>
    </thead>
    {this.state.serviceoption.length>0 && <tbody>
     {videolist}
    </tbody>}
    </table>
    </div>
    </div>
    )
  }
  if(this.props.match.params.service=="dubbing"){
    return (
      <div >
      <h2 >{this.state.service_name} List</h2>
      <br/><br/><br/>
      <div class="table-responsive" >
  <table class="table">
    <thead >
      <tr>
        <th scope="col">Language</th>
        <th scope="col">Price(in Rupees)</th>
        <th scope="col">Units</th>
      </tr>
    </thead>
    {this.state.serviceoption.length>0 && <tbody>
     {videolist}
    </tbody>}
    </table>
    </div>
    </div>
    )
  }
  if(this.props.match.params.service=="subtitle"){
    return (
      <div >
      <h2 >{this.state.service_name} List</h2>
      <br/><br/><br/>
      <div class="table-responsive" >
  <table class="table">
    <thead >
      <tr>
        <th scope="col">Language</th>
        <th scope="col">Price(in Rupees)</th>
        <th scope="col">Units</th>
      </tr>
    </thead>
    {this.state.serviceoption.length>0 && <tbody>
     {videolist}
    </tbody>}
    </table>
    </div>
    </div>
    )
  }
  }
}
export default ServiceDetails;
