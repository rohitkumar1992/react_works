import React, { Component } from 'react';
class ServiceList extends Component
{
  render()
  {
    return (
      <div class="feature ser_box">
          <div class="feature-inner" >
              <div class="feature-icon" style={{marginTop:'-35px'}}>
                  <img src={this.props.img_url} alt="Feature 01" />
                  <i class={this.props.icon_class}></i>
              </div>
              <h6 class="feature-title">{this.props.title}</h6>
              <p class="text-sm">{this.props.content}</p>
          </div>
      </div>
            );
    }
}

  export default ServiceList;
