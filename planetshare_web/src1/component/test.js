import React, { Component } from 'react';
import ReactJWPlayer from 'react-jw-player';
class Subtitling extends Component {
  render() {
    return (
        <div class="top_div" style={{marginTop:'100px'}}>
        <div class="overlay"></div>

        <ReactJWPlayer
    playerId='jw-player'
    playerScript='https://content.jwplatform.com/libraries/jvJ1Gu3c.js'
    file='http://cdnbiocine.planetcast.in/biocine/content/0_5vgcj94o/a.m3u8'
    aspectRatio="16:9"
    className="col-md-4"
  />
  </div>

    );
  }
}
export default Subtitling;
