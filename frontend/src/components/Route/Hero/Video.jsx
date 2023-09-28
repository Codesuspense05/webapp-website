import React from 'react';

const YouTubeVideo = ({ videoId }) => {
  return (
    <div className="max-w-screen-md mx-auto">
      <iframe
        title="YouTube Video"
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;