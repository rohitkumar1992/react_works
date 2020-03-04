import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Not_Found from '../../component/not_found/not_found'
import Loader from '../../component/loader/profileLoader';
import {USER_PROFILE,USERID,COUNTRYCODE,PARTNER_ID,UPLOAD_PROFILE} from '../../url'
import { ToastContainer, toast,cssTransition} from 'react-toastify';
import LinesEllipsis from 'react-lines-ellipsis'
import $ from 'jquery'
 import 'react-toastify/dist/ReactToastify.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Authenticator from '../Authentication/Authentication'
 const countryList=[
   {name: 'Afghanistan', code: 'AF'},
   {name: 'Åland Islands', code: 'AX'},
   {name: 'Albania', code: 'AL'},
   {name: 'Algeria', code: 'DZ'},
   {name: 'American Samoa', code: 'AS'},
   {name: 'AndorrA', code: 'AD'},
   {name: 'Angola', code: 'AO'},
   {name: 'Anguilla', code: 'AI'},
   {name: 'Antarctica', code: 'AQ'},
   {name: 'Antigua and Barbuda', code: 'AG'},
   {name: 'Argentina', code: 'AR'},
   {name: 'Armenia', code: 'AM'},
   {name: 'Aruba', code: 'AW'},
   {name: 'Australia', code: 'AU'},
   {name: 'Austria', code: 'AT'},
   {name: 'Azerbaijan', code: 'AZ'},
   {name: 'Bahamas', code: 'BS'},
   {name: 'Bahrain', code: 'BH'},
   {name: 'Bangladesh', code: 'BD'},
   {name: 'Barbados', code: 'BB'},
   {name: 'Belarus', code: 'BY'},
   {name: 'Belgium', code: 'BE'},
   {name: 'Belize', code: 'BZ'},
   {name: 'Benin', code: 'BJ'},
   {name: 'Bermuda', code: 'BM'},
   {name: 'Bhutan', code: 'BT'},
   {name: 'Bolivia', code: 'BO'},
   {name: 'Bosnia and Herzegovina', code: 'BA'},
   {name: 'Botswana', code: 'BW'},
   {name: 'Bouvet Island', code: 'BV'},
   {name: 'Brazil', code: 'BR'},
   {name: 'British Indian Ocean Territory', code: 'IO'},
   {name: 'Brunei Darussalam', code: 'BN'},
   {name: 'Bulgaria', code: 'BG'},
   {name: 'Burkina Faso', code: 'BF'},
   {name: 'Burundi', code: 'BI'},
   {name: 'Cambodia', code: 'KH'},
   {name: 'Cameroon', code: 'CM'},
   {name: 'Canada', code: 'CA'},
   {name: 'Cape Verde', code: 'CV'},
   {name: 'Cayman Islands', code: 'KY'},
   {name: 'Central African Republic', code: 'CF'},
   {name: 'Chad', code: 'TD'},
   {name: 'Chile', code: 'CL'},
   {name: 'China', code: 'CN'},
   {name: 'Christmas Island', code: 'CX'},
   {name: 'Cocos (Keeling) Islands', code: 'CC'},
   {name: 'Colombia', code: 'CO'},
   {name: 'Comoros', code: 'KM'},
   {name: 'Congo', code: 'CG'},
   {name: 'Congo, The Democratic Republic of the', code: 'CD'},
   {name: 'Cook Islands', code: 'CK'},
   {name: 'Costa Rica', code: 'CR'},
   {name: 'Cote D\'Ivoire', code: 'CI'},
   {name: 'Croatia', code: 'HR'},
   {name: 'Cuba', code: 'CU'},
   {name: 'Cyprus', code: 'CY'},
   {name: 'Czech Republic', code: 'CZ'},
   {name: 'Denmark', code: 'DK'},
   {name: 'Djibouti', code: 'DJ'},
   {name: 'Dominica', code: 'DM'},
   {name: 'Dominican Republic', code: 'DO'},
   {name: 'Ecuador', code: 'EC'},
   {name: 'Egypt', code: 'EG'},
   {name: 'El Salvador', code: 'SV'},
   {name: 'Equatorial Guinea', code: 'GQ'},
   {name: 'Eritrea', code: 'ER'},
   {name: 'Estonia', code: 'EE'},
   {name: 'Ethiopia', code: 'ET'},
   {name: 'Falkland Islands (Malvinas)', code: 'FK'},
   {name: 'Faroe Islands', code: 'FO'},
   {name: 'Fiji', code: 'FJ'},
   {name: 'Finland', code: 'FI'},
   {name: 'France', code: 'FR'},
   {name: 'French Guiana', code: 'GF'},
   {name: 'French Polynesia', code: 'PF'},
   {name: 'French Southern Territories', code: 'TF'},
   {name: 'Gabon', code: 'GA'},
   {name: 'Gambia', code: 'GM'},
   {name: 'Georgia', code: 'GE'},
   {name: 'Germany', code: 'DE'},
   {name: 'Ghana', code: 'GH'},
   {name: 'Gibraltar', code: 'GI'},
   {name: 'Greece', code: 'GR'},
   {name: 'Greenland', code: 'GL'},
   {name: 'Grenada', code: 'GD'},
   {name: 'Guadeloupe', code: 'GP'},
   {name: 'Guam', code: 'GU'},
   {name: 'Guatemala', code: 'GT'},
   {name: 'Guernsey', code: 'GG'},
   {name: 'Guinea', code: 'GN'},
   {name: 'Guinea-Bissau', code: 'GW'},
   {name: 'Guyana', code: 'GY'},
   {name: 'Haiti', code: 'HT'},
   {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
   {name: 'Holy See (Vatican City State)', code: 'VA'},
   {name: 'Honduras', code: 'HN'},
   {name: 'Hong Kong', code: 'HK'},
   {name: 'Hungary', code: 'HU'},
   {name: 'Iceland', code: 'IS'},
   {name: 'India', code: 'IN'},
   {name: 'Indonesia', code: 'ID'},
   {name: 'Iran, Islamic Republic Of', code: 'IR'},
   {name: 'Iraq', code: 'IQ'},
   {name: 'Ireland', code: 'IE'},
   {name: 'Isle of Man', code: 'IM'},
   {name: 'Israel', code: 'IL'},
   {name: 'Italy', code: 'IT'},
   {name: 'Jamaica', code: 'JM'},
   {name: 'Japan', code: 'JP'},
   {name: 'Jersey', code: 'JE'},
   {name: 'Jordan', code: 'JO'},
   {name: 'Kazakhstan', code: 'KZ'},
   {name: 'Kenya', code: 'KE'},
   {name: 'Kiribati', code: 'KI'},
   {name: 'Korea, Democratic People\'S Republic of', code: 'KP'},
   {name: 'Korea, Republic of', code: 'KR'},
   {name: 'Kuwait', code: 'KW'},
   {name: 'Kyrgyzstan', code: 'KG'},
   {name: 'Lao People\'S Democratic Republic', code: 'LA'},
   {name: 'Latvia', code: 'LV'},
   {name: 'Lebanon', code: 'LB'},
   {name: 'Lesotho', code: 'LS'},
   {name: 'Liberia', code: 'LR'},
   {name: 'Libyan Arab Jamahiriya', code: 'LY'},
   {name: 'Liechtenstein', code: 'LI'},
   {name: 'Lithuania', code: 'LT'},
   {name: 'Luxembourg', code: 'LU'},
   {name: 'Macao', code: 'MO'},
   {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
   {name: 'Madagascar', code: 'MG'},
   {name: 'Malawi', code: 'MW'},
   {name: 'Malaysia', code: 'MY'},
   {name: 'Maldives', code: 'MV'},
   {name: 'Mali', code: 'ML'},
   {name: 'Malta', code: 'MT'},
   {name: 'Marshall Islands', code: 'MH'},
   {name: 'Martinique', code: 'MQ'},
   {name: 'Mauritania', code: 'MR'},
   {name: 'Mauritius', code: 'MU'},
   {name: 'Mayotte', code: 'YT'},
   {name: 'Mexico', code: 'MX'},
   {name: 'Micronesia, Federated States of', code: 'FM'},
   {name: 'Moldova, Republic of', code: 'MD'},
   {name: 'Monaco', code: 'MC'},
   {name: 'Mongolia', code: 'MN'},
   {name: 'Montserrat', code: 'MS'},
   {name: 'Morocco', code: 'MA'},
   {name: 'Mozambique', code: 'MZ'},
   {name: 'Myanmar', code: 'MM'},
   {name: 'Namibia', code: 'NA'},
   {name: 'Nauru', code: 'NR'},
   {name: 'Nepal', code: 'NP'},
   {name: 'Netherlands', code: 'NL'},
   {name: 'Netherlands Antilles', code: 'AN'},
   {name: 'New Caledonia', code: 'NC'},
   {name: 'New Zealand', code: 'NZ'},
   {name: 'Nicaragua', code: 'NI'},
   {name: 'Niger', code: 'NE'},
   {name: 'Nigeria', code: 'NG'},
   {name: 'Niue', code: 'NU'},
   {name: 'Norfolk Island', code: 'NF'},
   {name: 'Northern Mariana Islands', code: 'MP'},
   {name: 'Norway', code: 'NO'},
   {name: 'Oman', code: 'OM'},
   {name: 'Pakistan', code: 'PK'},
   {name: 'Palau', code: 'PW'},
   {name: 'Palestinian Territory, Occupied', code: 'PS'},
   {name: 'Panama', code: 'PA'},
   {name: 'Papua New Guinea', code: 'PG'},
   {name: 'Paraguay', code: 'PY'},
   {name: 'Peru', code: 'PE'},
   {name: 'Philippines', code: 'PH'},
   {name: 'Pitcairn', code: 'PN'},
   {name: 'Poland', code: 'PL'},
   {name: 'Portugal', code: 'PT'},
   {name: 'Puerto Rico', code: 'PR'},
   {name: 'Qatar', code: 'QA'},
   {name: 'Reunion', code: 'RE'},
   {name: 'Romania', code: 'RO'},
   {name: 'Russian Federation', code: 'RU'},
   {name: 'RWANDA', code: 'RW'},
   {name: 'Saint Helena', code: 'SH'},
   {name: 'Saint Kitts and Nevis', code: 'KN'},
   {name: 'Saint Lucia', code: 'LC'},
   {name: 'Saint Pierre and Miquelon', code: 'PM'},
   {name: 'Saint Vincent and the Grenadines', code: 'VC'},
   {name: 'Samoa', code: 'WS'},
   {name: 'San Marino', code: 'SM'},
   {name: 'Sao Tome and Principe', code: 'ST'},
   {name: 'Saudi Arabia', code: 'SA'},
   {name: 'Senegal', code: 'SN'},
   {name: 'Serbia and Montenegro', code: 'CS'},
   {name: 'Seychelles', code: 'SC'},
   {name: 'Sierra Leone', code: 'SL'},
   {name: 'Singapore', code: 'SG'},
   {name: 'Slovakia', code: 'SK'},
   {name: 'Slovenia', code: 'SI'},
   {name: 'Solomon Islands', code: 'SB'},
   {name: 'Somalia', code: 'SO'},
   {name: 'South Africa', code: 'ZA'},
   {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
   {name: 'Spain', code: 'ES'},
   {name: 'Sri Lanka', code: 'LK'},
   {name: 'Sudan', code: 'SD'},
   {name: 'Suriname', code: 'SR'},
   {name: 'Svalbard and Jan Mayen', code: 'SJ'},
   {name: 'Swaziland', code: 'SZ'},
   {name: 'Sweden', code: 'SE'},
   {name: 'Switzerland', code: 'CH'},
   {name: 'Syrian Arab Republic', code: 'SY'},
   {name: 'Taiwan, Province of China', code: 'TW'},
   {name: 'Tajikistan', code: 'TJ'},
   {name: 'Tanzania, United Republic of', code: 'TZ'},
   {name: 'Thailand', code: 'TH'},
   {name: 'Timor-Leste', code: 'TL'},
   {name: 'Togo', code: 'TG'},
   {name: 'Tokelau', code: 'TK'},
   {name: 'Tonga', code: 'TO'},
   {name: 'Trinidad and Tobago', code: 'TT'},
   {name: 'Tunisia', code: 'TN'},
   {name: 'Turkey', code: 'TR'},
   {name: 'Turkmenistan', code: 'TM'},
   {name: 'Turks and Caicos Islands', code: 'TC'},
   {name: 'Tuvalu', code: 'TV'},
   {name: 'Uganda', code: 'UG'},
   {name: 'Ukraine', code: 'UA'},
   {name: 'United Arab Emirates', code: 'AE'},
   {name: 'United Kingdom', code: 'GB'},
   {name: 'United States', code: 'US'},
   {name: 'United States Minor Outlying Islands', code: 'UM'},
   {name: 'Uruguay', code: 'UY'},
   {name: 'Uzbekistan', code: 'UZ'},
   {name: 'Vanuatu', code: 'VU'},
   {name: 'Venezuela', code: 'VE'},
   {name: 'Viet Nam', code: 'VN'},
   {name: 'Virgin Islands, British', code: 'VG'},
   {name: 'Virgin Islands, U.S.', code: 'VI'},
   {name: 'Wallis and Futuna', code: 'WF'},
   {name: 'Western Sahara', code: 'EH'},
   {name: 'Yemen', code: 'YE'},
   {name: 'Zambia', code: 'ZM'},
   {name: 'Zimbabwe', code: 'ZW'}
 ];
 const Zoom = cssTransition({
enter: 'zoomIn',
exit: 'zoomOut',
duration: 750,
});
class Profile extends React.Component{
  state={response_data:[],isLoading:false,startDate:new Date}
  componentDidMount()
  {
    this.getData();
    $('#save_btn_up').hide();
  }
  getData=async ()=>{
   var formData=new FormData();
   formData.append('uid',localStorage.getItem('userid'));
   formData.append('countrycode',COUNTRYCODE);
   formData.append('partnerid',PARTNER_ID);
   formData.append('tag','view');
   let response= await axios.post(USER_PROFILE,formData,{headers:{'token':localStorage.getItem('token')}});
     if(response.status=='200')
     {
         var result=response.data;
         this.setState({response_data:result})
         if(result.DOB!='None')
         {
           this.setState({startDate:result.DOB})
         }
         setTimeout(()=>this.setState({isLoading:true}),1000)
     }
     else {
         this.setState({isLoading:true})
       }

     }
     onInputChange=(value,tag)=>{
       var orig_data=this.state.response_data;
       orig_data[tag]=value;
       this.setState({response_data:orig_data})
     }
       handleChange(value) {
        this.setState({startDate:value})
        }
     profileUpdate=(e)=>{
       e.preventDefault();
       var fname=e.target.fname.value.trim();
       var lname=e.target.lname.value.trim();
       // var dob=this.state.startDate.toLocaleDateString().split('/');
       // var dobarray=[]
       // dobarray.push(dob[2]);
       // dobarray.push(dob[0])
       // dobarray.push(dob[1])
       // var DOB=dobarray.join('/')
       var gender=e.target.gender.value.trim();
       var country=e.target.country.value;
       $('#profileUpdate').prop('disabled',true);
       if(fname=='' || lname=="" || gender=="" || country=="")
       {
         toast("Fields can't be empty",{ transition: Zoom,});
         $('#profileUpdate').prop('disabled',false);
         return false;
       }
       var formData=new FormData();
       formData.append('uid',localStorage.getItem('userid'));
       formData.append('countrycode',COUNTRYCODE);
       formData.append('partnerid',PARTNER_ID);
       formData.append('tag','insert');
       formData.append('fname',fname);
       formData.append('lname',lname);
       // formData.append('DOB',DOB);
      // formData.append('country',country);
       formData.append('gender',gender);
       axios.post(USER_PROFILE,formData,{headers:{'token':localStorage.getItem('token')}}).then((response)=>{
         if(response.status==200)
         {
           $('#profileUpdate').prop('disabled',false);
           toast(response.data.Message,{ transition: Zoom,});
         }
       }).catch((error)=>{

       })
     }
     uploadImage=()=>{
      //var image = document.querySelector('#fileuploader_url').files[0];
      var file=document.querySelector('#uploadfile').files[0];
      var reader  = new FileReader();
  reader.addEventListener("load", function () {
   $('#thumbnail_url').attr('src', reader.result);
   $('#save_btn_up').show();
  }, false);
       if (file) {
    reader.readAsDataURL(file);
  }
     }
     uploadImageForm=(e)=>{
       e.preventDefault();
       $('#save_btn_up').hide();
         var image = document.querySelector('#uploadfile').files[0];
         var formData=new FormData();
         formData.append('uid',localStorage.getItem('userid'));
         formData.append('countrycode',COUNTRYCODE);
         formData.append('partnerid',PARTNER_ID);
         formData.append('data',image);
         axios.post(UPLOAD_PROFILE,formData,{headers:{'token':localStorage.getItem('token')}}).then((response)=>{
           if(response.status==200)
           {
             toast(response.data.Message,{ transition: Zoom,});
           }
           else {
             $('#save_btn_up').show();
           }
         }).catch((error)=>{

         })
     }
  render(){
    const {response_data}=this.state;
    const territory_list=countryList.map((result,key)=>{
      return(<option value={result.name} selected={result.name==response_data.country?true:false} disabled>{result.name}</option>)
    })
    if(this.state.isLoading)
    {
    return(<div class="inner_wrap">
      <div class="container">

        <div class="profile_page">
              <div class="row">
                <div class="col-sm-4 col-md-3">
                  <div class="box l">
                    <div class="prof_box">
                    <form onSubmit={this.uploadImageForm} enctype="multipart/form-data" id="uploadForm">
                    <div class="img">
                      <input type="file" id="uploadfile"  type="file" onChange={()=>this.uploadImage()} class="fileuploader"  style={{display:'none'}}  accept="image/*" name="thumbnail_url"/>
                      <label for="uploadfile">
                        <i class="fa fa-pencil"></i>
                        <img src={response_data.image_url} alt=""id="thumbnail_url" />
                        <span>Upload Picture</span>
                        <button type="submit" id="save_btn_up" class="btn_cg" style={{display:'none'}} >Save</button>
                      </label>
                    </div>
                    </form >
                      {/*<input type='file' id="imgInp" />
                        <img id="blah" src="#" alt="your image" />*/}
                        {/*<form onSubmit={this.profileUpdate} enctype="multipart/form-data">
                        <div>
                        <input type="file" class="fileuploader" id="fileuploader_url" style={{display:'none'}}  accept="image/*" name="thumbnail_url"/>
                        <center>
                          <button class="fileuploader-btn edit_btn" type="button"><img src={response_data.image_url} id="thumbnail_url" style={{width:'100px',height:'90px',borderRadius:'50%'}}/><i class="fa fa-edit edit_icon"/></button>
                        </center>
                        </div>
                        </form>*/}
                    </div>
                  </div>
                </div>
                <div class="col-sm-8 col-md-9">
                  <div class="box r">
                    <div class="prof_cont">
                      <h2>Profile</h2>
                      <form onSubmit={this.profileUpdate}>
                      <div class="fields">
                        <div class="row">
                          <div class="field col-md-6">
                            <div class="inputbox">
                              <label>First Name</label>
                              <input type="text" placeholder="First name" name="fname" Value={response_data.fname} onChange={(e)=>{this.onInputChange(e.target.value,'fname')}}/>
                            </div>
                          </div>
                          <div class="field col-md-6">
                            <div class="inputbox">
                              <label>Last Name</label>
                              <input type="text" placeholder="Last name" name="lname" Value={response_data.lname} onChange={(e)=>{this.onInputChange(e.target.value,'lname')}}/>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="field col-md-6">
                            <div class="inputbox">
                              <label>Email Address</label>
                              <input type="email" placeholder="Enter email" name="email" Value={response_data.useremail} onChange={(e)=>{this.onInputChange(e.target.value,'useremail')}} disabled/>
                            </div>
                          </div>
                          <div class="field col-md-6">
                            <div class="inputbox">
                              <label>Phone Number</label>
                              <input type="text" placeholder="Enter number" name="mobile" Value={response_data.mobile} disabled/>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="field col-md-6">
                            <div class="inputbox">
                              <label>Gender</label>
                              <select name="gender">
                                <option value="Male" selected={response_data.gender=='Male'?true:false}>Male</option>
                                <option value="Female" selected={response_data.gender=='Female'?true:false}>Female</option>
                              </select>
                            </div>
                          </div>
                          <div class="field col-md-6">
                            <div class="inputbox">
                              <label>Date of Birth</label>
                      {/*<DatePicker
                   selected={this.state.startDate}
                   onChange={(value, e) => this.handleChange(value, e)}
                   dateFormat="MM-DD-YYYY"
                   showYearDropdown={true}
                   showMonthDropdown={true}
                 />*/}
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="field col-md-6">
                            <div class="inputbox">
                              <label>Country</label>
                              <select name="country">
                              {territory_list}
                              </select>
                            </div>
                          </div>
                          <div class="field col-md-6">
                            <div class="inputbox">
                              <label>State</label>
                              <select disabled>
                                <option>Punjab</option>
                                <option>Gujarat</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="buttons">
                          <button type="submit" class="btn float-right btn-success" id="profileUpdate">Save</button>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                      <div class="clearfix"></div>
                      </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
              </div></div>)
            }
            else {
              return(<Loader/>)
            }
  }
}
export default Authenticator(Profile);
