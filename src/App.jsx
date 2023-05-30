import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import getApiKey from "./utils/getApiKey";
function App() {
  const [coords, setcoords] = useState();
  const [weather, setweather] = useState();

  useEffect(() => {
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
      setcoords(obj);
    };
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if (coords !== undefined) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}
      &lon=${coords?.lon}&appid=${getApiKey()}`;
      axios
        .get(url)
        .then((res) => setweather(res.data))
        .catch(err => console.log(err));
    }
  }, [coords]);

  return (
    <>
      <div>
        <h1>Weather App</h1>
      </div>
    </>
  );
}

export default App;
