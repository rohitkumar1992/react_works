import React from 'react';
import Loader from 'react-loader-spinner'
import ContentLoader from 'react-content-loader'
const Loading=()=>{
  return(<ContentLoader>
    <rect x="20" y="10" rx="3" ry="3" width="45" height="10" />
    <rect x="370" y="10" rx="3" ry="3" width="20" height="10" />

    <rect x="20" y="25" rx="0" ry="0" width="85" height="55" />
    <rect x="110" y="25" rx="0" ry="0" width="85" height="55" />
    <rect x="200" y="25" rx="0" ry="0" width="85" height="55" />
    <rect x="290" y="25" rx="0" ry="0" width="85" height="55" />
    <rect x="380" y="25" rx="0" ry="0" width="85" height="55" />

    <rect x="20" y="85" rx="3" ry="3" width="45" height="10" />
    <rect x="370" y="85" rx="3" ry="3" width="20" height="10" />

    <rect x="20" y="100" rx="5" ry="5" width="85" height="55" />
    <rect x="110" y="100" rx="5" ry="5" width="85" height="55" />
    <rect x="200" y="100" rx="5" ry="5" width="85" height="55" />
    <rect x="290" y="100" rx="5" ry="5" width="85" height="55" />
    <rect x="380" y="100" rx="0" ry="0" width="85" height="55" />


  </ContentLoader>)
}
export default Loading
