import React, { Component } from 'react';
import Analytics from '../../analytics/analytics.js';
import {TRANSCODE_HOME,DUBB_HOME,SUBTITLE_HOME,TAGGING_HOME} from '../../../url';
class LANDINGPAGE extends Component{
  render()
  {
  return(
    <div class="home_dashboard" style={{marginTop:'100px'}}>
        <div class="row">
                    <Analytics api={DUBB_HOME} heading="Dubbing"/>
                    <Analytics api={TRANSCODE_HOME} heading="Transcoding"/>
                    <Analytics api={SUBTITLE_HOME} heading="Subtitling"/>
                    <Analytics api={TAGGING_HOME} heading="Auto Tagging"/>
    </div>
    </div>);
}
}
export default LANDINGPAGE;
