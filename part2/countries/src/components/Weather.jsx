const Weather = ({ country, weather }) => {
    if (!country || !weather) {
        return null
    }

    return (
        <>
            <h2>Weather in {country.capital}</h2>
            <div>Temperature {(weather.main.temp - 273.15).toFixed(2)} Celsius</div>
            {weather.weather.map(w => <img key={w.id} src={`https://openweathermap.org/img/wn/${w.icon}@2x.png`} alt={w.desciption} />)}
            <div>Wind {weather.wind.speed} m/s</div>
        </>
    )
}

export default Weather