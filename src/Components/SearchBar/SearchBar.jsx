import React, { useState } from 'react';
import './SearchBar.css';
import arrow from '../Assets/arrow-searchbar.svg';


const SearchBar = ({ filters, onFilterChange, onSearch }) => {

  const [selectedService, setSelectedService] = useState('');

  return (
    <div className='searchbar'>
      <div className="searchbar-offer-container">
        <div>
          <p>buy</p>
          <img src={arrow} alt="arrow" />
        </div>
        <ul>
          <li>
            <label>
              <input  type="radio"
                      name="service"
                      value="rent"
                      checked={selectedService === 'rent'}
                      onChange={() => {
                        setSelectedService('rent');
                        onFilterChange({ target: { name: 'service', value: 'rent' } });
                      }} />
              Rent
            </label>
          </li>
          <li>
            <label>
              <input  type="radio"
                      name="service"
                      value="sell"
                      checked={selectedService === 'sell'}
                      onChange={() => {
                        setSelectedService('sell');
                        onFilterChange({ target: { name: 'service', value: 'sell' } });
                      }} />
              Buy
            </label>
          </li>
        </ul>
      </div>
      <div className="searchbar-location-container">
        <p className='searchbar-title'>Location</p>
        <input type="text" name="location" placeholder='Warsaw' value={filters.location} onChange={onFilterChange} />
      </div>
      <div className="searchbar-surface-container">
        <div>
          <p className='searchbar-title'>Surface Footage</p>
          <div>
            <p className='searchbar-seletor-title'>40SQFT-70SQFT</p>
            <img src={arrow} alt="" />
          </div>
        </div>
        <ul>
          <li>
            <label>
              <input  type="text"
                      name="minSurface"
                      placeholder='from'
                      value={filters.minSurface}
                      onChange={onFilterChange} />
            </label>
          </li>
          <li>
            <label>
              <input  type="text"
                      name="maxSurface"
                      placeholder='to'
                      value={filters.maxSurface}
                      onChange={onFilterChange} />
            </label>
          </li>
        </ul>
      </div>
      <div className="searchbar-market-container">
        <div>
          <p className='searchbar-title'>Market</p>
          <div>
            <p className='searchbar-seletor-title'>Primary</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <ul>
          <li>
            <label>
              <input  type="radio"
                      name="market"
                      value="primary"
                      checked={filters.market === 'primary'}
                      onChange={onFilterChange} />
              Primary
            </label>
          </li>
          <li>
            <label>
              <input  type="radio"
                      name="market"
                      value="secondary"
                      checked={filters.market === 'secondary'}
                      onChange={onFilterChange} />
              Secondary
            </label>
          </li>
        </ul>
      </div>
      <div className="searchbar-price-container">
        <div>
          <p className='searchbar-title'>Price</p>
          <div>
            <p className='searchbar-seletor-title'>400K - 700K</p>
            <img src={arrow} alt="" />
          </div>
        </div>
        <ul>
          <li>
            <label>
              <input  type="text"
                      name="minPrice"
                      placeholder='from'
                      value={filters.minPrice}
                      onChange={onFilterChange} />
            </label>
          </li>
          <li>
            <label>
              <input  type="text"
                      name="maxPrice"
                      placeholder='to'
                      value={filters.maxPrice}
                      onChange={onFilterChange} />
            </label>
          </li>
        </ul>
      </div>
      <button onClick={onSearch}>search</button>
    </div>
  )
}

export default SearchBar