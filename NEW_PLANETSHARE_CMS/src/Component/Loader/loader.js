import React from 'react';
import ContentLoader from 'react-content-loader';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
const Loading=()=>{
  return(<ContentLoader   height={180}
  speed={2} 
>
    <rect x="20" y="10" rx="3" ry="3" width="45" height="10" />
    <rect x="370" y="10" rx="3" ry="3" width="20" height="10" />

    <rect x="20" y="25" rx="0" ry="0" width="370" height="15" />

    <rect x="20" y="60" rx="0" ry="0" width="45" height="10" />
    <rect x="80" y="60" rx="0" ry="0" width="45" height="10" />
    <rect x="140" y="60" rx="0" ry="0" width="45" height="10" />
    <rect x="200" y="60" rx="0" ry="0" width="45" height="10" />
    <rect x="260" y="60" rx="0" ry="0" width="45" height="10" />
    <rect x="320" y="60" rx="0" ry="0" width="45" height="10" />

    <rect x="20" y="80" rx="0" ry="0" width="370" height="15" />
    <rect x="20" y="100" rx="0" ry="0" width="370" height="15" />
    <rect x="20" y="120" rx="0" ry="0" width="370" height="15" />
    <rect x="20" y="140" rx="0" ry="0" width="370" height="15" />
    <rect x="20" y="80" rx="0" ry="0" width="370" height="15" />


  </ContentLoader>)
// return( <div style={{justifyContent:'center',alignItems:'center'}}><Loader
//          type="Puff"
//          color="#00BFFF"
//          height={50}
//          width={50}
//          timeout={3000}
//
//       /></div>)
}
export default Loading
