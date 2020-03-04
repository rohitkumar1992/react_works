import React, { Component } from 'react';
import {Link,withRouter} from "react-router-dom";
import axios from 'axios';
import $ from 'jquery';
import {ADD_VENDOR_SERVICE} from '../../../../url.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './form.css';
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
class TranscodeForm extends Component {
componentDidMount()
{
    $("#add-more").click(function(e){
        e.preventDefault();
        // var next =document.getElementsByClassName('get_class_name').length-1;
        var ids = $('.get_class_name').map(function() {
        return $(this).attr('value');
      });
        var len=ids.length;
        var next=ids[len-1];
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn = '<tr id="field'+ next +'" name="field'+ next +'" class="get_class_name" value='+next+'>'
           newIn +='<td><select name="browser'+next+'" class="select_lang" id="list_value'+next+'" required><option selected disabled>Select Preset</option>';
           for(var i=0;i<preset.length;i++)
           {
             newIn +='<option value="'+preset[i].value+'">'+preset[i].label+'</option>';
           }
             newIn+='</select></td><td class="yy">  <input type="number" class="price_box" placeholder="Enter Price"  name="pp" id="price'+next+'"  required/></td><td>Per Minute</td></tr>'
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next) + '" class="btn btn-danger remove-me remove_section" ><i class="fa fa-times" aria-hidden="true"></i></button>';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);

            // $('.remove-me').click(function(e){
            //     e.preventDefault();
            //     var fieldNum = this.id.charAt(this.id.length-1);
            //     var fieldID = "#field" + fieldNum;
            //     $(this).remove();
            //     $(fieldID).remove();
            // });
            $('#remove'+next).click(function(e){
                e.preventDefault();
                document.getElementById("field"+next).remove();
                  document.getElementById("remove"+next).remove();
                // var fieldNum = this.id.charAt(this.id.length-1);
                // var fieldID = "#field" + fieldNum;
                // $(this).remove();
                // $(fieldID).remove();
            });
    });
}
dubbingList=(e)=>{
  e.preventDefault();
    $('#err_msg').html('');
  var arrPrice=[];
  var arrList=[];
  $('#save_button').attr('disabled',true);
  var ids = $('.get_class_name').map(function() {
  return $(this).attr('value');
});
  var z= ids.length;
  for(var j=0;j<z;j++)
  {
    var val=document.getElementById('price'+ids[j]).value;
    var price_match=/^[0-9]+$/;
    if(!val.match(price_match))
    {
        $('#err_msg').html('Price Must Be Numeric');
        $('#save_button').attr('disabled',false);
        return false;
    }
    arrList[j]=document.getElementById('list_value'+ids[j]).value;
    arrPrice[j]=val;
  }
  axios.post(ADD_VENDOR_SERVICE,
    {
      vendor_id:localStorage.getItem('userid'),
      service_name:'vendor_transcode',
      service_params:arrList,
      rates:arrPrice,
    }
  )
  .then(response=>{
    if(response.data.success=='1' || response.data.success==1)
    {
      toast("Your Request Added");
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
    const list=preset.map((result,key)=>{
      return(<option value={result.value}>{result.label}</option>)
    })
    return (
      <div class="top_div">
      <ToastContainer autoClose={2000}/>
      <form ction="javascript:" onSubmit={this.dubbingList}>
      <center><span style={{color:'red'}} id="err_msg"></span></center>
      <div class="row">
      <div class="col-md-12 col-lg-12 col-sm-12 col_sub">
      <input type="hidden" id="preset_list"/>
      <table class="table table-hover">
      <thead>
      <tr>

      </tr>
      </thead>
      <tbody class="langauge_sec">
      <tr id="lc">
       <td>Preset</td>
       <td><div>Price(in Rs)</div></td>
       <td>Duration</td>
      </tr>

      <tr id="field0" class="get_class_name" value="0">
<td>
          <select id="list_value0" name="browser0" class="select_lang" required>
          <option selected disabled>Select Preset</option>
          {list}
          </select></td>
       <td class="yy">  <input type="number" className="price_box" placeholder="Enter Price" name="pp" id="price0"  required/></td>
       <td>Per Minute</td>
      </tr>

      </tbody>
      </table>
      </div>
      </div>
        <button type="submit" class="btn btn-lg btn-success pull-right vender_next_btn" id="save_button">Save</button>
      </form>
      <div class="form-group">
        <div class="col-md-4">
          <button id="add-more" name="add-more" class="btn btn-primary">Add More</button>
        </div>
      </div>

          </div>

        )
}
}
export default withRouter(TranscodeForm);
