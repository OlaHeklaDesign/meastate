import React, { useState, useContext, useRef } from 'react';
import './SearchBar.css';
import arrow from '../Assets/arrow-searchbar.svg';
import { SearchContext } from '../../Context/SearchContext/SearchContext';


const SearchBar = () => {

  const {onFilterChange, onSearch, filters, errorSurface, errorPrice, minpriceInputRef, maxpriceInputRef, minsurfaceInputRef, maxsurfaceInputRef} = useContext(SearchContext);

  const [dropdownServiceOpen, setDropdownServiceOpen] = useState(false);

  const dropdownServiceRentRef = useRef();
  const dropdownServiceSellRef = useRef();
  const searchItemServiceRef = useRef();

  window.addEventListener('click', (e) => {
    if(e.target !== searchItemServiceRef.current && e.target !== dropdownServiceSellRef.current && e.target !== dropdownServiceRentRef.current) {
      setDropdownServiceOpen(false);
    }
  })

  const [dropdownMarketOpen, setDropdownMarketOpen] = useState(false);

  const dropdownMarketPrimaryRef = useRef();
  const dropdownMarketSecondaryRef = useRef();
  const searchItemMarketRef = useRef();

  window.addEventListener('click', (e) => {
    if(e.target !== searchItemMarketRef.current && e.target !== dropdownMarketPrimaryRef.current && e.target !== dropdownMarketSecondaryRef.current) {
      setDropdownMarketOpen(false);
    }
  })

  const [dropdownPriceOpen, setDropdownPriceOpen] = useState(false);

  const searchItemPriceRef = useRef();

  window.addEventListener('click', (e) => {
    if(e.target !== searchItemPriceRef.current && e.target !== minpriceInputRef.current && e.target !== maxpriceInputRef.current ) {
      setDropdownPriceOpen(false);
    }
  })

  const [dropdownSurfaceOpen, setDropdownSurfaceOpen] = useState(false);

  const searchItemSurfaceRef = useRef();

  window.addEventListener('click', (e) => {
    if(e.target !== searchItemSurfaceRef.current && e.target !== minsurfaceInputRef.current && e.target !== maxsurfaceInputRef.current ) {
      setDropdownSurfaceOpen(false);
    }
  })


  return (
    <div className="searchbar-container">
      <div className='searchbar'>
      <div className="searchbar-offer-container">
        <div onClick={() => {setDropdownServiceOpen(!dropdownServiceOpen)}} ref= {searchItemServiceRef}>
          <p>{filters.service}</p>
          <img src={arrow} alt="arrow" />
        </div>
        {dropdownServiceOpen &&
        <ul>
          <li>
            <label ref={dropdownServiceRentRef} className={filters.service === "rent" ? 'selected' : ''}>
              <input  type="radio"
                      name="service"
                      value="rent"
                      onChange={() => onFilterChange({ target: { name: 'service', value: 'rent' }})}/>
              Rent
            </label>
          </li>
          <li>
            <label ref={dropdownServiceSellRef} className={filters.service === "sell" ? 'selected' : ''}>
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
        <input type="text" name="location" placeholder={filters.location}   onChange={(e) => onFilterChange({ target: { name: 'location', value: e.target.value } })}/> 
      </div>
      <div className="searchbar-surface-container">
        <div>
          <p className='searchbar-title'>Surface Footage</p>
          <div onClick={() => {setDropdownSurfaceOpen(!dropdownSurfaceOpen)}} ref= {searchItemSurfaceRef}>
            <p className='searchbar-seletor-title'>
            {filters.minSurface && filters.maxSurface
            ? `${filters.minSurface}SQFT-${filters.maxSurface}SQFT`
            : !filters.minSurface && filters.maxSurface
            ? `TO ${filters.maxSurface}SQFT`
            : filters.minSurface && !filters.maxSurface
            ? `FROM ${filters.minSurface}SQFT`
            : '40SQFT-70SQFT'}
            </p>
            <img src={arrow} alt="" />
          </div>
        </div>
        {dropdownSurfaceOpen &&
        <ul>
          <li>
            <label>
              <input  type="text"
                      name="minSurface"
                      placeholder={`from ${filters.minSurface}m2`}
                      ref= {minsurfaceInputRef}
                      onChange={(e) => onFilterChange({ target: { name: 'minSurface', value: e.target.value } })}/> 
            </label>
          </li>
          <li>
            <label>
              <input  type="text"
                      name="maxSurface"
                      placeholder={`to ${filters.maxSurface}m2`}
                      ref= {maxsurfaceInputRef}
                      onChange={(e) => onFilterChange({ target: { name: 'maxSurface', value: e.target.value } })}
                      /> 
            </label>
          </li>
          <p className='searchbar-validation'>{errorSurface}</p>
        </ul>}
      </div>
      <div className="searchbar-market-container">
        <div>
          <p className='searchbar-title'>Market</p>
          <div onClick={() => {setDropdownMarketOpen(!dropdownMarketOpen)}} ref= {searchItemMarketRef}>
            <p className='searchbar-seletor-title'>{filters.market}</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        {dropdownMarketOpen &&
        <ul>
          <li>
            <label ref={dropdownMarketPrimaryRef} className={filters.market === "primary" ? 'selected' : ''}>
              <input  type="radio"
                      name="market"
                      value="primary"
                      onChange={(e) => onFilterChange({ target: { name: 'market', value: 'primary' } })} />
              Primary
            </label>
          </li>
          <li>
            <label ref={dropdownMarketSecondaryRef} className={filters.market === "secondary" ? 'selected' : ''}>
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
            <p className='searchbar-seletor-title'>
            {filters.minPrice && filters.maxPrice
            ? `${filters.minPrice}$-${filters.maxPrice}$`
            : !filters.minPrice && filters.maxPrice
            ? `TO ${filters.maxPrice}$`
            : filters.minPrice && !filters.maxPrice
            ? `FROM ${filters.minPrice}$`
            : 'Choose price range'}
            </p>
            <img src={arrow} alt="" />
          </div>
        </div>
        {dropdownPriceOpen &&
        <ul>
          <li>
            <label>
              <input  type="number"
                      name="minPrice"
                      placeholder={`from ${filters.minPrice}$`}
                      ref= {minpriceInputRef}
                      onChange={(e) => onFilterChange({ target: { name: 'minPrice', value: e.target.value } })}/> 
            </label>
          </li>
          <li>
            <label>
              <input  type="number"
                      name="maxPrice"
                      placeholder={`to ${filters.maxPrice}$`}
                      ref= {maxpriceInputRef}
                      onChange={(e) => onFilterChange({ target: { name: 'maxPrice', value: e.target.value } })}/> 
            </label>
          </li>
          <p className='searchbar-validation'>{errorPrice}</p>
        </ul>}
      </div>
      <button onClick={onSearch}>search</button>
      </div>
      <p className='herosearchbar-search-validation right'></p>
    </div>
  )
}

export default SearchBar