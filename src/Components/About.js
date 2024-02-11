import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import "../App.css";

const About = () => (
  <YMaps className="map">
    <div>
      <Map defaultState={{ center: [46.062615, 36.854095], zoom: 8}} className="map">


      <Placemark geometry={[47.23, 39.67]} />
      <Placemark geometry={[47.21, 39.73]} />
      <Placemark geometry={[47.11, 39.71]} />
      <Placemark geometry={[47.25, 39.70]} />
      <Placemark geometry={[47.25, 39.73]} />
      <Placemark geometry={[47.2523, 39.7034]} />
      <Placemark geometry={[47.251155, 39.732671]} />
      <Placemark geometry={[47.250840, 39.730607]} />
      <Placemark geometry={[56.166541, 40.480347]} />
      <Placemark geometry={[56.168541, 40.482347]} />
      <Placemark geometry={[56.144457, 40.400896]} />
      <Placemark geometry={[41.461187, 2.235030]} />
      <Placemark geometry={[47.251123, 39.744768]} />
      <Placemark geometry={[47.249348, 39.753183]} />
      <Placemark geometry={[47.236528, 39.618136]} />

      </Map>
    </div>
  </YMaps>
);

export default About;