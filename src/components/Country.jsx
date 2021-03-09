const Country = (props) => {
    return (
        <>
            <div className="w-full bg-white shadow-md rounded-md overflow-hidden mb-4 md:mb-0 overflow-scroll">
                <img src={props.flag} alt="" className="md:h-40 w-full" />
                <p className="uppercase font-bold italic"></p>
                <p className="italic font-bold uppercase my-2">{props.countryName}</p>
                <p><strong>Capital city: </strong>{props.capital}</p>
                <p><strong>Currencies: </strong>{props.currencies}</p>
                <p><strong>Population: </strong>{props.population}</p>
                <p><strong>Region: </strong>{props.region}</p>
                <p><strong>Subregion: </strong>{props.subregion}</p>
                <p><strong>Languages: </strong>{props.languages}</p>
            </div>
        </>
    );
}

export default Country;