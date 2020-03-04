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

    $("#add-more").click(function(e){
        e.preventDefault();
          // var next =document.getElementsByClassName('get_class_name').length-1;
          var ids = $('.get_class_name').map(function() {
          return $(this).attr('value');
        });
        var len=ids.length;
        var next=ids[len-1];
        var addto = "#field" + next;
        var addRemove = "#field" +next;
        next = next + 1;
        var newIn = '<tr id="field'+ next +'" name="field'+ next +'" class="get_class_name" value='+next+'>'
           newIn +='<td><select name="browser'+next+'" id="list_value'+next+'" class="select_lang" required><option selected disabled>Select Language</option>';
           for(var i=0;i<countryOptions.length;i++)
           {
             newIn +='<option value="'+countryOptions[i].text+'">'+countryOptions[i].text+'</option>';
           }
             newIn+='</select></td><td class="yy">  <input type="number" class="price_box" placeholder="Enter Price"  name="pp" id="price'+next+'"  required/></td><td>Per Minute</td></tr>'
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next) + '" class="btn btn-danger remove-me remove_section" ><i class="fa fa-times" aria-hidden="true"></i></button>';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);
        // function remove(id)
        // {
        //   alert(id)
        // }
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
$('#save_button').attr('disabled',true);
  var arrPrice=[];
  var arrList=[];
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
      service_name:'vendor_subtitle',
      service_params:arrList,
      rates:arrPrice,
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
    const list=countryOptions.map((result,key)=>{
      return(<option value={result.text}>{result.text}</option>)
    })
    return (
      <div class="top_div add_services_box">
      <ToastContainer autoClose={2000}/>
      <form ction="javascript:" onSubmit={this.dubbingList}>
        <center><span style={{color:'red'}} id="err_msg"></span></center>
      <div class="row">
      <div class="col-md-12 col-lg-12 col-sm-12 col_sub" >
      <input type="hidden" id="preset_list"/>
      <table class="table table-hover">
      <thead>
      <tr>

      </tr>
      </thead>
      <tbody class="langauge_sec">
      <tr id="lc">
       <td>Language</td>
       <td><div  >Price</div></td>
       <td>Duration</td>
      </tr>

      <tr id="field0" class="get_class_name" value="0">
    <td>             <select id="list_value0" name="browser0" class="select_lang" required>
          <option selected disabled>Select Language</option>
          {list}
          </select > </td>
       <td class="yy"><input type="number" className="price_box" placeholder="Enter Price"  name="pp" id="price0"  required/></td>
       <td>Per Minute</td>
      </tr>

      </tbody>
      </table>
      </div>
      </div>
        <button type="submit" class="btn btn-lg btn-success pull-right  vender_next_btn" id="save_button">Save</button>
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
