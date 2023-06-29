import { useState } from "react"
import './styles/weatherCard.css'
const WeatherCard = ({ weather, temp }) => {

  const [isCelsius, setisCelsius] = useState(true)

  const handleChangeTemp = () => setisCelsius(!isCelsius)

  return (
    <article className="weather">
      <header className="weather_header">
        <h1 className="weather_title">Weather APP</h1>
        <h2 className="weather_subtitle">{weather?.name}, {weather?.sys.country}</h2>
      </header>
      <section className="weather_body">
        <div className="weather_img-container">
          <img src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
        </div>
        <div className="weather_info">
          <h3 className="weather_info-title">{weather?.weather[0].description}</h3>
          <ul className="weather_list">
            <li className="weather_list-item">
              <span className="weather_list-label">Wind Speed</span>
              <span className="weather_list-value">{weather?.wind.speed} M/S</span>
            </li>
            <li className="weather_list-item">
              <span className="weather_list-label">Clouds</span>
              <span className="weather_list-value">{weather?.clouds.all} %</span>
            </li>
            <li className="weather_list-item">
              <span className="weather_list-label">Pressure</span>
              <span className="weather_list-value">{weather?.main.pressure} hPa</span>
            </li>
          </ul>
        </div>
      </section>
      <footer className="weather_footer">
        <h2 className="weather_temp">{isCelsius ? `${temp?.celsius} °C ` : `${temp?.farenheit} °F`}</h2>
        <button className="weather_btn" onClick={handleChangeTemp}>
          Change to {isCelsius ? "°F" : "°C"}
        </button>
      </footer>
    </article>
  )
}

export default WeatherCard