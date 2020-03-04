// import Fingerprint from "fingerprintjs";
export const TAG="dash";
const base_url="http://192.168.27.119/Shantanu_project/OTT_LIVE_WORK/LARAVEL_WORK/NEW_PLANETSHARE/Planetshare/public/api";
//const base_url="http://api.planetshare.in/public/api";
export const COUNTRYCODE=localStorage.getItem('countrycode')==null?'IN':localStorage.getItem('countrycode')
export const LOGIN=base_url+"/login";
export const LOGOUT=base_url+"/logout";
export const CHANGE_STATUS=base_url+"/changeStatus"
export const USERLIST=base_url+"/getUserList"
export const SELLERLIST=base_url+"/getSellerList"
export const SELLER_VIDEO_LIST=base_url+"/seller/getVideoList"
export const SELLER_IMAGE_LIST=base_url+"/seller/getImageList"
export const VENDORLIST=base_url+"/getVendorList";
export const VENDORSERVICELIST=base_url+"/getVendorServiceList";
export const VENDORGIGLIST=base_url+"/getVendorGigsList";
export const GETPACKS=base_url+"/get/packs";
export const GETORDERS=base_url+"/get/orders";
export const CREATEPACKS=base_url+"/create/packs";
export const GETCATEGORIES=base_url+"/get/category";
export const CREATECATEGORY=base_url+"/add/category";
export const GIGINFO=base_url+"/vendor/gigInfo";
export const VIDEODATA=base_url+"/get/videoData";
export const IMAGEDATA=base_url+"/get/imageData";
export const CONTACTLIST=base_url+"/getConatctQuery"
export const GETBIDLIST=base_url+"/getBidList"
export const BIDIDDATA=base_url+"/bidIdExist"
export const MAKEOFFERLIST=base_url+"/getMakeOfferList"
export const SELLER_VENDOR_INFO=base_url+"/vendorSellerInfo";
export const DASHBOARDHOME=base_url+"/getDashboardHome"
export const USERID=localStorage.getItem('user_id')==null?0:localStorage.getItem('user_id');
export const TOKEN=localStorage.getItem('planetshare_token');
// var fingerprint = new Fingerprint().get();
// localStorage.setItem('uuid',fingerprint)
// export const UUID=fingerprint
export const HEADER = {
headers: {
  'Content-Type': 'application/json;charset=UTF-8',
  'Authorization':"Bearer " + TOKEN,
}
};
export const OS=window.navigator.platform
export const NAME=window.navigator.appCodeName
export const backdropStyle = {
    backgroundColor: 'black'
};

export const contentStyle = {
    backgroundColor: 'white',
    height: '100%',
    overflowY:'visible'
};
export const toUpperCaseFilter = (d) => {
    return d.toUpperCase();
};
