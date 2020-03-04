import React, { Component } from 'react';
import ServiceUrlList from '../../component/service_url_list/service_url_list';
import {TRANSCODING,DUBBING,TAGGING,SYNDICATION,STREAMING,ARCHIEVING,CAPTIONING,SUBTITLING} from '../../component/service_content';
class Service_url extends Component
{
  render()
  {
    return (
      <section class="features-extended section industry_services">
        <div class="features-extended-inner section-inner">
          <div class="features-extended-wrap">
            <div>
            <ServiceUrlList data=<TAGGING/ > img_url="img/all-img1/Automated-Tagging.png" head="Automated Tagging"  css="row-reverse" url="tagging"/>
            <ServiceUrlList data=<DUBBING/> img_url="img/all-img1/Dubbing1.png" head="Dubbing" url="dubbing"/>
            <ServiceUrlList data=<STREAMING/> img_url="img/all-img1/Streaming-Service.png" head="Streaming Service" css="row-reverse" url="streaming"/>
            <ServiceUrlList data=<TRANSCODING /> img_url="img/all-img1/Transcoding.png" head="Transcoding" url="transcoding"/>
            <ServiceUrlList data=<ARCHIEVING/> img_url="img/all-img1/Archiving.png" head="Archiving" css="row-reverse" url="archieving"/>
            <ServiceUrlList data=<SUBTITLING/> img_url="img/all-img1/Subtitling & Closed captioning.png" head="Subtitling & Closed captioning"  url="subtitling"/>
            {/*<ServiceUrlList data=<CAPTIONING/> img_url="img/all-img/closedcaptioning.png" head="Closed Captioning" url="captioning"/>*/}
            {/*<ServiceUrlList data={SYNDICATION} img_url="img/all-img/dubbing.png" head="Content Syndication" css="row-reverse" url="syndication"/>*/}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Service_url;
