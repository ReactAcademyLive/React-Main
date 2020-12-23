import React, { Component, Fragment } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MyPopupMarker = ({ content, position }) => (
  <Marker position={position}>
    <Popup>{content}</Popup>
  </Marker>
);

const MyMarkersList = ({ markers }) => {
  return (
    <Fragment>
      {markers.map(({ key, ...props }) => (
        <MyPopupMarker key={key} {...props} />
      ))}
    </Fragment>
  );
};

export default class MapWithPins extends Component {
  state = {
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

  incr = 4;

  handleClick = (e) => {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          key: `marker${this.incr}`,
          position: [e.latlng.lat, e.latlng.lng],
          content: `This is marker ${this.incr++}`,
        },
      ],
    });
  };

  render() {
    return (
      <>
        <h1>Map with pins</h1>
        <MapContainer
          center={[46.8141244, -71.22]}
          zoom={13}
          onClick={this.handleClick}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <MyMarkersList markers={this.state.markers} />
        </MapContainer>
      </>
    );
  }
}
