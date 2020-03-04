import React, { Component } from 'react';
import $ from 'jquery';
import './action.css'
import {Link} from 'react-router-dom'
class Action extends Component {
  state={
    assign_service:'',
  }
  componentDidMount()
  {
    $('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
if(this.props.tag=="vendor_services")
{this.setState({assign_service:'dubbing'})}
document.onkeydown = function(evt) {
   evt = evt || window.event;
   if (evt.keyCode == 27) {
        document.getElementById("myNav").style.height = "0%";
   }
};
}
check(a,b,c,d)
{
  alert(b);
}
click(user_id)
{
  alert(user_id)
}

render()
{
  if(this.props.tag=="vendor_services" )
  {
    return (<div class="container123">
    <ul class="nav  navbar-right nav-dropdown ml-auto  dropdown-menu-center">
           <li class="dropdown justify-content-center">
             <a href="#" class="" data-toggle="dropdown"><button id="more-btn" class={`more-btn `}>
                   <span class="more-dot" ></span>
                   <span class="more-dot"></span>
                   <span class="more-dot"></span>
               </button></a>

             <ul class="dropdown-menu rounded"  style={{marginLeft:'-50px',marginTop:'-10px',zIndex:'50000',opacity:'1'}}>
             {this.props.status=='1' && <ul class="more-menu-items" tabindex="-1" role="menu" aria-labelledby="more-btn" aria-hidden="true">
                 {/*<Link to="#"><li class="more-menu-item" role="presentation">
                     <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.status_change('1',this.props.id)}>In Progress</button>
                 </li></Link>*/}

                 <Link to="#"><li class="more-menu-item" role="presentation">
                    <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.download_video(this.props.serviceid,this.props.file_name,this.props.job_type)}>Download</button>
                 </li></Link>
                 <li class="more-menu-item" role="presentation">
                     <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.status_change('3',this.props.id,this.props.serviceid,this.props.job_type)}>In Progress</button>
                 </li>
                 <li class="more-menu-item" role="presentation">
                     <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.openNav('4',this.props.id,this.props.serviceid,this.props.job_type,"Not Available")}>Rejected</button>
                 </li>
                 <li class="more-menu-item" role="presentation">
                     <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.status_change('2',this.props.id,this.props.serviceid,this.props.job_type)}>Completed</button>
                 </li>
             </ul>}


             {this.props.status=='2' && <ul class="more-menu-items" tabindex="-1" role="menu" aria-labelledby="more-btn" aria-hidden="true">
                 <Link to="#"><li class="more-menu-item" role="presentation">
                    <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.download_video(this.props.serviceid,this.props.file_name,this.props.job_type)}>Download</button>
                 </li></Link>
             </ul>}
             {this.props.status=='3' && <ul class="more-menu-items" tabindex="-1" role="menu" aria-labelledby="more-btn" aria-hidden="true">
             <Link to="#"><li class="more-menu-item" role="presentation">
                <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.download_video(this.props.serviceid,this.props.file_name,this.props.job_type)}>Download</button>
             </li></Link>
             <li class="more-menu-item" role="presentation">
                 <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.status_change('2',this.props.id,this.props.serviceid,this.props.job_type)}>Completed</button>
             </li>
             </ul>}
             {this.props.status=='4' && <ul class="more-menu-items" tabindex="-1" role="menu" aria-labelledby="more-btn" aria-hidden="true">
             <Link to="#"><li class="more-menu-item" role="presentation">
                <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.download_video(this.props.serviceid,this.props.file_name,this.props.job_type)}>Download</button>
             </li></Link>
             </ul>}
             </ul></li>
         </ul></div>)
           }

  else {
return (
  <div class="container123"><ul class="nav  navbar-right nav-dropdown ml-auto  dropdown-menu-center">
         <li class="dropdown justify-content-center">
           <a href="#" class="dropdown-toggle" data-toggle="dropdown"><button id="more-btn" class={`more-btn `}>
                 <span class="more-dot" ></span>
                 <span class="more-dot"></span>
                 <span class="more-dot"></span>
             </button></a>
           <ul class="dropdown-menu rounded"  style={{marginLeft:'-50px',marginTop:'-10px',zIndex:'50000',opacity:'1'}}>
           {this.props.status=='0' && <ul class="more-menu-items" tabindex="-1" role="menu" aria-labelledby="more-btn" aria-hidden="true">
               <Link to="#"><li class="more-menu-item" role="presentation">
                  <button type="button" class="more-menu-btn " role="menuitem" onClick={()=>this.props.status_change('1',this.props.video_id,this.props.user_id)}>Active</button>
               </li></Link>
           </ul>}
           {this.props.status=='1' && <ul class="more-menu-items" tabindex="-1" role="menu" aria-labelledby="more-btn" aria-hidden="true">
           <Link to="#"><li class="more-menu-item" role="presentation">
                <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.status_change('0',this.props.video_id,this.props.user_id)}>Inactive</button>
           </li></Link>
           </ul>}
           {this.props.status=='2' && <ul class="more-menu-items" tabindex="-1" role="menu" aria-labelledby="more-btn" aria-hidden="true">
           <Link to="#"><li class="more-menu-item" role="presentation">
                 <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.status_change('1',this.props.video_id,this.props.user_id)}>Approved</button>
           </li></Link>
           <Link to="#"><li class="more-menu-item" role="presentation">
                 <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.status_change('3',this.props.video_id,this.props.user_id)}>Disapproved</button>
           </li></Link>
           </ul>}
           {this.props.status=='3' && <ul class="more-menu-items" tabindex="-1" role="menu" aria-labelledby="more-btn" aria-hidden="true">
           <Link to="#"><li class="more-menu-item" role="presentation">
               <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.status_change('1',this.props.video_id,this.props.user_id)}>Approved</button>
           </li></Link>
           </ul>}

           </ul> </li>
       </ul></div>
)
}
}
}
export default Action;
