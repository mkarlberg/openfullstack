import Weather from "./Weather"

const Country = ({country, weather}) => {
    if (!country || !weather) {
        return null
    }

    return (
        <>
            <h1>{country.name.common}</h1>
            <div>Capital {country.capital}</div>
            <div>Area {country.area}</div>

            <h2>Languages</h2>
            <ul>
                {Object.keys(country.languages).map(languageKey => <li key={languageKey}>{country.languages[languageKey]}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />

            <Weather country={country} weather={weather} />
        </>
    )
}

export default Country;