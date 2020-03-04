import React from 'react';
import Loader from 'react-loader-spinner'
import ContentLoader from 'react-content-loader'
const HomeLoading=()=>{
  return(<ContentLoader>
    <rect x="-10" y="10" rx="5" ry="5" width="75" height="105" />
    <rect x="80" y="10" rx="5" ry="5" width="215" height="105" />
    <rect x="310" y="10" rx="5" ry="5" width="90" height="105" />

    {/*<rect x="20" y="110" rx="5" ry="5" width="65" height="55" />
    <rect x="90" y="120" rx="5" ry="5" width="65" height="55" />
    <rect x="160" y="130" rx="5" ry="5" width="65" height="55" />
    <rect x="230" y="130" rx="5" ry="5" width="65" height="55" />
    <rect x="300" y="130" rx="5" ry="5" width="65" height="55" />*/}

  </ContentLoader>)
}
export default HomeLoading
