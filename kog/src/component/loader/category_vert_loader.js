import React from 'react';
import Loader from 'react-loader-spinner'
import ContentLoader from 'react-content-loader'
const Loading=()=>{
  return(<ContentLoader>
    <rect x="165" y="5" rx="0" ry="0" width="65" height="10" />
    <rect x="20" y="20" rx="5" ry="5" width="65" height="80" />
    <rect x="90" y="20" rx="5" ry="5" width="65" height="80" />
    <rect x="160" y="20" rx="5" ry="5" width="65" height="80" />
    <rect x="230" y="20" rx="5" ry="5" width="65" height="80" />
    <rect x="300" y="20" rx="5" ry="5" width="65" height="80" />

    <rect x="20" y="60" rx="5" ry="5" width="65" height="40" />
    <rect x="90" y="60" rx="5" ry="5" width="65" height="40" />
    <rect x="160" y="60" rx="5" ry="5" width="65" height="40" />
    <rect x="230" y="60" rx="5" ry="5" width="65" height="40" />
    <rect x="300" y="60" rx="5" ry="5" width="65" height="40" />

    <rect x="20" y="110" rx="5" ry="5" width="65" height="40" />
    <rect x="90" y="110" rx="5" ry="5" width="65" height="40" />
    <rect x="160" y="110" rx="5" ry="5" width="65" height="40" />
    <rect x="230" y="110" rx="5" ry="5" width="65" height="40" />
    <rect x="300" y="110" rx="5" ry="5" width="65" height="40" />
  </ContentLoader>)
}
export default Loading
