import React from 'react'
import GoogleMaps from "simple-react-google-maps";

function Mapa() {
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
          
        />
      </div>
    </div>
  )
}

export default Mapa