import React, { useState, createContext, useRef } from 'react';
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

  const [errorPrice, setErrorPrice] = useState(null);
  const [errorSurface, setSurfaceError] = useState(null);

  const minpriceInputRef = useRef();
  const maxpriceInputRef = useRef();
  const minsurfaceInputRef = useRef();
  const maxsurfaceInputRef = useRef();

  const onFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));


    if (name === 'minPrice' || name === 'maxPrice') {
      if (parseFloat(minpriceInputRef.current.value) >= parseFloat(maxpriceInputRef.current.value)) {
        setErrorPrice('Minimum price must be less than maximum price.');
      } else {
        setErrorPrice(null); 
      }
  }
    if (name === 'minSurface' || name === 'maxSurface') {
      if (parseFloat(minsurfaceInputRef.current.value) >= parseFloat(maxsurfaceInputRef.current.value)) {
        setSurfaceError('Minimum surface must be less than maximum surface.');
      } else {
        setSurfaceError(null); 
      }
  }
};

  const onSearch = () => {
    console.log('Filters:', filters);

    if (errorPrice) {
      document.querySelector('.herosearchbar-search-validation').innerHTML = `${errorPrice}`;
      return false;
    } else if (errorSurface) {
      document.querySelector('.herosearchbar-search-validation').innerHTML = `${errorSurface}`;
      return false;
    }
    else {
      document.querySelector('.herosearchbar-search-validation').innerHTML = '';
      document.querySelector('.herosearchbar-search-validation').innerHTML = '';

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
  }}
  
  
  const contextValue = {setFilteredOffers, setFilters, onSearch, onFilterChange, filteredOffers, filters, errorSurface, errorPrice, setErrorPrice, minpriceInputRef, maxpriceInputRef, minsurfaceInputRef, maxsurfaceInputRef };

  return (
    <SearchContext.Provider value={contextValue}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider