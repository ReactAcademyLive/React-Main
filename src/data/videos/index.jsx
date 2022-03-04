/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import Video from './Video';

function Videos() {
  const [searchQuery, setSearch] = useState('reactjs');
  const [videos, setVideos] = useState([]);
  const [errorMessage, setError] = useState(null);

  const link = `https://youtube.googleapis.com/youtube/v3/search?q=${searchQuery}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const resp = await fetch(link);
      if (!resp.ok) {
        throw new Error('Network response was not OK');
      }
      const data = await resp.json();
      setVideos(data.items);
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  }
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
      {process.env.REACT_APP_YOUTUBE_API_KEY ? (
        errorMessage ? (
          <Alert variant='danger'>{errorMessage}</Alert>
        ) : (
          videos.map((vid) => (
            <Video id={vid.id.videoId} key={vid.id.videoId} />
          ))
        )
      ) : (
        <>
          <p>
            You need to add an API key to get the YouTube data. To get the key,
            do the following:
          </p>
          <ol>
            <li>
              Go to{' '}
              <a href='https://developers.google.com/youtube/v3/getting-started'>
                https://developers.google.com/youtube/v3/getting-started
              </a>
              .
            </li>
            <li>
              Follow the steps at the top of the page to get your API key. Get
              the value of your key.
            </li>
            <li>
              If you are deploying, create an environnment variable on your
              server called REACT_APP_YOUTUBE_API_KEY with the value of your key
            </li>
            <li>
              If you are developing, create in the project root a new file
              called <code>.env.local</code>. It will contain a single line that
              looks like this: <br />
              <code>
                REACT_APP_YOUTUBE_API_KEY=AIzaSyCEKhpokh17lEOFrNzujgRM8O2Fyk-IB5
                o
              </code>
            </li>
          </ol>
        </>
      )}
    </>
  );
}

export default Videos;
