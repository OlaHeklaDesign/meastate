import React, { useState } from 'react';
import './SearchPage.css';
import TextBg from '../../Components/TextBg/TextBg';
import Contact from '../../Components/Contact/Contact';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SearchOfferts from '../../Components/SearchOfferts/SearchOfferts';
import all_offers from '../../Components/Assets/all_offers';

const SearchPage = () => {
  const [filteredOffers, setFilteredOffers] = useState(all_offers);
  const [filters, setFilters] = useState({
    service: 'rent',
    location: '',
    minSurface: '',
    maxSurface: '',
    market: 'primary',
    minPrice: '',
    maxPrice: '',
  });

  console.log(filters);
  

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
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
  
  
  
  

  return (
    <div className='searchpage'>
      <SearchBar filters={filters} onFilterChange={handleFilterChange} onSearch={handleSearch} />
      <SearchOfferts filteredOffers={filteredOffers} />
      <TextBg />
      <Contact />
    </div>
  );
};

export default SearchPage;
