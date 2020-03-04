import React, { Component } from 'react';
import {Link,withRouter} from "react-router-dom";
import axios from 'axios';
import $ from 'jquery';
import {ADD_VENDOR_SERVICE} from '../../../../url.js';
import './form.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class TranscodeForm extends Component {
componentDidMount()
{
  var x=[];
$('.Checkbox').click(function()
{
  var arr=[],i=0,m=0;
      var enb=[];
  $('.Checkbox:checked').each(function () {
  arr[i++] = $(this).val();
  });
    x=arr;
    $(".Checkbox").each(function() {
      enb[m++] = $(this).val();
      });
    for(var j=0;j<enb.length;j++)
    {
      for(var k=0;k<x.length;k++)
      {

        if(enb[j]==x[k])
        {
          $('#'+enb[j]+"_price").prop("disabled", false);
        }
        else {
          $('#'+enb[j]+"_price").prop("disabled", true);
        }
      }
    }
  $('#preset_list').val(x);
})
}
transcodingList=(e)=>{
  e.preventDefault();
    $('#save_button').attr('disabled',true);
var list=$('#preset_list').val();
var list_array=list.split(',');
var list_length=list_array.length;
var price_array=[];

for(var i=0;i<list_length;i++)
{
price_array.push(document.getElementById(list_array[i]+'_price').value);
}
if(list_array.length<=0 || price_array.length<=0)
{
      $('#save_button').attr('disabled',false);
  return false;
}
axios.post(ADD_VENDOR_SERVICE,
  {
    vendor_id:localStorage.getItem('userid'),
    service_name:'vendor_transcode',
    service_params:list_array,
    rates:price_array,
  }
)
.then(response=>{
  if(response.data.success=='1' || response.data.success==1)
  {
    toast("Adding Your Request");
    setTimeout(()=>this.props.history.push('/dashboard/vendor/servicelist'),2000);
  }
  else {
      $('#save_button').attr('disabled',false);
    return false;
  }
})
.catch(function (error) {
console.log(error);
});
}
  render() {
    return (
      <div class="top_div">
      <ToastContainer autoClose={2000}/>
<form ction="javascript:" onSubmit={this.transcodingList}>
<div class="row">
<div class="col-md-6 col-lg-8 col-sm-10 col_sub" style={{marginTop:'4%',marginLeft:'17%'}}>
<input type="hidden" id="preset_list"/>
<table class="table table-hover">
<thead>
<tr>

</tr>
</thead>
<tbody>
<tr>
<td> </td>
 <td>Preset</td>
 <td><div style={{ width:'38%'}} >Price</div></td>
 <td>Duration</td>
</tr>
<tr>
<td> <li style={{color:'black' ,textTransform:'uppercase'}}><input type="checkbox" name="1080ps" value="1080p" id="1080p" class="Checkbox" /> </li></td>
  <td>1080P</td>
 <td>  <input type="text" class="price_box"  name="1080p" id="1080p_price" style={{ width:'38%'}} disabled/></td>
 <td>Per Minute</td>
</tr>
<tr>

<td> <li style={{color:'black' ,textTransform:'uppercase'}}><input type="checkbox" name="720ps" value="720p" id="720p" class="Checkbox" /></li></td>
<td>720P</td>
<td><input type="text" class="price_box" name="720p" id="720p_price" style={{ width:'38%'}} disabled/></td>
<td>Per Minute</td>
</tr>
<tr>

<td>
<li style={{color:'black',textTransform:'uppercase'}}><input type="checkbox" name="360ps" value="360p" id="360p" class="Checkbox" /></li></td>
<td>360P</td>
<td><input type="text" class="price_box" name="360p" id="360p_price" style={{ width:'38%'}} disabled/></td>
<td>Per Minute</td>
</tr>
<tr>
<td><li style={{color:'black',textTransform:'uppercase'}}><input type="checkbox" name="240ps" value="240p" id="240p" class="Checkbox" /></li></td>
<td>240P</td>
<td><input type="text" class="price_box" name="240p"  id="240p_price" style={{ width:'38%'}} disabled/></td>
<td>Per Minute</td>
</tr>
<tr>
<td><li style={{color:'black',textTransform:'uppercase'}}><input type="checkbox" name="144ps" value="144p" id="144p" placeholder="A red placeholder text.." class="Checkbox" /></li></td>
<td>144P</td>
<td><input type="text" class="price_box" name="144p" id="144p_price" style={{ width:'38%'}} disabled/></td>
<td>Per Minute</td>
</tr>
</tbody>
</table>
</div>
</div>
  <button type="submit" class="btn btn-lg btn-success pull-right" id="save_button">Next</button>
</form>
</div>
        )
}
}
export default withRouter(TranscodeForm);
