import React from 'react';
import Loader from 'react-loader-spinner'
import ContentLoader from 'react-content-loader'
const Loading=()=>{
  return(<ContentLoader>
    <rect x="40" y="25" rx="25" ry="25" width="45" height="40" />
    <rect x="110" y="15" rx="5" ry="5" width="45" height="10" />

    <rect x="110" y="35" rx="0" ry="0" width="105" height="12" />
    <rect x="240" y="35" rx="0" ry="0" width="105" height="12" />

    <rect x="110" y="55" rx="0" ry="0" width="105" height="12" />
    <rect x="240" y="55" rx="0" ry="0" width="105" height="12" />

    <rect x="110" y="75" rx="0" ry="0" width="105" height="12" />
    <rect x="240" y="75" rx="0" ry="0" width="105" height="12" />

    <rect x="110" y="95" rx="0" ry="0" width="105" height="12" />
    <rect x="240" y="95" rx="0" ry="0" width="105" height="12" />

    <rect x="320" y="110" rx="0" ry="0" width="25" height="12" />




  </ContentLoader>)
}
export default Loading
