import React, { FunctionComponent } from "react";
import styled from "styled-components";
//@ts-ignore
import video from "url:../../assets/videos/video_overfocus-intro.m4v";

const BackgroundVideo: FunctionComponent = () => {
  return (
    <Video id="videoBG" autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </Video>
  );
};

const Video = styled.video`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: auto;
  top: 80px;
  @media (min-aspect-ratio: 16/9) {
    width: 100%;
    height: auto;
  }
  @media (max-aspect-ratio: 16/9) {
    width: auto;
    height: 100%;
  }
`;

export default BackgroundVideo;
