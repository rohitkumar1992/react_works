import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import {ASSIGN_VENDOR_SERVICE,ASSIGNED_VENDOR_SERVICE} from '../../url.js';
import {Link} from 'react-router-dom'
import $ from 'jquery';
import Vendor_Service_Price from '../../component/vendor_price_form/vendor_price_form';
// import Select from 'react-select';
class AssignTaskToVendor extends React.Component {
    state = {
      vendor_list:[],
      vendor_status:[],
      vendor_id_list:[],
      language_list:[],
      vendor_price:[],
      length:[10,20],
      vendor_details:[],
      lang_list:[],
      total_price_by_user:0
    };
    componentDidMount()
    {
      const {vendor_price,vendor_status}=this.state;
      axios.post(ASSIGN_VENDOR_SERVICE, {
          id:this.props.match.params.id,
          service_name:this.props.match.params.service_name
          })
        .then(response=>{
          var result=response.data;
          if(result.success=='1')
          {
            var list_option;
            if(this.props.match.params.service_name=="dubbing")
            {
                list_option=result.language.dubbed_language.split(',');
            }
            if(this.props.match.params.service_name=="subtitle")
            {
                list_option=result.language.language.split(',');
            }
            if(this.props.match.params.service_name=="transcoding")
            {
                list_option=result.language.split(',');
            }
            for(var i=0;i<list_option.length;i++)
            {
              vendor_price[i]=0;
              vendor_status[i]=1;
              this.setState({vendor_price,vendor_status});
            }
            // console.log(result.language.dubbed_language.split(','));
            if(this.props.match.params.service_name=="transcoding")
            {
                this.setState({vendor_details:result.vendor_lists,lang_list:list_option,total_price_by_user:result.price});
            }
            else {
            this.setState({vendor_details:result.vendor_lists,lang_list:list_option,total_price_by_user:result.language.price});
          }
          }
        })
        .catch(function (error) {
          console.log(error);
      });
    }
// componentDidMount()
// {
// var vendor_list=[],vendor_price=[];
// $('.vendor_list').on('change', function (e) {
// var length=document.getElementsByClassName('vendor_list').length;
// for(var i=0;i<length;i++)
// {
//   var optionSelected=$('#vendor_list'+i).val();
//   // $('#vendor_list'+i).on('change', function (e) {
//   //     var optionSelected = $("option:selected", this);
//       var valueSelected = optionSelected.split('/');
//       vendor_list[i]=valueSelected[0];
//       vendor_price[i]=valueSelected[1];
//   // });
// }
// $('#vendor_list_arr').val(vendor_list);
// $('#vendor_price_arr').val(vendor_price)
// })
// }
dataListChange=(index,lang_name)=>{
  const { vendor_list,vendor_price,language_list,vendor_id_list} = this.state;
  var optionSelected=$('#vendor_list'+index).val();
  var valueSelected = optionSelected.split('/');
  vendor_list[index]= valueSelected[0];
vendor_price[index]= valueSelected[1];
vendor_id_list[index]= valueSelected[2];
language_list[index]= lang_name;
  this.setState({
      vendor_list,vendor_price,language_list,vendor_id_list
  });
}
AssignVendor=(e)=>{
  e.preventDefault();
  axios.post(ASSIGNED_VENDOR_SERVICE, {
      vendor_list:this.state.vendor_id_list,
      price_list:this.state.vendor_price,
      id:this.props.match.params.id,
      language_list:this.state.lang_list,
      vendor_service_status:this.state.vendor_status,
      service_name:this.props.match.params.service_name
      })
    .then(response=>{
      var result=response.data;
      if(result.success==1 || result.success=='1')
      {
          this.props.history.push(`/services/${this.props.match.params.service_name}`);
      }
      else {
        return false;
      }
    })
    .catch(function (error) {
      console.log(error);
  });
}

  render() {
    let total=0;
    if(this.state.vendor_price.length>0)
    {
    for(var i=0;i<this.state.vendor_price.length;i++)
    {
      total=+total + +this.state.vendor_price[i];
    }
  }
    const price_box=(this.state.vendor_price.map((result,key)=>{
        return(<Vendor_Service_Price price={result} lang={this.state.lang_list[key]} />)
    }))
    const dubbed_lang_list=(this.state.lang_list.map((result,key)=>{
      return(<div class="col-xl-12 col-md-12 mb-12" style={{marginTop:'30px'}}>
                            <div class="card border-left-primary shadow h-100 py-2">
                              <div class="card-body">
                              <div class="row no-gutters align-items-center">
                                  <div class="col mr-2">
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{result}</div>
                                  </div>
                                  <div class="col-auto">
                                    <i class="fa fa-calendar fa-2x text-gray-300"></i>
                                  </div>
                                </div>
                              </div>
                </div>
            </div>);
    }))
    // <option selected disabled>Select Vendor</option>

    const vendor_list_price=(this.props.match.params.service_name!="transcoding" && this.state.vendor_details.map((result,key1)=>{
      return( <div class="col-xl-12 col-md-12 mb-12" style={{marginTop:'30px'}}>
                            <div class="card border-left-primary shadow h-100 py-2">
                              <div class="card-body">
                              <div class="row no-gutters align-items-center">
                                  <div class="col mr-2"><select id={`vendor_list${key1}`} class="vendor_list" onChange={this.dataListChange.bind(this,key1,this.state.lang_list[key1])} required>
                        <option selected disabled>Select Vendor</option><option  value="Self/0/26">Self</option>{result.data.map((response,key)=>{
                          return(
                                <option  value={`${response.companyName}/${response.rates}/${response.vendor_id}`}>{response.companyName}(Rs.{response.rates}/min)</option>)
                        })}
                        </select></div></div>
                      </div>
        </div>
    </div>)
    }))
const vendor_transcode_list_price=(this.state.vendor_details.map((result,key1)=>{
  return( <div class="col-xl-12 col-md-12 mb-12" style={{marginTop:'30px'}}>
                        <div class="card border-left-primary shadow h-100 py-2">
                          <div class="card-body">
                          <div class="row no-gutters align-items-center">
                              <div class="col mr-2"><select id={`vendor_list${key1}`} class="vendor_list" onChange={this.dataListChange.bind(this,key1,this.state.lang_list[key1])} required>
                    <option selected disabled>Select Vendor</option><option  value="Self/0/26">Self</option>
                    </select></div></div>
                  </div>
    </div>
</div>)
}))
    if(this.props.match.params.service_name=="dubbing")
    {
      return (
        <div>
              <form onSubmit={this.AssignVendor}>
          <div class="row">
              <div class="col-md-4">
              {dubbed_lang_list}
              </div>

                <div class="col-md-4">
                {vendor_list_price}
                </div>

            <div class="col-md-4">
          <div class="card border-left-primary shadow h-100 py-2"  style={{border:'2px solid grey'}}> <div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2">{price_box}</div>
          {this.state.total_price_by_user-total>0 && <div><p class="h5 mb-0 font-weight-bold text-gray-800">Profit:{this.state.total_price_by_user-total}</p></div>}
          {this.state.total_price_by_user<=total && <div><p class="h5 mb-0 font-weight-bold text-gray-800">Loss:{total-this.state.total_price_by_user}</p>
          <p style={{color:'red'}}>Please Make the selection prudently</p></div>
          }
          </div><p class="h5 mb-0 font-weight-bold text-gray-800">Total:{total}</p><br/><br/><button type="submit" class="btn btn-success">Assign</button></div>
          </div></div>
          </div>
          </form>
          </div>
      );
    }
    if(this.props.match.params.service_name=="subtitle")
    {
      return(
        <div>
              <form onSubmit={this.AssignVendor}>
          <div class="row">
              <div class="col-md-4">
              {dubbed_lang_list}
              </div>

                <div class="col-md-4">
                {vendor_list_price}
                </div>

            <div class="col-md-4">
          <div class="card border-left-primary shadow h-100 py-2"  style={{border:'2px solid grey'}}> <div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2">{price_box}</div>
          {this.state.total_price_by_user-total>0 && <div><p class="h5 mb-0 font-weight-bold text-gray-800">Profit:{this.state.total_price_by_user-total}</p></div>}
          {this.state.total_price_by_user<=total && <div><p class="h5 mb-0 font-weight-bold text-gray-800">Loss:{total-this.state.total_price_by_user}</p>
          <p style={{color:'red'}}>Please Make the selection prudently</p></div>
          }
          </div><p class="h5 mb-0 font-weight-bold text-gray-800">Total:{total}</p><br/><br/><button type="submit" class="btn btn-success">Assign</button></div>
          </div></div>
          </div>
          </form>
          </div>
      );
    }
    if(this.props.match.params.service_name=="transcoding")
    {
      return(
        <div>
              <form onSubmit={this.AssignVendor}>
          <div class="row">
              <div class="col-md-4">
              {dubbed_lang_list}
              </div>

                <div class="col-md-4">
                {vendor_transcode_list_price}
                </div>

            <div class="col-md-4">
          <div class="card border-left-primary shadow h-100 py-2"  style={{border:'2px solid grey'}}> <div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2">{price_box}</div>
          {this.state.total_price_by_user-total>0 && <div><p class="h5 mb-0 font-weight-bold text-gray-800">Profit:{this.state.total_price_by_user-total}</p></div>}
          {this.state.total_price_by_user<=total && <div><p class="h5 mb-0 font-weight-bold text-gray-800">Loss:{total-this.state.total_price_by_user}</p>
          <p style={{color:'red'}}>Please Make the selection prudently</p></div>
          }
          </div><p class="h5 mb-0 font-weight-bold text-gray-800">Total:{total}</p><br/><br/><button type="submit" class="btn btn-success">Assign</button></div>
          </div></div>
          </div>
          </form>
          </div>
      );
    }
    if(this.props.match.params.service_name=="tagging")
    {
      return(
        <div>subtitling</div>
      );
    }
  }
}
export default AssignTaskToVendor;
