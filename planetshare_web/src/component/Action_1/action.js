import React, { Component } from 'react';
import $ from 'jquery';
 // import './action.css'
class Action extends Component {
  componentDidMount()
  {
    var el = document.querySelector(`.more_${this.props.video_id}`);
var btn = el.querySelector(`.more-btn_${this.props.video_id}`);
var menu = el.querySelector(`.more-menu_${this.props.video_id}`);
var visible = false;
btn.addEventListener('click', ()=>this.showMenu(el,btn,menu,visible), false);
}
showMenu(el,btn,menu,visible) {
   if (!visible) {
       visible = true;
       el.classList.add(`show-more-menu`);
       menu.setAttribute('aria-hidden', false);
       document.addEventListener('mousedown', ()=>this.hideMenu(el,btn,menu,visible), false);
   }
}

hideMenu(el,btn,menu,visible) {
   if (visible) {
       visible = false;
       el.classList.remove(`show-more-menu`);
       menu.setAttribute('aria-hidden', true);
       document.removeEventListener('mousedown', ()=>this.hideMenu(el,btn,menu,visible));
   }
}
click(user_id)
{
  alert(user_id)
}
render()
{
      console.log(this.props.status);
return (
<div class="container-dot">
    <div className={`more_${this.props.video_id}`} >
        <button id="more-btn" class={`more-btn_${this.props.video_id}`}>
            <span class="more-dot"></span>
            <span class="more-dot"></span>
            <span class="more-dot"></span>
        </button>
        <div class={`more-menu_${this.props.video_id}`} id="more-menu">
            <div class="more-menu-caret">
                <div class="more-menu-caret-outer"></div>
                <div class="more-menu-caret-inner"></div>
            </div>
              {this.props.tag=="mylist" && <p>
            {this.props.status=='1' && <ul class="more-menu-items" tabindex="-1" role="menu" aria-labelledby="more-btn" aria-hidden="true">
                <li class="more-menu-item" role="presentation" >
                    <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.status_change('0',this.props.video_id)}>Inactive</button>
                </li>
            </ul>}
            {this.props.status=='0' && <ul class="more-menu-items" tabindex="-1" role="menu" aria-labelledby="more-btn" aria-hidden="true">
                <li class="more-menu-item" role="presentation">
                    <button type="button" class="more-menu-btn" role="menuitem" onClick={()=>this.props.status_change('1',this.props.video_id)}>Active</button>
                </li>
            </ul>}</p>
          }
        </div>
    </div>
</div>
)
}
}
export default Action;
