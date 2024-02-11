import React, {useState, useEffect } from "react";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getFirestore, collection } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import "../App.css";



const About = () => {
  const [ids, setIds] = useState([]); // Store the locations

  

  const firebaseConfig = {
    apiKey: "AIzaSyAy9MphweJbBDel5SKq3CbSePEhTscZd2w",
    authDomain: "literallylitter-968b9.firebaseapp.com",
    databaseURL: "https://literallylitter-968b9-default-rtdb.firebaseio.com/",
    projectId: "literallylitter-968b9",
    storageBucket: "literallylitter-968b9.appspot.com",
    messagingSenderId: "686249910609",
    appId: "1:686249910609:web:5ea9fbf5bdbfc973e63370",
    measurementId: "G-VXRGZ3BJG2"
  };


  const app = initializeApp(firebaseConfig);

  /*useEffect(() => {
    const db = getFirestore(app);
    const unsubscribe = collection(db, 'id')
      .then((doc) => {
        if (doc.exists) {
          setIds(doc.data());
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });

    return () => unsubscribe(); 
  }, []); 

  return (
    /* <YMaps className="map">
      <div>
        <Map defaultState={{ center: [46.062615, 36.854095], zoom: 8 }} className="map">
          {Object.values(locations).map((location) => (
            <Placemark geometry={[location.latitude, location.longitude]} />
          ))}
        </Map>
      </div>
    </YMaps> */
    <YMaps className="map">
    <div>
    <Map defaultState={{ center: [46.062615, 36.854095], zoom: 8 }} className="map">
          {Object.values(ids).map((id) => (
            <Placemark geometry={[id.latitude, id.longitude]} />
          ))}


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

};


export default About;