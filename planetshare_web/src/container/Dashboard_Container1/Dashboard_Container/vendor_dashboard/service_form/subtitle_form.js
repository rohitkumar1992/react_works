import React, { Component } from 'react';
import {Link,withRouter} from "react-router-dom";
import axios from 'axios';
import $ from 'jquery';
import {ADD_VENDOR_SERVICE} from '../../../../url.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './form.css';
const countryOptions = [
  { key: 'hin', value: 'hin',  text: 'Hindi' },
  { key: 'urd', value: 'urd',  text: 'Urdu' },
  { key: 'pun', value: 'pun',  text: 'Punjabi' },
    { key: 'en', value: 'en',  text: 'English' },
  { key: 'mar', value: 'mar',  text: 'Marathi' },
  { key: 'guj', value: 'guj',  text: 'Gujarati' },
  { key: 'tam', value: 'tam',  text: 'Tamil' },
  { key: 'bhoj', value: 'bhoj' ,text: 'Bhojpuri' },
  { key: 'assa', value: 'assa',  text: 'Assamese' },
  { key: 'ben', value: 'ben',  text: 'Bengali' },
  { key: 'kan', value: 'kan',  text: 'Kannada' },
  { key: 'kas', value: 'kas', text: 'Kashmiri' },
  { key: 'mal', value: 'mal',  text: 'Malayalam' },
  { key: 'ori', value: 'ori',  text: 'Oriya' },
  { key: 'tel', value: 'tel',  text: 'Telugu' },
  { key: 'sin', value: 'sin',  text: 'Sindhi' },
  { key: 'pas' ,value:'pas',    text: 'Pashto ' },
  { key: 'ara', value: 'ara', text: 'Arabic' },
  { key: 'nep', value: 'nep',  text: 'Nepali' },
  { key: 'arm ',value: 'arm',  text:'Armenian  ' },
  { key: 'aze', value: 'aze',  text: 'Azerbaijani ' },
  { key: 'bhu', value: 'bhu',  text: ' Bhutanese  ' },
  { key: 'khm', value: 'khm',  text: 'Khmer ' },
  { key: 'chin', value: 'chin', text: 'Chinese ' },
  { key: 'per', value: 'per',  text: 'Persian ' },
  { key: 'heb', value: 'heb',  text: 'Hebrew ' },
  { key: 'kur', value: 'kur',  text: 'Kurdish' },
  { key: 'bahs', value: 'bahs',  text: 'Bahasa Melayu' },
  { key: 'mal', value: 'mal',  text: 'Maldivian' },
  { key: 'burm', value: 'burm',  text: 'Burmese' },
  { key: 'sin', value: 'sin',  text: ' Sinhala  ' },
  { key: 'tha', value: 'tha', text: 'Thai' },
  { key: 'bn', value: 'bn', flag: 'bn', text: 'Brunei' },
  { key: 'bg', value: 'bg', flag: 'bg', text: 'Bulgaria' },
  { key: 'vie', value: 'vie', text: 'Vietnamese' },
  { key: 'phi', value: 'phi', text: 'Philippines' },
  { key: 'com', value: 'com',text: 'Cambodian' },
  { key: 'tur', value: 'tur',  text: 'Turkish' },

]
class TranscodeForm extends Component {
componentDidMount()
{
  var next = 0;
    $("#add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn = '<tr id="field'+ next +'" name="field'+ next +'">'
           newIn +='<td><input list="browsers" name="browser'+next+'" id="list_value'+next+'" style="color:black"/><datalist id="browsers" >';
           for(var i=0;i<countryOptions.length;i++)
           {
             newIn +='<option value="'+countryOptions[i].text+'">'+countryOptions[i].text+'</option>';
           }
             newIn+='</datalist></td><td>  <input type="text" class="price_box"  name="pp" id="price'+next+'"  required/></td><td>Per Minute</td></tr>'
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next) + '" class="btn btn-danger remove-me" >Remove</button></div></div><div id="field">';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);

            $('.remove-me').click(function(e){
                e.preventDefault();
                var fieldNum = this.id.charAt(this.id.length-1);
                var fieldID = "#field" + fieldNum;
                $(this).remove();
                $(fieldID).remove();
            });
    });
}
dubbingList=(e)=>{
  e.preventDefault();
  var arrPrice=[];
  var arrList=[];
  var z= document.getElementsByClassName('price_box').length;
  for(var j=0;j<z;j++)
  {
    var val=document.getElementById('price'+j).value;
    arrList[j]=document.getElementById('list_value'+j).value;
    arrPrice[j]=val;
  }
  axios.post(ADD_VENDOR_SERVICE,
    {
      vendor_id:localStorage.getItem('userid'),
      service_name:'vendor_subtitle',
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
      return false;
    }
  })
  .catch(function (error) {
  console.log(error);
  });
}
  render() {
    const list=countryOptions.map((result,key)=>{
      return(<option value={result.text}>{result.text}</option>)
    })
    return (
      <div class="top_div">
      <ToastContainer autoClose={2000}/>
      <form ction="javascript:" onSubmit={this.dubbingList}>
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
       <td>Language</td>
       <td><div style={{ width:'38%'}} >Price</div></td>
       <td>Duration</td>
      </tr>

      <tr id="field0" >
<td>   <input list="browsers0" name="browser0" id="list_value0" style={{color:'black'}}/>
  <datalist id="browsers0">
{list}
  </datalist> </td>
       <td>  <input type="text" className="price_box"  name="pp" id="price0" style={{ width:'38%'}} required/></td>
       <td>Per Minute</td>
      </tr>

      </tbody>
      </table>
      </div>
      </div>
        <button type="submit" class="btn btn-lg btn-success pull-right" id="save_button">Next</button>
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
