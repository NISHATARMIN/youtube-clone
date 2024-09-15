// VideoPlayer.js
import React from 'react';
import YouTube from 'react-youtube';

function VideoPlayer({ videoId }) {
  const opts = {
    height: '370',
    width: '620',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <YouTube videoId={videoId} opts={opts} />
  );
}

export default VideoPlayer;
