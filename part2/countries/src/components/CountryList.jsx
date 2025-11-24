import CountryListItem from "./countryListItem";

const CountryList = ({countries, handleShow}) => {
    if (countries.length > 10) {
        return (<p>To many matchers, specify another filter</p>)
    }
    
    return (
        <>
            {countries.map(c => <CountryListItem key={c.name.common} country={c} handleShow={handleShow} /> )}
        </>
    )
}

export default CountryList;