import React from 'react';
import './SearchBar.css';
import arrow from '../Assets/arrow-searchbar.svg';


const SearchBar = () => {
  return (
    <div className='searchbar'>
      <div className="searchbar-inputs">
        <div className="searchbar-offer-box">
          <p>BUY</p>
          <img src={arrow} alt="arrow" />
        </div>
        <div className="searchbar-location-box">
          <p>Location</p>
          <input type="text" placeholder='Warsaw' />
        </div>
        <div className="searchbar-surface-box">
          <p>square footage</p>
          <div>
            <p>50sqft-70sqft</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="searchbar-market-box">
          <p>market</p>
          <div>
            <p>primary</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="searchbar-price-box">
          <p>price</p>
          <div>
            <p>500K - 700K</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <button>search</button>
    </div>
  )
}

export default SearchBar
