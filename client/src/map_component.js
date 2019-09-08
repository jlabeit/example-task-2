/* global fetch, L */
import React, { useEffect, useRef, useState } from "react";
import Moment from "moment";
import Slider from "./slider";

const getRouteSummary = (locations) => {
  const to = Moment(locations[0].time).format("hh:mm DD.MM");
  const from = Moment(locations[locations.length - 1].time).format(
    "hh:mm DD.MM"
  );
  return `${from} - ${to}`;
};

const MapComponent = () => {
  const map = useRef();
  const [locations, setLocations] = useState();
  const [filtered, setFiltered] = useState();
  const [date, setDate] = useState("");

  // Request location data.
  useEffect(() => {
    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((json) => {
        setLocations(json);
      });
  }, []);
  // TODO(Task 2): Request location closest to specified datetime from the back-end.
  const getDate = (date) => {
    // get date from slider comp
    setDate(date);
  };
  useEffect(() => {
    if (date) {
      fetch(`http://localhost:3000/location/${date}`)
        .then((response) => response.json())
        .then((json) => {
          setFiltered(json);
        });
    }
  }, [date]);
  // Initialize map.
  useEffect(() => {
    map.current = new L.Map("mapid");
    const osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const attribution =
      'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
    const osm = new L.TileLayer(osmUrl, {
      minZoom: 8,
      maxZoom: 120, // adjusting the zoom level so we can zoom in more
      attribution
    });
    map.current.setView(new L.LatLng(52.51, 13.4), 9);
    map.current.addLayer(osm);
  }, []);
  // Update location data on map.
  useEffect(() => {
    if (!map.current || !locations) {
      return; // If map or locations not loaded yet.
    }
    // TODO(Task 1): Replace the single red polyline by the different segments on the map.
    // map through each array[trip] in locations array
    locations.map((location) => {
      const latlons = location.map(({ lat, lon }) => [lat, lon]);
      const diffColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
      const polyline = L.polyline(latlons, { color: diffColor })
        .bindPopup(getRouteSummary(location))
        .addTo(map.current);
      map.current.fitBounds(polyline.getBounds());
      return () => map.current.remove(polyline);
    });
  }, [locations, map.current]);

  // TODO(Task 2): Display location that the back-end returned on the map as a marker.
  useEffect(() => {
    if (!filtered) {
      return;
    }
    filtered.map((point) => {
      const { lat, lon } = point;
      const pointDate = new Date(point.time);
      const marker = L.marker([lat, lon], { title: pointDate }).addTo(
        map.current
      );
      return () => map.current.remove(marker);
    });
  }, [filtered, map.current]);

  return (
    <div>
      <div>
        <h3>
          Select a Date: <Slider newDate={getDate} />
        </h3>
      </div>
      {locations && `${locations.length} locations loaded`}
      {!locations && "Loading..."}
      <div id="mapid" />
    </div>
  );
};

export default MapComponent;
