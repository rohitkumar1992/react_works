import React from 'react';
import {Link} from 'react-router-dom';
function BreadCrumb(props)
{
  return(
    <div class="content_header">
      <h2>{props.name}</h2>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to="/" ><i class="fa fa-home" aria-hidden="true"></i></Link></li>
          <li class="breadcrumb-item active" aria-current="page">{props.name}</li>
        </ol>
      </nav>
    </div>
  );
}
export default BreadCrumb;
