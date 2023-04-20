// Run the following on the command line (to add the esri-loader package.)
// yarn add esri-loader

import { RefObject, useEffect, useRef } from 'react';
import '@arcgis/core/assets/esri/themes/dark/main.css';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
//import SceneView from '@arcgis/core/views/SceneView';

let view: MapView;

export const MyMap = ({ lat = 34, long = -118 }) => {
  const mapRef = useRef<HTMLDivElement | null>();

  useEffect(() => {
    const map = new Map({
      basemap: 'topo-vector', //'satellite'
    });

    // load the map view at the ref's DOM node
    //view = new SceneView({
    view = new MapView({
      container: mapRef.current as HTMLDivElement,
      map: map,
      center: [-118, 34],
      zoom: 4,
    });

    return () => {
      if (view) {
        // destroy the map view
        view.container = null!;
      }
    };
  }, []);

  useEffect(() => {
    if (!view) return;
    view.goTo({
      center: [long, lat],
    });
  }, [lat, long]);

  return (
    <div
      className='webmap'
      ref={mapRef as RefObject<HTMLDivElement>}
      style={{ height: 200 }}
    />
  );
};
