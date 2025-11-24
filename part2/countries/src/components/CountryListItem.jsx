const CountryListItem = ({country, handleShow}) => {
    return (
        <div>{country.name.common} <button onClick={_ => handleShow(country)}>show</button></div>
    )
}

export default CountryListItem;