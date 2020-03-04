import React, { Component } from 'react';
import $ from 'jquery';
// import './action.css'
import {Link} from 'react-router-dom'
class Action extends Component {
  componentDidMount()
  {
    if(this.props.tag=="services_dubb" || this.props.tag=="services_transcode" || this.props.tag=="services_subtitle" || this.props.tag=="services_tagging")
    {
      if(this.props.status!=2)
      {
      var el = document.querySelector(`.more_${this.props.id}`);
      var btn = el.querySelector(`.more-btn_${this.props.id}`);
      var menu = el.querySelector(`.more-menu_${this.props.id}`);
      var visible = false;
      btn.addEventListener('click', ()=>this.showMenu(el,btn,visible,menu), false);
    }
    }
    else {
      var el = document.querySelector(`.more_${this.props.video_id}`);
  var btn = el.querySelector(`.more-btn_${this.props.video_id}`);
  var menu = el.querySelector(`.more-menu_${this.props.video_id}`);
  var visible = false;
  btn.addEventListener('click', ()=>this.showMenu(el,btn,visible,menu), false);
    }
}
showMenu(el,btn,visible,menu) {
   menu.setAttribute('aria-hidden', false);
   if (!visible) {
       visible = true;
       el.classList.add(`show-more-menu`);
       menu.setAttribute('aria-hidden', false);
       document.addEventListener('mousedown', ()=>setTimeout(()=>this.hideMenu(el,btn,visible,menu),1000), false);
   }
}

hideMenu(el,btn,visible,menu) {
   if (visible) {
       visible = false;
       el.classList.remove(`show-more-menu`);
       menu.setAttribute('aria-hidden', true);
       document.removeEventListener('mousedown', ()=>this.hideMenu(el,btn,visible,menu));
   }
}
click(user_id)
{
  alert(user_id)
}
render()
{
  if(this.props.tag=="services_dubb" || this.props.tag=="services_transcode" || this.props.tag=="services_subtitle" || this.props.tag=="services_tagging")
  {
    return (
    <div class="container">
    {this.props.status=='2' && <div className={`more more_${this.props.id}`} >
        <button id="more-btn" class={`more-btn more-btn_${this.props.id}`}>
            <span class="more-dot" ></span>
            <span class="more-dot"></span>
            <span class="more-dot"></span>
        </button></div>}
        {this.props.status!='2' && <div className={`more more_${this.props.id}`} >
            <button id="more-btn" class={`more-btn more-btn_${this.props.id}`}>
                <span class="more-dot" ></span>
                <span class="more-dot"></span>
                <span class="more-dot"></span>
            </button>
            <div class={`more-menu more-menu_${this.props.id}`} id="more-menu">
                <div class="more-menu-caret">
                    <div class="more-menu-caret-outer"></div>
                    <div class="more-menu-caret-inner"></div>
                </div>
                {this.props.status=='0' && <ul class="more-menu-items" tabindex="-1" role="menu" aria-labelledby="more-btn" aria-hidden="true">
                    <Link to="#"><li class="more-menu-item" role="presentation">
                        <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.status_change('1',this.props.id)}>In Progress</button>
                    </li></Link>
                    <li class="more-menu-item" role="presentation">
                        <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.status_change('2',this.props.id)}>Completed</button>
                    </li>
                </ul>}
                {this.props.status=='1' && <ul class="more-menu-items" tabindex="-1" role="menu" aria-labelledby="more-btn" aria-hidden="true">
                <Link to="#"><li class="more-menu-item" role="presentation">
                    <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.status_change('2',this.props.id)}>Completed</button>
                </li></Link>
                </ul>}

            </div>
        </div>}
    </div>
    )
  }
  else {
return (
<div class="container" >
    <div className={`more_${this.props.video_id}`} >
        <button id="more-btn" class={`more-btn_${this.props.video_id}`} >
            <span class="more-dot"></span>
            <span class="more-dot"></span>
            <span class="more-dot"></span>
        </button>
        <div class={`more-menu_${this.props.video_id}`} id="more-menu">
            <div class="more-menu-caret">
                <div class="more-menu-caret-outer"></div>
                <div class="more-menu-caret-inner"></div>
            </div>
            {this.props.status=='0' && <ul class="more-menu-items" tabindex="-1" role="menu" aria-labelledby="more-btn" aria-hidden="true">
                <li class="more-menu-item" role="presentation">
                    <button type="button" class="more-menu-btn " role="menuitem" onClick={()=>this.props.status_change('1',this.props.video_id,this.props.user_id)}>Active</button>
                </li>
            </ul>}
            {this.props.status=='1' && <ul class="more-menu-items" tabindex="-1" role="menu" aria-labelledby="more-btn" aria-hidden="true">
                <li class="more-menu-item" role="presentation" >
                    <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.status_change('0',this.props.video_id,this.props.user_id)}>Inactive</button>
                </li>
            </ul>}
            {this.props.status=='2' && <ul class="more-menu-items" tabindex="-1" role="menu" aria-labelledby="more-btn" aria-hidden="true">
                <li class="more-menu-item" role="presentation">
                    <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.status_change('1',this.props.video_id,this.props.user_id)}>Approved</button>
                </li>
                <li class="more-menu-item" role="presentation">
                    <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.status_change('3',this.props.video_id,this.props.user_id)}>Disapproved</button>
                </li>
            </ul>}
            {this.props.status=='3' && <ul class="more-menu-items" tabindex="-1" role="menu" aria-labelledby="more-btn" aria-hidden="true">
                <li class="more-menu-item" role="presentation">
                    <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.status_change('1',this.props.video_id,this.props.user_id)}>Approved</button>
                </li>
            </ul>}
        </div>
    </div>
</div>
)
}
}
}
export default Action;
