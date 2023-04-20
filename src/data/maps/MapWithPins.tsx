import { LatLngTuple } from 'leaflet';
import { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from 'react-leaflet';

interface Pin {
  key: string;
  position: LatLngTuple;
  content: string;
}

interface MyPopupMarkerProps {
  content: string;
  position: LatLngTuple;
}

interface MyMarkersListProps {
  markers: Pin[];
}

function MyPopupMarker({ content, position }: MyPopupMarkerProps) {
  return (
    <Marker position={position}>
      <Popup>{content}</Popup>
    </Marker>
  );
}

function MyMarkersList() {
  const [pins, setPins] = useState<MyMarkersListProps>(defaultPins);
  const [currentNumber, setCurrentNumber] = useState<number>(4);

  useMapEvent('click', (e) => {
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
  });

  return (
    <>
      {pins.markers.map(({ key, ...props }) => (
        <MyPopupMarker key={key} {...props} />
      ))}
    </>
  );
}

const defaultPins: MyMarkersListProps = {
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
  return (
    <>
      <h1>Map with pins</h1>
      <MapContainer center={[46.8141244, -71.22]} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MyMarkersList />
      </MapContainer>
    </>
  );
}
