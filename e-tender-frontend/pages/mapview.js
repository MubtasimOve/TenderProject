import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

export default function Home() {

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamF3YWQ1MjkyMyIsImEiOiJja3JmZjBibzAxNjRkMndwaXZ1bWkyMnZ3In0.dMseKSV6dksldgURovAiDg';
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [90.4267, 23.7805], // set initial center of the map
      zoom: 10, // set initial zoom level
    });
   

    return () => map.remove();
  }, []);

  return (
    <>
      <div id="map-container" style={{ height: '500px' }} />
    </>
  );
}
