import React from 'react';
import Loader from 'react-loader-spinner'
import ContentLoader from 'react-content-loader'
const VideoLoading=()=>{
  return(<ContentLoader>
    <rect x="20" y="10" rx="0" ry="0" width="235" height="285" />

    <rect x="270" y="10" rx="0" ry="0" width="45" height="25" />
    <rect x="320" y="10" rx="0" ry="0" width="55" height="10" />
    <rect x="320" y="22" rx="0" ry="0" width="55" height="10" />

    <rect x="270" y="40" rx="0" ry="0" width="45" height="25" />
    <rect x="320" y="40" rx="0" ry="0" width="55" height="10" />
    <rect x="320" y="52" rx="0" ry="0" width="55" height="10" />

    <rect x="270" y="70" rx="0" ry="0" width="45" height="25" />
    <rect x="320" y="70" rx="0" ry="0" width="55" height="10" />
    <rect x="320" y="82" rx="0" ry="0" width="55" height="10" />

    <rect x="270" y="100" rx="0" ry="0" width="45" height="25" />
    <rect x="320" y="100" rx="0" ry="0" width="55" height="10" />
    <rect x="320" y="112" rx="0" ry="0" width="55" height="10" />

  </ContentLoader>)
}
export default VideoLoading
