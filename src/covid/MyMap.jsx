// Run the following on the command line (to add the esri-loader package.)
// yarn add esri-loader

import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

let view;

export const MyMap = ({ lat = 34, long = -118 }) => {
  const mapRef = useRef();

  useEffect(() => {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(['esri/Map', 'esri/views/MapView'], { css: true }).then(
      ([ArcGISMap, MapView]) => {
        const map = new ArcGISMap({
          basemap: 'topo-vector', //'satellite'
        });

        // load the map view at the ref's DOM node
        view = new MapView({
          container: mapRef.current,
          map: map,
          center: [-118, 34],
          zoom: 4,
        });

        return () => {
          if (view) {
            // destroy the map view
            view.container = null;
          }
        };
      }
    );
  }, []);

  useEffect(() => {
    if (!view) return;
    view.goTo({
      center: [long, lat],
    });
  }, [lat, long]);

  return <div className='webmap' ref={mapRef} style={{ height: 200 }} />;
};
