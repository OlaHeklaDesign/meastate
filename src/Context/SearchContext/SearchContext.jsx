import React, { useState, createContext, useEffect } from 'react';
import all_offers from '../../Components/Assets/all_offers';


export const SearchContext = createContext(null);


const SearchContextProvider = (props) => {
  const [filteredOffers, setFilteredOffers] = useState(all_offers);
  const [filters, setFilters] = useState({
    service: 'rent',
    location: 'Warsaw',
    minSurface: '',
    maxSurface: '',
    market: 'primary',
    minPrice: '',
    maxPrice: '',
  });

  const onFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const onSearch = () => {
    console.log('Filters:', filters);
  
    const filteredResults = all_offers.filter((offer) => {
      console.log('Checking offer:', offer);
  
      if (filters.service && filters.service !== offer.offer) {
        console.log('Nie spełnia warunku service', offer, 'service');
        return false;
      }
  
      if (filters.location && !offer.location.toLowerCase().includes(filters.location.toLowerCase())) {
        console.log('Nie spełnia warunku location', offer, 'location');
        return false;
      }
  
      if (
        (filters.minSurface && offer.surface < filters.minSurface) ||
        (filters.maxSurface && offer.surface > filters.maxSurface)
      ) {
        console.log('Nie spełnia warunku min/max surface', offer, 'surface');
        return false;
      }
  
      if (filters.market && filters.market !== offer.market) {
        console.log('Nie spełnia warunku market', offer, 'market');
        return false;
      }
  
      if (
        (filters.minPrice && offer.price < filters.minPrice) ||
        (filters.maxPrice && offer.price > filters.maxPrice)
      ) {
        console.log('Nie spełnia warunku min/max price', offer, 'price');
        return false;
      }
  
      return true;
    });
  
    console.log('Filtered results:', filteredResults);
  
    setFilteredOffers(filteredResults);
  };
  
  
  const contextValue = {setFilteredOffers, setFilters, onSearch, onFilterChange, filteredOffers, filters};

  

  return (
    <SearchContext.Provider value={contextValue}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider