import React, { useEffect, useState } from 'react';

function Videos() {
  const [searchQuery, setSearch] = useState('react');
  const [videos, setVideos] = useState([]);
  const link = `https://youtube.googleapis.com/youtube/v3/search?q=${searchQuery}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
  useEffect(() => {
    getData();
  }, []);

  console.log(process.env);

  async function getData() {
    const resp = await fetch(link);
    const data = await resp.json();
    setVideos(data);
  }

  return (
    <>
      <h1>Videos</h1>
      {}
    </>
  );
}

export default Videos;
