import React from 'react';

function Video({ id }) {
  return (
    <iframe
      className='m-3'
      type='text/html'
      width='480'
      height='270'
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder='0'
      allowFullScreen
      title='Video'
    ></iframe>
  );
}

export default Video;
