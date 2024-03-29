import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  HashRouter,Link
} from "react-router-dom";
import axios from 'axios';
import {VIDEO_DESCRIPTION} from '../../../../url';
import $ from 'jquery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './video_description.css';
import LanguageList from '../../language';
import  Genre from './genreList'
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

class VideoDescription extends Component {
  state={
    video_id:'',
    success:false,
    language:'',
    genre:'',
    license:'',
    territory:'',
    description:'',
    category:''
  }
  componentDidMount()
  {
    this.setState({video_id:this.props.match.params.id});
    $(function() {
    $('input[name="price"]').on('click', function() {
        if ($(this).val() == 'Premium') {
            $('#textboxes').show();
        }
        else {
            $('#textboxes').hide();
        }
    });
});
  }
  formSubmitHandler(e)
  {
    e.preventDefault();
    var event=e.target;
    // var price_desc=$('input[name=price]:checked').val();
    var title=event.form_title.value;
    var tag=event.form_tagname.value;
    var cast=event.form_cast.value;
    var director=event.form_director.value;
    var producer=event.form_producer.value;
    var language,genre,license_rights,territory_rights,description;
    language=event.form_language.value;
    genre=event.form_genre.value;
    license_rights=event.form_license.value;
    territory_rights=event.form_Territory.value;
    description=event.form_description.value;
    var data
    // if(price_desc=="Premium")
    // {
    // var price=event.form_price.value;
    //  data={title:title,tag:tag,cast:cast,director:director,producer:producer,language:language,genre:genre,description:description,territory_right:territory_rights,license_right:license_rights,video_id:this.state.video_id,premium:'1',price:price}
    // }
    // else {
    data={title:title,tag:tag,cast:cast,director:director,producer:producer,language:language,genre:genre,description:description,territory_right:territory_rights,license_right:license_rights,video_id:this.state.video_id,premium:'0'}
    //}

    axios.post(VIDEO_DESCRIPTION,
      data
  )
  .then(response=>{
    if(response.data.success)
    {
      $('#form_reset').hide();
      $('#form_save').hide();
      this.setState({success:true});
      toast("Adding To Queue")
      setTimeout(()=>this.props.history.push('/dashboard/seller/approvalrequest'),2000);
    }
  })
  .catch(function (error) {
    console.log(error);
});
  }
  formReset() {
  document.getElementById("contact-form").reset();
}
  render() {
    const territory_list=countryList.map((result,key)=>{
      return(<option value={result.name}>{result.name}</option>)
    })
    return (
      <body>
          <div class="row">
          <div class="col-lg-10 offset-lg-2 offset-md-2">
            <div class="container-scroller">
            <ToastContainer autoClose={2000}/>
              <div style={{backgroundColor:'white',marginTop:'80px'}}>

          <form id="contact-form" style={{padding:'26px'}} onSubmit={this.formSubmitHandler.bind(this)}>
              <div class="messages"></div>
              <h1>Video Details</h1>
              <div class="fields">
                <h2>Meta Info</h2>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6 text-left">
                    <div class="form-group input_4">
                      <label for="form_title">Title *</label>
                      <input id="form_title" type="text" name="title" class="form-control"  placeholder="Please enter your title *" required="required" data-error="Firstname is required."/>
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group input_4">
                      <label for="form_cast">Cast *</label>
                      <input id="form_cast" type="text" name="cast" class="form-control"   placeholder="Please enter your cast *" required="required" data-error="Valid email is required."/>
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group input_4">
                      <label for="form_director">Director *</label>
                      <input id="form_director" type="text" name="director" class="form-control"   placeholder="Please enter your director *" required="required" data-error="Valid email is required."/>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 text-left">
                    <div class="form-group input_4">
                      <label for="form_tagname">Tags *</label>
                      <input id="form_tagname" type="text" name="tagname" class="form-control"  placeholder="Please enter your tags *" required="required" data-error="Lastname is required."/>
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group input_4">
                      <label for="form_producer">Producer *</label>
                      <input id="form_producer" type="text" name="producer" class="form-control"   placeholder="Please enter your producer *" required="required" data-error="Valid email is required."/>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="fields">
                <h2>Video Category</h2>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6 text-left">
                    <div class="form-group input_4">
                      <label for="form_language">Language</label>
                      <select id="form_language" name="language" class="form-control custom-select" onChange={(e)=>this.setState({language:e.target.value})} required="required" data-error="Please specify your need.">
                      <option selected disabled>Please Select</option>
                      <LanguageList/>
                      </select>
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group input_4">
                      <label for="form_genre">Genre</label>
                      <select id="form_genre" name="genre" class="form-control custom-select" onChange={(e)=>this.setState({genre:e.target.value})} required="required" data-error="Please specify your need.">
                          <option selected disabled>Please Select</option>
                          {this.state.category!='' && <Genre catName={this.state.category}/>}
                      </select>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 text-left">
                    <div class="form-group input_4">
                      <label for="categories"> Categories</label>
                      <select id="categories" name="categories" class="form-control custom-select" onChange={(e)=>this.setState({category:e.target.value})}  required="required">
                        <option selected disabled>Please Select</option>
                          <option value="movie">Movie</option>
                          <option value="shortfilm">Short Film</option>
                          <option value="webseries">Web-Series</option>
                          <option value="tvseries">TV Series</option>
                          <option value="documentary">Documentary</option>
                          <option value="animation">Animation</option>

                          {/* <option value="animal_wildlife_pet">Animal/Wildlife/Pet</option><option value="Lifestyle">Lifestyle</option>
                          <option value="Cooking">Cooking</option>
                          <option value="Travel">Travel</option>
                          <option value="Devotional/Religious/Spiritual">Devotional/Religious/Spiritual</option>
                          <option value="Sports">Sports</option>
                          <option value="Science/Technology">Science/Technology</option>*/}
                      </select>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fields">
                <h2>License Agreement</h2>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6 text-left">
                    <div class="form-group input_4">
                      <label for="form_license">License Right Available</label>
                      <select id="form_license" name="license" class="form-control custom-select" onChange={(e)=>this.setState({license:e.target.value})} required="required" data-error="Please specify your need.">
                          <option selected disabled>Please Select</option>
                          <option value="OTT">OTT</option>
                          <option value="PLANET">Planet</option>
                      </select>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 text-left">
                    <div class="form-group input_4">
                    <div class="form-group input_4">
                      <label for="form_Territory">Territory Rights Availabe</label>
                      <select id="form_Territory" name="Territory" class="form-control custom-select" onChange={(e)=>this.setState({territory:e.target.value})} required="required"  data-error="Please specify your need.">
                      <option selected disabled>Please Select</option>
                      {territory_list}
                      </select>
                      <div class="help-block with-errors"></div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fields last">
                <h2>Video Description</h2>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 text-left">
                    <div class="form-group input_4">
                      <label for="form_description">Description *</label>
                      <textarea id="form_description" name="description" class="form-control" onChange={(e)=>this.setState({description:e.target.value})} placeholder="Enter Description *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="buttons">
                <input type="submit" class="btn btn-success btn-send "  style={{padding:'10px',}} id="form_save" value="Save"/>
                <input type="button" class=" btn btn-danger btn-send " value="Reset" id="form_reset" style={{padding:'10px'}} onClick={this.formReset.bind(this)}/>
              </div>
              <div class="controls">
                  {/*<div class="row">
                      <div class="col-md-6">
                          <div class="form-group video_descript_input">

                          </div>
                      </div>
                      <div class="col-md-6 ">
                          <div class="form-group video_descript_input">

                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-6">
                          <div class="form-group video_descript_input">

                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="form-group video_descript_input">

                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-3">
                          <div class="form-group video_descript_input">

                          </div>
                      </div>
                      <div class="col-md-3">
                          <div class="form-group video_descript_input">

                          </div>
                      </div>
                      <div class="col-md-3">
                          <div class="form-group video_descript_input">

                          </div>
                      </div>
                      <div class="col-md-3">
                          <div class="form-group video_descript_input">

                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-6">
                          <div class="form-group video_descript_input">

                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="form-group video_descript_input">

                          </div>
                      </div>
                  </div>*/}
                  <div class="row">
                      <div class="col-md-6 video_descript_input">
                      <div class="form-group">
                      {/*<div class="row">

                           <div class="col-lg-1 col-md-1 col-sm-1">
                         <input type="radio" name="price" value="Free" />
                        </div>
                      <div class="col-lg-2 col-md-2  pre_me col-sm-3">
                           Free
                           </div>
                           <div class="col-lg-3  col-md-3 col-sm-3 pre_me text-right">
                            Premium
                              </div>
                      <div class="col-lg-1 col-md-1 col-sm-1">
                      <input type="radio" name="price" value="Premium" />
                         </div>
                          </div>
                      <div id="textboxes" style={{display:"none"}}>
                      <div class="form-group">
                      <label for="form_price">Price *</label>
                      <input id="form_price" type="text" name="form_price" class="form-control"   placeholder="Please enter your price*"  data-error="Valid Price is required."/>
                      </div>
                      </div>*/}
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-12">
                          <div class="form-group video_descript_input">

                          </div>
                      </div>

                      <div class="col-md-6 mt-2">

                      </div>
                      <div class="col-md-6 mt-2 ">

                      </div>
                  </div>
              </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</body>
)
}
}
export default VideoDescription;
