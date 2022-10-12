import React from 'react'
import GoogleMaps from "simple-react-google-maps";
//import Geocode from "react-geocode";
import data from "../data/cityes.json";


function MapaTiendas() {
  let marcadores = []
  data.forEach(element => {
    marcadores.push({ lat: element.altitud, lng: element.longitud })
  });
  return (
    <div>
      <div className="map">
        <GoogleMaps 
          apiKey={"AIzaSyCK2GQ-4tRCqBCMtoxBB1spA1Z2S9esIb0"}
          style={{ height: "500px", width: "700px" }}
          zoom={12}
          center={{
            lat: 19.42847,
            lng: -99.12766
          }}
          markers={marcadores}
        />
      </div>
    </div>

  )
}

export default MapaTiendas