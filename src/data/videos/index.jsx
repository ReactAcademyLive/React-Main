/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Video from './Video';

function Videos() {
  const [searchQuery, setSearch] = useState('reactjs');
  const [videos, setVideos] = useState([]);
  const link = `https://youtube.googleapis.com/youtube/v3/search?q=${searchQuery}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
  useEffect(() => {
    getData();
  }, []);

  console.log(process.env);

  async function getData() {
    const resp = await fetch(link);
    const data = await resp.json();
    setVideos(data.items);
  }
  console.log(videos);
  return (
    <>
      <h1>Videos</h1>
      <Row className='align-items-center mb-4'>
        <Col sm='auto'>
          <Form.Label>Search Videos:</Form.Label>
        </Col>
        <Col>
          <Form.Control
            type='text'
            value={searchQuery}
            onChange={(evt) => {
              setSearch(evt.target.value);
            }}
          />
        </Col>
        <Col>
          <Button variant='primary' type='submit' onClick={getData}>
            Rechercher
          </Button>
        </Col>
      </Row>

      {videos.map((vid) => (
        <Video id={vid.id.videoId} />
      ))}
    </>
  );
}

export default Videos;
