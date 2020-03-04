import Fingerprint from "fingerprintjs";
const base_url="http://otm.planetcast.in";
export const COUNTRYCODE=localStorage.getItem('countrycode')==null?'IN':localStorage.getItem('countrycode')
export const PARTNER_ID='ott357'
export const HOME_DATA=base_url+'/v1/home'
export const MOVIES_DATA=base_url+'/category_subdata'
export const MENU_DATA=base_url+'/menu'
export const VIDEO_DATA=base_url+'/videoinfo'
export const CATEGORY_DATA=base_url+'/category_data'
export const VIEW_MORE_CATEGORY_DATA=base_url+'/category_info'
export const SEASON_DATA=base_url+'/series_subdata'
export const RELATED_VIDEO=base_url+'/relatedvideo'
export const SEARCH=base_url+'/search'
export const LEFTMENU=base_url+'/leftmenu'
export const CONTINUE_WATCHING=base_url+'/continue_watching'
export const FAVOURITES=base_url+'/favourite'
export const WATCHLATER=base_url+'/watch_later';
export const USER_HISTORY=base_url+'/userhistory'
export const VIEW_MORE=base_url+'/category_data'
export const LOGIN=base_url+'/login_otp';
export const LOGOUT=base_url+'/v1/logout';
export const USER_DETAILS=base_url+'/v1/login';
export const USER_PROFILE=base_url+'/v1/profile_update'
export const UPLOAD_PROFILE=base_url+'/upload'
export const GET_TOKEN=base_url+'/gettoken';
export const PLAYLIST_VIEW=base_url+'/playlistview'
export const PLAYLIST=base_url+'/playlist'
export const PLAYLIST_METADATA=base_url+'/playlistmetadata';
export const GENERATE_TICKET=base_url+'/ticket';
export const TRANSCATION=base_url+'/trans_history';
export const TICKET_HISTORY=base_url+'/ticket_history'
export const USERID=localStorage.getItem('userid')==null?0:localStorage.getItem('userid')
var fingerprint = new Fingerprint().get();
localStorage.setItem('uuid',fingerprint)
export const UUID=fingerprint
