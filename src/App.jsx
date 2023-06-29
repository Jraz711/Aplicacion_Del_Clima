import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading";
import WeatherCard from "./components/WeatherCard";
import getApiKey from "./utils/getApiKey";

function App() {
  const [coords, setcoords] = useState();
  const [weather, setweather] = useState();
  const [temp, settemp] = useState()

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
    if (coords) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.lon}&appid=${getApiKey()}`;
      axios.get(url)
        .then(res => {
          setweather(res.data)
          const objTemp = {
            celsius: +(res.data.main.temp - 273.15).toFixed(1),
            farenheit: +((res.data.main.temp - 273.15) * 9 / 5 + 32).toFixed(1)
          }
          settemp(objTemp)
        })
        .catch(err => console.log(err));
    }
  }, [coords]);


  console.log(temp);

  return (
    <>
      <div>
        {
          weather
            ? <WeatherCard
              weather={weather}
              temp={temp}
            />
            : <Loading />
        }
      </div>
    </>
  );
}

export default App;
