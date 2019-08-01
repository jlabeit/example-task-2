import React, { useEffect, useRef, useState } from 'react';

const MapComponent = () => {
  const map = useRef()
  const [locations, setLocations] = useState()
  useEffect(() => {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then((json) => {
        setLocations(json)
    });
  }, [])
  useEffect(() => {
      map.current = new L.Map('mapid');
      const osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const attribution = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
      const osm = new L.TileLayer(osmUrl, {
        minZoom: 8,
        maxZoom: 12,
        attribution,
      });
      map.current.setView(new L.LatLng(52.51, 13.40), 9);
      map.current.addLayer(osm);
    }, [])
  useEffect(() => {
    // If map not loaded yet.
    if (!map.current || !locations) {
      return
    }
    const latlons = locations.map(({ lat, lon }) => [lat, lon])
    const polyline = L.polyline(latlons, { color: 'red' }).addTo(map.current)
    map.current.fitBounds(polyline.getBounds())
    return () => map.current.remove(polyline)
  }, [locations, map.current])
  return (
    <div>
      {locations && `${locations.length} locations loaded`}
      {!locations && 'Loading...'}
      <div id="mapid"></div>
    </div>);
}

export default MapComponent;