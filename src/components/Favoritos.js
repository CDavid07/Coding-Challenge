import React, { useState } from 'react'
import GoogleMaps from "simple-react-google-maps";
import data from "../data/cityes.json";

function Favoritos() {
  let marcadores = [];
  const [favoritos, setFavoritos] = useState([]);
  let [inputValue, setInputValue] = useState("")
  const list = favoritos.map((fav, i) => {
    return <li key={i}>{fav}</li>
  })

  const nuevo = () => {
    console.log(inputValue);
    favoritos.push(inputValue)
    console.log(favoritos);
  }

  data.forEach(element => {
    marcadores.push({ lat: element.altitud, lng: element.longitud })
  });
  return (
    <div>
      <label>Add Store Favorite :</label>
      <input type="text"
        onChange={(e) => setInputValue(e.target.value)}>
      </input>
      <button onClick={nuevo}>Agregar</button>

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
        <div className="list">
          <ul>
            <h2>Favorite</h2>
            {list}
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Favoritos