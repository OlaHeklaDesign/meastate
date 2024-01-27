import React, { useContext, useState } from 'react';
import './HeroSearchBar.css';
import arrow from '../Assets/arrow-searchbar.svg';
import { SearchContext } from '../../Context/SearchContext/SearchContext';
import { useNavigate } from 'react-router-dom';



const HeroSearchBar = () => {

  const {onFilterChange, filters, onSearch } = useContext(SearchContext);

  const navigate = useNavigate();

  const handleSearchFromHero = () => {
    onSearch();
    navigate('/search');
  };

  return (
    <div className='herosearchbar'>
      <div className="herosearchbar-offer-container">
        <div>
          <p>buy</p>
          <img src={arrow} alt="arrow" />
        </div>
        <ul>
          <li>
            <label>
            <input    type="radio"
                      name="service"
                      value="rent"
                      onChange={() => onFilterChange({ target: { name: 'service', value: 'rent' }})}/>
              Rent
            </label>
          </li>
          <li>
            <label>
            <input    type="radio"
                      name="service"
                      value="sell"
                      onChange={() => onFilterChange({ target: { name: 'service', value: 'sell' }})}/>
              Buy
            </label>
          </li>
        </ul>
      </div>
      <div className="herosearchbar-location-container">
        <p className='herosearchbar-title'>Location</p>
        <input type="text" placeholder='Warsaw' onChange={(e) => onFilterChange({ target: { name: 'location', value: e.target.value } })}/>
      </div>
      <div className="herosearchbar-market-container">
        <div>
          <p className='herosearchbar-title'>Market</p>
          <div>
            <p className='herosearchbar-seletor-title'>Primary</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <ul>
          <li>
            <label>
            <input    type="radio"
                      name="market"
                      value="primary"
                      onChange={() => onFilterChange({ target: { name: 'market', value: 'primary' }})}/>
              Primary
            </label>
          </li>
          <li>
            <label>
            <input    type="radio"
                      name="market"
                      value="secondary"
                      onChange={() => onFilterChange({ target: { name: 'market', value: 'secondary' }})}/>
              Secondary
            </label>
          </li>
        </ul>
      </div>
      <div className="herosearchbar-price-container">
        <div>
          <p className='herosearchbar-title'>Price</p>
          <div>
            <p className='herosearchbar-seletor-title'>400K - 700K</p>
            <img src={arrow} alt="" />
          </div>
        </div>
        <ul>
          <li>
            <label>
            <input    type="text"
                      name="minPrice"
                      placeholder='from'
                      onChange={(e) => onFilterChange({ target: { name: 'minPrice', value: e.target.value } })}/>            
            </label>
          </li>
          <li>
            <label>
            <input    type="text"
                      name="maxPrice"
                      placeholder='to'
                      onChange={(e) => onFilterChange({ target: { name: 'maxPrice', value: e.target.value } })}/>
            </label>
          </li>
        </ul>
      </div>
      <button onClick={handleSearchFromHero}>search</button>
    </div>
  )
}

export default HeroSearchBar