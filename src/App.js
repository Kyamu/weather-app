import React, { useState } from 'react';




const App = () => {

  let [cord, setCord] = useState({ latitude: "", longitude: "" });
  let [hemisphere, setHemisphere] = useState("");
  let [month, setMonth] = useState(new Date().getMonth());

  let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];


  let { latitude, longitude } = cord

  function findLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        setCord({ latitude: position.coords.latitude, longitude: position.coords.longitude })
        findHemisphere(position.coords.latitude);
      })
    }
  }

  function findHemisphere(latitude) {
    if (latitude > 0) {
      setHemisphere("Northern Hemisphere")
    }
    else if (latitude < 0) {
      setHemisphere("Southern Hemisphere")
    }
    else {
      setHemisphere("Equator")
    }
  }



  return (
    <div>
      <h1>Latitude:{latitude},Longitude:{longitude}</h1>
      <button onClick={findLocation}>Find Location</button>
      <h1>{hemisphere}</h1>
      <h1>{monthArr[month]}</h1>
    </div>
  )
}

export default App;