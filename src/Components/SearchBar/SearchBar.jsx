import React, { useState } from 'react';
import './SearchBar.css';
import arrow from '../Assets/arrow-searchbar.svg';


const SearchBar = ({ filters, onFilterChange, onSearch }) => {

  const [selectedService, setSelectedService] = useState('');

  return (
    <div className='searchbar'>
      <div className="searchbar-inputs">
        <div className="searchbar-offer-box">
          <div>
            <p>BUY</p>
            <img src={arrow} alt="arrow" />
          </div>
          <ul className="searchbar-offer-select">
            <li>
              <label>
                <input
                  type="radio"
                  name="service"
                  value="rent"
                  checked={selectedService === 'rent'}
                  onChange={() => {
                    setSelectedService('rent');
                    onFilterChange({ target: { name: 'service', value: 'rent' } });
                  }}
                />
                Rent
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="service"
                  value="sell"
                  checked={selectedService === 'sell'}
                  onChange={() => {
                    setSelectedService('sell');
                    onFilterChange({ target: { name: 'service', value: 'sell' } });
                  }}
                />
                Sell
              </label>
            </li>
          </ul>
        </div>
        <div className="searchbar-location-box">
          <p>Location</p>
          <input type="text" name="location" placeholder='WARSAW' value={filters.location} onChange={onFilterChange} />
        </div>
        <div className="searchbar-surface-box">
          <div>
            <p>square footage</p>
            <div>
              <p>50sqft-70sqft</p>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          <div className="searchbar-select-surface">
            <input
              type="text"
              name="minSurface"
              placeholder='from'
              value={filters.minSurface}
              onChange={onFilterChange}
            />
            <input
              type="text"
              name="maxSurface"
              placeholder='to'
              value={filters.maxSurface}
              onChange={onFilterChange}
            />
          </div>
        </div>
        <div className="searchbar-market-box">
          <div>
            <p>market</p>
            <div>
              <p>primary</p>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          <div className="searchbar-offer-select">
            <li>
              <label>
                <input
                  type="radio"
                  name="market"
                  value="primary"
                  checked={filters.market === 'primary'}
                  onChange={onFilterChange}
                />
                Primary
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="market"
                  value="secondary"
                  checked={filters.market === 'secondary'}
                  onChange={onFilterChange}
                />
                Secondary
              </label>
            </li>
          </div>
        </div>
        <div className="searchbar-price-box">
          <div>
            <p>price</p>
            <div>
              <p>500K - 700K</p>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          <div className='search-price-inputs'>
            <input
              type="text"
              name="minPrice"
              placeholder='from'
              value={filters.minPrice}
              onChange={onFilterChange}
            />
            <input
              type="text"
              name="maxPrice"
              placeholder='to'
              value={filters.maxPrice}
              onChange={onFilterChange}
            />
          </div>
        </div>
      </div>
      <button onClick={onSearch}>search</button>
    </div>
  )
}

export default SearchBar
