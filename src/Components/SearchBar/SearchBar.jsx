import React, { useState, useContext } from 'react';
import './SearchBar.css';
import arrow from '../Assets/arrow-searchbar.svg';
import { SearchContext } from '../../Context/SearchContext/SearchContext';


const SearchBar = () => {

  const {onFilterChange, onSearch} = useContext(SearchContext);


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
                      onChange={() => onFilterChange({ target: { name: 'service', value: 'rent' }})}/>
              Rent
            </label>
          </li>
          <li>
            <label>
              <input  type="radio"
                      name="service"
                      value="sell"
                      onChange={() => onFilterChange({ target: { name: 'service', value: 'sell' }})}/>
              Buy
            </label>
          </li>
        </ul>
      </div>
      <div className="searchbar-location-container">
        <p className='searchbar-title'>Location</p>
        <input type="text" name="location" placeholder='Warsaw'   onChange={(e) => onFilterChange({ target: { name: 'location', value: e.target.value } })}/> 
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
                      onChange={(e) => onFilterChange({ target: { name: 'minSurface', value: e.target.value } })}/> 
            </label>
          </li>
          <li>
            <label>
              <input  type="text"
                      name="maxSurface"
                      placeholder='to'
                      onChange={(e) => onFilterChange({ target: { name: 'maxSurface', value: e.target.value } })}/> 
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
                      onChange={(e) => onFilterChange({ target: { name: 'market', value: 'primary' } })} />
              Primary
            </label>
          </li>
          <li>
            <label>
              <input  type="radio"
                      name="market"
                      value="secondary"
                      onChange={(e) => onFilterChange({ target: { name: 'market', value: 'secondary' } })} />

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
                      onChange={(e) => onFilterChange({ target: { name: 'minPrice', value: e.target.value } })}/> 
            </label>
          </li>
          <li>
            <label>
              <input  type="text"
                      name="maxPrice"
                      placeholder='to'
                      onChange={(e) => onFilterChange({ target: { name: 'maxPrice', value: e.target.value } })}/> 
            </label>
          </li>
        </ul>
      </div>
      <button onClick={onSearch}>search</button>
    </div>
  )
}

export default SearchBar