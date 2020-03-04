import React from 'react';
import Loader from 'react-loader-spinner'
import ContentLoader from 'react-content-loader'
const VideoLoading=()=>{
  return(<ContentLoader>
    <rect x="20" y="10" rx="5" ry="5" width="355" height="315" />

  </ContentLoader>)
}
export default VideoLoading
