import { useState } from "react"

const WeatherCard = ({ weather, temp }) => {

  const [isCelsius, setisCelsius] = useState(true)

  const handleChangeTemp = () => setisCelsius(!isCelsius)

  return (
    <article>
      <header>
        <h1>Weather APP</h1>
        <h2>{weather?.name}, {weather?.sys.country}</h2>
      </header>
      <section>
        <div>
          <img src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
        </div>
        <div>
          <h3>{weather?.weather[0].description}</h3>
          <ul>
            <li>
              <span>Wind Speed</span>
              <span>{weather?.wind.speed} M/S</span>
            </li>
            <li>
              <span>Clouds</span>
              <span>{weather?.clouds.all} %</span>
            </li>
            <li>
              <span>Pressure</span>
              <span>{weather?.main.pressure} hPa</span>
            </li>
          </ul>
        </div>
      </section>
      <aside>
        <h2>{isCelsius ? `${temp?.celsius} C ` : `${temp?.farenheit} F`}</h2>
        <button onClick={handleChangeTemp}>
          Change to {isCelsius ? "F" : "C"}
        </button>
      </aside>
    </article>
  )
}

export default WeatherCard