import React, { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from 'react-leaflet';

const MyPopupMarker = ({ content, position }) => (
  <Marker position={position}>
    <Popup>{content}</Popup>
  </Marker>
);

const MyMarkersList = ({ markers }) => {
  return (
    <>
      {markers.map(({ key, ...props }) => (
        <MyPopupMarker key={key} {...props} />
      ))}
    </>
  );
};

const defaultPins = {
  markers: [
    {
      key: 'marker1',
      position: [46.82, -71.22],
      content: 'This is marker 1',
    },
    {
      key: 'marker2',
      position: [46.81, -71.21],
      content: 'This is marker 2',
    },
    {
      key: 'marker3',
      position: [46.79, -71.23],
      content: 'This is marker 3',
    },
  ],
};

export default function MapWithPins() {
  const [pins, setPins] = useState(defaultPins);
  const [currentNumber, setCurrentNumber] = useState(4);

  function handleClick(e) {
    console.log(e);
    setPins({
      markers: [
        ...pins.markers,
        {
          key: `marker${currentNumber}`,
          position: [e.latlng.lat, e.latlng.lng],
          content: `This is marker ${currentNumber}`,
        },
      ],
    });
    setCurrentNumber(currentNumber + 1);
  }

  return (
    <>
      <h1>Map with pins</h1>
      <MapContainer center={[46.8141244, -71.22]} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MyMarkersList markers={pins.markers} />
        <EventHandler onClick={handleClick} />
      </MapContainer>
    </>
  );
}

function EventHandler({ onClick }) {
  useMapEvent('click', (e) => {
    onClick(e);
  });
  return null;
}
