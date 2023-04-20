/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useEffect, useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import Video from './Video';

interface VideoData {
  id: { videoId: string };
}

function Videos() {
  const [searchQuery, setSearch] = useState<string>('reactjs');
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [errorMessage, setError] = useState<string | null>(null);

  const link = `https://youtube.googleapis.com/youtube/v3/search?q=${searchQuery}&type=video&key=${
    import.meta.env.VITE_YOUTUBE_API_KEY
  }`;

  useEffect(() => {
    getData(null);
  }, []);

  async function getData(evt: FormEvent | null) {
    try {
      evt?.preventDefault();
      const resp = await fetch(link);
      if (!resp.ok) {
        throw new Error('Network response was not OK');
      }
      const data = await resp.json();
      setVideos(data.items);
    } catch (err: unknown) {
      let message: string = 'error';
      if (err instanceof Error) message = err.message;
      setError(message);
      console.error(message);
    }
  }
  return (
    <>
      <h1>Videos</h1>
      <Form onSubmit={getData}>
        <Row className='align-items-center mb-4'>
          <Col sm='auto'>
            <Form.Label htmlFor='txtSearch'>Search Videos:</Form.Label>
          </Col>
          <Col>
            <Form.Control
              id='txtSearch'
              type='search'
              name='search'
              value={searchQuery}
              onChange={(evt) => {
                setSearch(evt.target.value);
              }}
            />
          </Col>
          <Col>
            <Button variant='primary' type='submit' id='btn'>
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      {import.meta.env.VITE_YOUTUBE_API_KEY ? (
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
              server called VITE_YOUTUBE_API_KEY with the value of your key
            </li>
            <li>
              If you are developing, create in the project's root a new file
              called <code>.env.local</code>. It will contain a single line that
              looks like this: <br />
              <code>
                VITE_YOUTUBE_API_KEY=AIzaSyCEKhpokh17lEOFrNzujgRM8O2Fyk-IB5 o
              </code>
            </li>
          </ol>
        </>
      )}
    </>
  );
}

export default Videos;
