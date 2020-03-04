import React from 'react'

class Profile extends React.Component{

openNav=()=> {
document.getElementById("myNav_sell").style.height = "100%";
}

closeNav=()=> {
document.getElementById("myNav_sell").style.height = "0%";
}

state={isLogin:true,isSignup:false}
  render()
  {
    return(
      <div class="inner_wrap">
        <div class="container">
          <div class="profile_page">
            <div class="row">
              <div class="col-sm-3">
                <div class="box l">
                  <div class="prof_box">
                    <div class="img">
                      <i class="fa fa-pencil"></i>
                      <img src="images/face8.jpg" alt="" />
                      <span>Upload Picture</span>
                    </div>
                    <h4>Your Details</h4>
                    <ul class="links">
                      <li><a href="javascript:;">View Profile</a></li>
                      <li><a href="javascript:;">Update Profile</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-9">
                <div class="box r">
                  <div class="prof_cont">
                    <h2>Profile</h2>
                    <form action="javascript:;">
                      <div class="fields">
                        <div class="row">
                          <div class="field col-md-6">
                            <div class="inputbox">
                              <label>First Name</label>
                              <input type="text" placeholder="First name" />
                            </div>
                          </div>
                          <div class="field col-md-6">
                            <div class="inputbox">
                              <label>Last Name</label>
                              <input type="text" placeholder="Last name" />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="field col-md-6">
                            <div class="inputbox">
                              <label>Email Address</label>
                              <input type="email" placeholder="Enter email" />
                            </div>
                          </div>
                          <div class="field col-md-6">
                            <div class="inputbox">
                              <label>Phone Number</label>
                              <input type="text" placeholder="Enter number" />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="field col-md-6">
                            <div class="inputbox">
                              <label>Gender</label>
                              <select>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                            </div>
                          </div>
                          <div class="field col-md-6">
                            <div class="inputbox">
                              <label>Status</label>
                              <select>
                                <option>Single</option>
                                <option>Married</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="field col-md-6">
                            <div class="inputbox">
                              <label>Date of Birth</label>
                              <input type="text" placeholder="Date of birth" />
                            </div>
                          </div>
                          <div class="field col-md-6">
                            <div class="inputbox">
                              <label>Country</label>
                              <select>
                                <option>India</option>
                                <option>Canada</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="field col-md-6">
                            <div class="inputbox">
                              <label>State</label>
                              <select>
                                <option>Punjab</option>
                                <option>Gujarat</option>
                              </select>
                            </div>
                          </div>
                          <div class="field col-md-6">
                            <div class="inputbox">
                              <label>City</label>
                              <select>
                                <option>Ludhiyana</option>
                                <option>Amritsar</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="field col-md-12">
                            <div class="inputbox">
                              <label>Discription</label>
                              <textarea placeholder="Enter Discription"></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="buttons">
                          <button type="submit" class="btn float-right btn-success" onClick={()=>this.openNav()}>Submit</button>
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
        </div>
        <div id="myNav_sell" class="overlay_sell">
          <a href="javascript:void(0)" class="closebtn_sell" onClick={()=>this.closeNav()}>&times;</a>
          <div class="avail_serv_list">
              <ul class="row">
                <li class="col-md-3 col-sm-4">
                  <div class="box">
                    <div class="img">
                      <img src="images/face8.jpg" alt="" />
                      <span class="name">Roman</span>
                    </div>
                    <p>Logout</p>
                  </div>
                </li>
                <li class="col-md-3 col-sm-4">
                  <div class="box">
                    <div class="img">
                      <img src="images/face8.jpg" alt="" />
                      <span class="name">Roman</span>
                    </div>
                    <p>Logout</p>
                  </div>
                </li>
                <li class="col-md-3 col-sm-4">
                  <div class="box">
                    <div class="img">
                      <img src="images/face8.jpg" alt="" />
                      <span class="name">Roman</span>
                    </div>
                    <p>Logout</p>
                  </div>
                </li>
                <li class="col-md-3 col-sm-4">
                  <div class="box">
                    <div class="img">
                      <img src="images/face8.jpg" alt="" />
                      <span class="name">Roman</span>
                    </div>
                    <p>Logout</p>
                  </div>
                </li>
              </ul>
          </div>
        </div>
      </div>
      )
  }
}
export default Profile;
