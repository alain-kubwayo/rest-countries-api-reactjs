import React, { useState } from 'react';
const Navbar = (props) => {
    const countriesToSearch = props.countriesToSearch;
    const [isShowPanel, setIsShowPanel] = useState(false)
    const handleFilterClick = () => {
        // setIsShowPanel(true);
        setIsShowPanel(!isShowPanel);
    }
    const handleSearch = e => {
        const searchedCountry = e.target.value;
        countriesToSearch.forEach(countryToSearch => {
            if (countryToSearch.name.toLowerCase().includes(searchedCountry.toLowerCase())) {
                console.log(searchedCountry);
            }
        })
    }
    return (
        <>
            <div className="md:flex md:justify-between md:items-center">
                <input type="text" placeholder="Search country" className="rounded-md w-full md:w-auto border-none p-2 shadow-lg focus:outline-none" onChange={(e) => handleSearch(e)} />
                <div className="bg-white shadow-lg p-2 relative cursor-pointer rounded-md" onClick={handleFilterClick}>
                    Filter by region <i className="ml-8 fa fa-chevron-down"></i>

                    {isShowPanel ? <ul className="absolute p-2 w-full bg-gray-200 rounded-md shadow-lg top-full list-none">
                        <li className="my-5 mx-0">Africa</li>
                        <li className="my-5 mx-0">Americas</li>
                        <li className="my-5 mx-0">Asia</li>
                        <li className="my-5 mx-0">Europe</li>
                        <li className="my-5 mx-0">Oceania</li>
                    </ul> : <ul className="absolute p-2 w-full bg-gray-200 rounded-md shadow-lg top-full list-none hidden">
                            <li className="my-5 mx-0">Africa</li>
                            <li className="my-5 mx-0">Americas</li>
                            <li className="my-5 mx-0">Asia</li>
                            <li className="my-5 mx-0">Europe</li>
                            <li className="my-5 mx-0">Ocean</li>
                        </ul>}
                </div>
            </div>
        </>
    );
}

export default Navbar;