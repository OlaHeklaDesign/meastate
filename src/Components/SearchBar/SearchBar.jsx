import React, { useState, useContext, useRef } from 'react';
import './SearchBar.css';
import arrow from '../Assets/arrow-searchbar.svg';
import { SearchContext } from '../../Context/SearchContext/SearchContext';


const SearchBar = () => {

  const {onFilterChange, onSearch} = useContext(SearchContext);

  const [dropdownServiceOpen, setDropdownServiceOpen] = useState(false);

  const dropdownServiceRef = useRef();
  const searchItemServiceRef = useRef();

  window.addEventListener('click', (e) => {
    if(e.target !== dropdownServiceRef.current && e.target !== searchItemServiceRef.current) {
      setDropdownServiceOpen(false);
    }
  })

  const [dropdownMarketOpen, setDropdownMarketOpen] = useState(false);

  const dropdownMarketRef = useRef();
  const searchItemMarketRef = useRef();

  window.addEventListener('click', (e) => {
    if(e.target !== dropdownMarketRef.current && e.target !== searchItemMarketRef.current) {
      setDropdownMarketOpen(false);
    }
  })

  const [dropdownPriceOpen, setDropdownPriceOpen] = useState(false);

  const searchItemPriceRef = useRef();
  const minpriceInputRef = useRef();
  const maxpriceInputRef = useRef();

  window.addEventListener('click', (e) => {
    if(e.target !== searchItemPriceRef.current && e.target !== minpriceInputRef.current && e.target !== maxpriceInputRef.current ) {
      setDropdownPriceOpen(false);
    }
  })

  const [dropdownSurfaceOpen, setDropdownSurfaceOpen] = useState(false);

  const searchItemSurfaceRef = useRef();
  const minsurfaceInputRef = useRef();
  const maxsurfaceInputRef = useRef();

  window.addEventListener('click', (e) => {
    if(e.target !== searchItemSurfaceRef.current && e.target !== minsurfaceInputRef.current && e.target !== maxsurfaceInputRef.current ) {
      setDropdownSurfaceOpen(false);
    }
  })


  return (
    <div className='searchbar'>
      <div className="searchbar-offer-container">
        <div onClick={() => {setDropdownServiceOpen(!dropdownServiceOpen)}} ref= {searchItemServiceRef}>
          <p>buy</p>
          <img src={arrow} alt="arrow" />
        </div>
        {dropdownServiceOpen &&
        <ul ref= {dropdownServiceRef}>
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
        </ul>}
      </div>
      <div className="searchbar-location-container">
        <p className='searchbar-title'>Location</p>
        <input type="text" name="location" placeholder='Warsaw'   onChange={(e) => onFilterChange({ target: { name: 'location', value: e.target.value } })}/> 
      </div>
      <div className="searchbar-surface-container">
        <div>
          <p className='searchbar-title'>Surface Footage</p>
          <div onClick={() => {setDropdownSurfaceOpen(!dropdownSurfaceOpen)}} ref= {searchItemSurfaceRef}>
            <p className='searchbar-seletor-title'>40SQFT-70SQFT</p>
            <img src={arrow} alt="" />
          </div>
        </div>
        {dropdownSurfaceOpen &&
        <ul>
          <li>
            <label>
              <input  type="text"
                      name="minSurface"
                      placeholder='from'
                      ref= {minsurfaceInputRef}
                      onChange={(e) => onFilterChange({ target: { name: 'minSurface', value: e.target.value } })}/> 
            </label>
          </li>
          <li>
            <label>
              <input  type="text"
                      name="maxSurface"
                      placeholder='to'
                      ref= {maxsurfaceInputRef}
                      onChange={(e) => onFilterChange({ target: { name: 'maxSurface', value: e.target.value } })}/> 
            </label>
          </li>
        </ul>}
      </div>
      <div className="searchbar-market-container">
        <div>
          <p className='searchbar-title'>Market</p>
          <div onClick={() => {setDropdownMarketOpen(!dropdownMarketOpen)}} ref= {searchItemMarketRef}>
            <p className='searchbar-seletor-title'>Primary</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        {dropdownMarketOpen &&
        <ul ref= {dropdownMarketRef}>
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
        </ul>}
      </div>
      <div className="searchbar-price-container">
        <div>
          <p className='searchbar-title'>Price</p>
          <div onClick={() => {setDropdownPriceOpen(!dropdownPriceOpen)}} ref= {searchItemPriceRef}>
            <p className='searchbar-seletor-title'>400K - 700K</p>
            <img src={arrow} alt="" />
          </div>
        </div>
        {dropdownPriceOpen &&
        <ul>
          <li>
            <label>
              <input  type="text"
                      name="minPrice"
                      placeholder='from'
                      ref= {minpriceInputRef}
                      onChange={(e) => onFilterChange({ target: { name: 'minPrice', value: e.target.value } })}/> 
            </label>
          </li>
          <li>
            <label>
              <input  type="text"
                      name="maxPrice"
                      placeholder='to'
                      ref= {maxpriceInputRef}
                      onChange={(e) => onFilterChange({ target: { name: 'maxPrice', value: e.target.value } })}/> 
            </label>
          </li>
        </ul>}
      </div>
      <button onClick={onSearch}>search</button>
    </div>
  )
}

export default SearchBar