import React, { useState } from 'react';
import './SearchPage.css';
import TextBg from '../../Components/TextBg/TextBg';
import Contact from '../../Components/Contact/Contact';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SearchOfferts from '../../Components/SearchOfferts/SearchOfferts';
import all_offers from '../../Components/Assets/all_offers';

const SearchPage = () => {
  return (
    <div className='searchpage'>
      <SearchBar />
      <SearchOfferts filteredOffers={all_offers} />
      <TextBg />
      <Contact />
    </div>
  );
};

export default SearchPage;