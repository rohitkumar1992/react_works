import React, { Component } from 'react';
import './upload.css';
class Upload extends Component {
  render()
  {
    return(
      <body class="has-animations">
      <nav class="navbar navbar-inverse navbar-expand-md navbar-light fixed-top bg-light text-muted" id="banner" style={{boxShadow:"0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)"}}>
         <div class="container">
            <a class="navbar-brand" href="#" class="img-responsive " style={{width:"14%"}}><img src="img/login-logo.png"  /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
               <ul class="nav text-muted ">
                  <li class="nav-item">
                     <a class="nav-link text-muted" href="#">About us</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link text-muted" href="#">Services</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link text-muted" href="#">Features</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link text-muted" href="#">Contact</a>
                  </li>
                  <li class="nav-item menu-search">
                     <a class="nav-link text-muted" href="#">Search</a>
                  </li>
                  <li class="nav-item menu-search">
                     <a class="nav-link text-muted" href="#"><i class="fa fa-shopping-cart"></i></a>
                  </li>
               </ul>
               <div class="menu-search-container">
                  <div class="menu-search-input">
                     <form action="">
                        <a href="#">  Search     </a>
                        <input class="menu-search-input" type="text" aria-label="Search " placeholder="" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" />
                     </form>
                  </div>
                  <a class="menu-search-close" href="#">
                  <i class="fa fa-close" aria-hidden="true"></i>
                  </a>
                  <div class="search-sub-menu">
                     <h3>Quick search</h3>
                     <ul>
                        <li><a href="#">Quick search 1</a></li>
                        <li><a href="#">Quick search 2</a></li>
                        <li><a href="#">Quick search 3</a></li>
                        <li><a href="#">Quick search 4</a></li>
                        <li><a href="#">Quick search 5</a></li>
                     </ul>
                  </div>
               </div>
                  <ul class="nav navbar-nav navbar-right ml-auto">
                                <li class="dropdown mr-8">
                                   <a href="#login" class="" id=" ">
                                   <button type="button" id="dropdownMenu1"  data-toggle="modal" data-target="#myModal" class="btn btn-white btn-login dropdown-toggle">Login  </button>
                                   </a>
                                </li>
                                <li class=" ">
                                   <a href="#signup" href="#"  >
                                   <button type="button" id="dropdownMenu1"  data-toggle="modal" data-target="#myModal" class="btn btn-white btn-login dropdown-toggle">  Sign Up </button></a>
                                </li>
                                </ul>

            </div>
         </div>
      </nav>
      <div class="mx-auto  pt-148">
         <div class="container-sm mb-64" >
            <div class="card mx-auto col-md-12 " style={{width:"100%",boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"}}>
               <div class="card-block">
                  <p class="card-title text-center text-dark pt-16">Upload Video</p>
                  <div class="body-upload-wrap mb-64 mt-64">
                     <div class="image-upload-wrap">
                        <input class="file-upload-input" type='file' onchange="readURL(this);" accept="image/*" />
                        <div class="col-2 col-md-2 mx-auto mb-16 mt-32" ><img class=" " src="img/80x80.png" alt="your image" /></div>
                        <div class="drag-text">
                           <p>Drag and drop a file here <br /> or</p>
                        </div>
                     </div>
                     <div class="col-12  ">
                        <div class="col-12 col-md-2 ">&nbsp;</div>
                        <div class="mx-auto col-10 col-sm-7  col-md-5 col-lg-5 mb-64 col-md-offset-2" >
                           <button class="file-upload-btn file-upload-btn1 mr-16" type="button" onclick="$('.file-upload-input').trigger( 'click' )">Upload</button>
                           <button class="file-upload-btn file-upload-btn2 mr-16" type="button" onclick="$('.file-upload-input').trigger( 'click' )">Archieve</button>
                           <button class="file-upload-btn file-upload-btn3" type="button" onclick="$('.file-upload-input').trigger( 'click' )">Planetshare</button>
                        </div>
                        <div class="col-12 col-md-2 ">&nbsp;</div>
                     </div>
                     <div class="file-upload-content">
                        <img class="file-upload-image" src="#" alt="your image" />
                        <div class="image-title-wrap">
                           <button type="button" onclick="removeUpload()" class="remove-image">Remove <span class="image-title">Uploaded Image</span></button>
                        </div>
                     </div>
                  </div>
                  <br />
                  <div class="col-md-12 d-flex ">
                     <div class="col-2 col-md-1" ><img class=" " src="img/40x40.png" alt="your image" /></div>
                     <div class="col-10 col-md-8 align-self-center">
                        <div class="progress-text text-sm">
                           <p>Drag and drop a file here  &nbsp; 1.5GB </p>
                        </div>
                        <div class="progress-text text-sm cross">   </div>
                        <div class="progress">
                           <div class="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">50%</div>
                        </div>
                        <div class="progress-text text-sm">
                           <p>50% done  </p>
                        </div>
                        <div class="progress-text text-sm  float-right">
                           <p class="speed-text">2MB/sec  </p>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-12 d-flex mb-32">
                     <div class="col-2 col-md-1"><img class=" " src="img/40x40.png" alt="your image" /></div>
                     <div class="col-10 col-md-8 align-self-center">
                        <div class="progress-text text-sm">
                           <p>Drag and drop a file here  &nbsp; 1.5GB </p>
                        </div>
                        <div class="progress-text text-sm cross">   </div>
                        <div class="progress">
                           <div class="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">50%</div>
                        </div>
                        <div class="progress-text text-sm">
                           <p>50% done  </p>
                        </div>
                        <div class="progress-text text-sm  float-right">
                           <p class="speed-text">2MB/sec  </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-12 d-flex bg-primary bg-primary1 pt-16 pb-16"></div>
         </div>
      </div>
      <div class="container mb-64" >
         <div class="row">
            <h5 class="pl-16 text-dark font-weight-normal text-large">Content Listing</h5>
            <table class="table table-borderless table-condensed table-hover text-dark">
               <thead>
                  <tr>
                     <th> </th>
                     <th>Title</th>
                     <th>Description</th>
                     <th>Cast</th>
                     <th>Direction</th>
                  </tr>
               </thead>
               <tbody>
                  <tr >
                     <td>
                        <div class="box-shadow banner-container">
                           <img src="img/bg.png"   class="img-responsive"  />
                           <div class="playbtn"> </div>
                        </div>
                     </td>
                     <td class="pt-16 pb-16">
                        <p class="pt-8 text-dark">Avengers: Endgame</p>
                     </td>
                     <td>
                         <p class="text-dark">Adrift in space with no food or water, Tony Stark sends a message to pepper</p>
                     </td>
                     <td>
                         <p class="text-dark">Brie Larson, Tom Holland, bradley Cooper</p>
                     </td>
                     <td>
                         <p class="text-dark">Anthony Ruso, Joy Russo</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <div class="box-shadow banner-container">
                           <img src="img/bg.png"   class="img-responsive"  />
                           <div class="playbtn"> </div>
                        </div>
                     </td>
                     <td>
                        <p class="pt-8 text-dark">Moe</p>
                     </td>
                     <td>
                         <p class="text-dark">Adrift in space with no food or water, Tony Stark sends a message to pepper</p>
                     </td>
                     <td>
                         <p class="text-dark">Brie Larson, Tom Holland, bradley Cooper</p>
                     </td>
                     <td>
                         <p class="text-dark">Anthony Ruso, Joy Russo</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <div class="box-shadow banner-container">
                           <img src="img/bg.png"   class="img-responsive"  />
                           <div class="playbtn"> </div>
                        </div>
                     </td>
                     <td>
                        <p class="pt-8  text-dark">Dooley</p>
                     </td>
                     <td>
                        <p class="text-dark">Adrift in space with no food or water, Tony Stark sends a message to pepper</p>
                     </td>
                     <td>
                         <p class="text-dark">Brie Larson, Tom Holland, bradley Cooper</p>
                     </td>
                     <td>
                         <p class="text-dark">Anthony Ruso, Joy Russo</p>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
         <footer class="  font-small mdb-color pt-148  shadow-top-bottom" id="footer">
            <div class="container text-center text-md-left">
               <div class="row text-center text-md-left mt-3 pb-3">
                  <div class="col-md-2 col-lg-2 col-xl-2">
                     <h6 class="mt-2">
                        <div class="col-7 col-sm-4 col-lg-12 col-xl-12 mx-auto"> <a class=" " href="#" class="img-responsive" style={{width:"100%"}}>
                           <img src="img/login-logo.png"  /></a>
                        </div>
                     </h6>
                  </div>
                  <hr class="w-100 clearfix d-md-none"/>
                  <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                     <h6 class="mb-2  text-dark">Features</h6>
                     <hr class="teal accent-3 mb-2 mt-0 d-inline-block mx-auto" style={{width:"60px"}}/>
                     <a href="#!">
                        <p class="mb-2 text-dark text-sm">Build </p>
                     </a>
                     <a href="#!">
                        <p class="mb-2 text-dark text-sm">Manage </p>
                     </a>
                     <a href="#!">
                        <p class="mb-2 text-dark text-sm">Scale </p>
                     </a>
                  </div>
                  <hr class="w-100 clearfix d-md-none"/>
                  <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                     <h6 class="mb-2  text-dark">Solutions</h6>
                     <hr class="teal accent-3 mb-2 mt-0 d-inline-block mx-auto" style={{width:"60px"}}/>
                     <a href="#!">
                        <p class="mb-2 text-dark text-sm">Broadcasting</p>
                     </a>
                     <a href="#!">
                        <p class="mb-2 text-dark text-sm">OTT</p>
                     </a>
                     <a href="#!">
                        <p class="mb-2 text-dark text-sm">Media Publishing</p>
                     </a>
                     <a href="#!">
                        <p class="mb-2 text-dark text-sm">Education</p>
                     </a>
                     <a href="#!">
                        <p class="mb-2 text-dark text-sm">Ecommerce</p>
                     </a>
                  </div>
                  <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                     <h6 class="mb-2  text-dark">Pricing</h6>
                     <hr class="teal accent-3 mb-2 mt-0 d-inline-block mx-auto" style={{width:"60px"}} />
                     <a href="#!">
                        <p class="mb-2 text-dark text-sm">Subscription Packages</p>
                     </a>
                     <a href="#!">
                        <p class="mb-2 text-dark text-sm">Estimate your Cost</p>
                     </a>
                     <a href="#!">
                        <p class="mb-2 text-dark text-sm"> Feature List</p>
                     </a>
                  </div>
                  <div class="col-md-1 col-lg-1 col-xl-1 mx-auto mt-3">
                     <a href="#!">
                        <p class="mb-2">Privacy</p>
                     </a>
                  </div>
                  <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                     <a href="#">
                        <p class="mb-2">Terms of Services</p>
                     </a>
                  </div>
               </div>
               <hr />
            </div>
         </footer>
   </body>
  );
  }
}
export default Upload;
