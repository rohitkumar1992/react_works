import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './service_url.css';
class Service_url_list extends Component
{
  render()
  {
    return (
      <div class="row  p-3 mb-2  shadow-top0">
            <div className={`  feature-extended ${this.props.css}`|| "feature-extended"} >
            <div className="col-12 col-md-6 col-lg-6 ">
              <div class="is-revealing" data-sr-id="12" style={{visibility:"visible", opacity: "1", transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s"}}>
                   <h3 class="mt-0 features-heading">{this.props.head}</h3>
                   {/*<h6 class="mt-0 ">Live streaming without limits, Reach your audience everywhere</h6>*/}
                   <p class="mb-0 features-para new_para ">{this.props.data}</p>
                   <div class="row">
                        <div class="col-sm-4 offset-md-3 mt-4 ">
                            <Link to={`web/${this.props.url}_service`}><button type="button" class="btn btn-warning  btn-banner btn-blue-features box-shadow">Get started</button></Link>
                         </div>
                   </div>
              </div>
             </div>
          <div class={this.props.css && "col-12 col-md-6 col-lg-6" || "col-12 col-md-6 col-lg-6 " }>
            <div class={this.props.css && "feature-extended-image is-revealing ml-7 " || "feature-extended-image is-revealing ml-7 wow bounceInRigh " } data-sr-id="9" style={{visibility:"visible", opacity: "1", transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s"}} >
              <img src={this.props.img_url} alt="Feature extended 02" style={{width:'80%'}} />
             </div>
           </div>
        </div>
    </div>
    )
  }
}
export default Service_url_list
