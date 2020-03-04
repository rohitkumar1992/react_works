import React from 'react';
import Loader from 'react-loader-spinner'
import ContentLoader from 'react-content-loader'
const Loading=()=>{
  return(<ContentLoader>
    <rect x="20" y="10" rx="5" ry="5" width="65" height="55" />
    <rect x="90" y="10" rx="5" ry="5" width="65" height="55" />
    <rect x="160" y="10" rx="5" ry="5" width="65" height="55" />
    <rect x="230" y="10" rx="5" ry="5" width="65" height="55" />
    <rect x="300" y="10" rx="5" ry="5" width="65" height="55" />
    <rect x="20" y="70" rx="5" ry="5" width="65" height="55" />
    <rect x="90" y="70" rx="5" ry="5" width="65" height="55" />
    <rect x="160" y="70" rx="5" ry="5" width="65" height="55" />
    <rect x="230" y="70" rx="5" ry="5" width="65" height="55" />
    <rect x="300" y="70" rx="5" ry="5" width="65" height="55" />
  </ContentLoader>)
}
export default Loading
