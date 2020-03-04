const hostUrl="http://api.planetshare.in/public/api/dashboard";
const hostUrld="http://api.planetshare.in/public/api/website";
// const hostUrl="http://192.168.24.132/PlanetShare/public/api/website";
// const hostUrld="http://192.168.24.132/PlanetShare/public/api/dashboard";
export const IP="http://api.planetshare.in";
export const USERLIST=hostUrl+"/users";
export const VIDEOLIST=hostUrl+"/videos";
export const UPLOAD=hostUrl+"/upload";
export const LOGIN=hostUrl+"/login";
export const LOGOUT=hostUrl+"/logout";
export const CHANGESTATUS=hostUrl+"/user/changeStatus";
export const VIDEO_CHANGESTATUS=hostUrl+"/videos_desc/changeStatus";
export const DELETE=hostUrl+"/user/delete";
export const VIDEO_DESCRIPTION=hostUrl+"/videos_desc/save";
export const VIDEO_DESCRIPTION_UPLOAD=hostUrl+"/videos_desc";
export const VIDEO_DESCRIPTION_EDIT=hostUrl+"/videos_desc/edit";
export const VIDEO_DESCRIPTION_UPDATE=hostUrl+"/videos_desc/update";
export const HOME=hostUrl+"/home";
export const VIDEO_DOWNLOAD=hostUrl+"/videos/download";
export const DUBBED_ORDERS=hostUrl+"/dubb";
export const TRANSCODE_ORDERS=hostUrl+"/transcode";
export const SUBTITLE_ORDERS=hostUrl+"/subtitle";
export const TAGGING_ORDERS=hostUrl+"/tagging";
export const DUBBED_ORDERS_STATUS=hostUrl+"/dubb/changeStatus";
export const SUBTITLE_ORDERS_STATUS=hostUrl+"/subtitle/changeStatus";
export const VIDEO_DUBB_DESCRIPTION=hostUrl+"/dubb/singleRecord";
export const VIDEO_TRANSCODE_DESCRIPTION=hostUrl+"/transcode/singleRecord";
export const USER_DETAILS=hostUrl+"/users/singleRecord";
export const VIDEO_SUBTITLE_DESCRIPTION=hostUrl+"/subtitle/singleRecord";
export const VIDEO_TAGGING_DESCRIPTION=hostUrl+"/tagging/singleRecord";
export const TRANSCODE_ORDERS_STATUS=hostUrl+"/transcode/changeStatus";
export const TAGGING_ORDERS_STATUS=hostUrl+"/tagging/changeStatus";
export const DUBBED_VIDEO_DOWNLOAD=hostUrld+"/dubb/download";
export const SUBTITLE_VIDEO_DOWNLOAD=hostUrld+"/subtitle/download"
export const TRANSCODE_VIDEO_DOWNLOAD=hostUrld+"/transcode/download"
export const TAGGING_VIDEO_DOWNLOAD=hostUrld+"/tagging/download"
export const VIDEO_ASSIGNED_VENDOR_DESCRIPTION=hostUrl+"/assigned/vendorList";


/* --------------  VENDOR DETAILS ---------------------*/

export const VENDOR_LIST=hostUrl+"/vendor"
export const VENDOR_SINGLE_JOB_DETAILS=hostUrl+"/vendor/singleRecord";
export const VENDOR_DETAILS_WITH_SERVICE_LIST=hostUrld+"/vendor/serviceLists"


/* --------  ASSIGN VENDOR SERVICE ---------*/
export const ASSIGN_VENDOR_SERVICE=hostUrl+"/assign/vendorList"
// export const ASSIGNED_VENDOR_SERVICE=hostUrl+"/save/assignedvendorList"
export const ASSIGNED_VENDOR_SERVICE=hostUrl+"/save/assignedvendorList"
export const PAYMENT=hostUrl+"/vendor/payment"

// -------------- USER QUERY -----------------
export const USERQUERYLIST=hostUrl+"/getContactUs";
export const USERQUERYSINGLERECORD=hostUrl+"/getContactUs/singleRecord"

//-----------------------SELLER LIST----------------
export const SELLER_LIST=hostUrl+"/seller"
export const SELLER_DETAILS=hostUrl+"/seller/singleRecord"
