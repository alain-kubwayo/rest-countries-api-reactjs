import Country from './Country';
const Countries = (props) => {
    const allCountries = props.allCountries;
    return (
        <>
            <div className="md:grid md:grid-cols-3 md:gap-10 text-center md:text-left md:mt-8">
                {allCountries.map(country => <Country flag={country.flag} countryName={country.name} capital={country.capital} currencies={country.currencies.filter(currency => currency.name).map(currency => `${currency.name} (${currency.code})`).join(', ')} population={country.population.toLocaleString()} region={country.region} subregion={country.subregion} languages={country.languages.map(language => language.name).join(', ')} key={country.alpha3Code} />)}
            </div>
        </>
    );
}

export default Countries;