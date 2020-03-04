import React from 'react';
import Loader from 'react-loader-spinner'
import ContentLoader from 'react-content-loader'
const Loading=()=>{
  return(<ContentLoader>
    <rect x="170" y="10" rx="0" ry="0" width="60" height="10" />
    <rect x="20" y="30" rx="0" ry="0" width="360" height="15" />
    <rect x="20" y="46" rx="0" ry="0" width="360" height="15" />
    <rect x="20" y="62" rx="0" ry="0" width="360" height="15" />
    <rect x="20" y="78" rx="0" ry="0" width="360" height="15" />



  </ContentLoader>)
}
export default Loading
