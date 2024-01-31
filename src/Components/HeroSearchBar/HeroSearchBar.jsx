import React, { useContext, useRef, useState } from 'react';
import './HeroSearchBar.css';
import arrow from '../Assets/arrow-searchbar.svg';
import { SearchContext } from '../../Context/SearchContext/SearchContext';
import { useNavigate } from 'react-router-dom';



const HeroSearchBar = () => {

  const {onFilterChange, filters, onSearch, errorPrice, setErrorPrice, minpriceInputRef, maxpriceInputRef } = useContext(SearchContext);

  const navigate = useNavigate();

  const handleSearchFromHero = () => {
    if (
      (errorPrice)) {
      document.querySelector('.herosearchbar-search-validation').innerHTML = `${errorPrice}`;
      return false;
    } else {
    onSearch();
    navigate('/meastate/search');
    setErrorPrice('');
    }
  };

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

  return (
    <div className="herosearchbar-container">
      <div className='herosearchbar'>
        <div className="herosearchbar-offer-container">
          <div onClick={() => {setDropdownServiceOpen(!dropdownServiceOpen)}} ref= {searchItemServiceRef}>
            <p>{filters.service}</p>
            <img src={arrow} alt="arrow" />
          </div>
          {dropdownServiceOpen &&
          <ul>
            <li>
              <label ref= {dropdownServiceRentRef} className={filters.service === "rent" ? 'selected' : ''}>
              <input    type="radio"
                        name="service"
                        value="rent"
                        onChange={() => onFilterChange({ target: { name: 'service', value: 'rent' }})}
                        onClick={() => setDropdownServiceOpen(false)}/>
                Rent
              </label>
            </li>
            <li>
              <label ref= {dropdownServiceSellRef} className={filters.service === "sell" ? 'selected' : ''}>
              <input    type="radio"
                        name="service"
                        value="sell"
                        onChange={() => onFilterChange({ target: { name: 'service', value: 'sell' }})}
                        onClick={() => setDropdownServiceOpen(false)}/>
                Buy
              </label>
            </li>
          </ul>}
        </div>
        <div className="herosearchbar-location-container">
          <p className='herosearchbar-title'>Location</p>
          <input type="text" placeholder='Warsaw' onChange={(e) => onFilterChange({ target: { name: 'location', value: e.target.value } })}/>
        </div>
        <div className="herosearchbar-market-container">
          <div>
            <p className='herosearchbar-title'>Market</p>
            <div onClick={() => {setDropdownMarketOpen(!dropdownMarketOpen)}} ref= {searchItemMarketRef}>
              <p className='herosearchbar-seletor-title'>{filters.market}</p>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          {dropdownMarketOpen &&
          <ul>
            <li>
              <label ref={dropdownMarketPrimaryRef} className={filters.market === "primary" ? 'selected' : ''}>
              <input    type="radio"
                        name="market"
                        value="primary"
                        onChange={() => onFilterChange({ target: { name: 'market', value: 'primary' }})}
                        onClick={() => setDropdownMarketOpen(false)}/>
                Primary
              </label>
            </li>
            <li>
              <label ref={dropdownMarketSecondaryRef} className={filters.market === "secondary" ? 'selected' : ''}>
              <input    type="radio"
                        name="market"
                        value="secondary"
                        onChange={() => onFilterChange({ target: { name: 'market', value: 'secondary' }})}
                        onClick={() => setDropdownMarketOpen(false)}/>
                Secondary
              </label>
            </li>
          </ul>}
        </div>
        <div className="herosearchbar-price-container">
          <div>
            <p className='herosearchbar-title'>Price</p>
            <div onClick={() => {setDropdownPriceOpen(!dropdownPriceOpen)}} ref= {searchItemPriceRef}>
              <p className='herosearchbar-seletor-title'>
              {filters.minPrice && filters.maxPrice
              ? `${filters.minPrice}$-${filters.maxPrice}$`
              : !filters.minPrice && filters.maxPrice
              ? `TO ${filters.maxPrice}$`
              : filters.minPrice && !filters.maxPrice
              ? `FROM ${filters.minPrice}$`
              : 'price range'}
              </p>
              <img src={arrow} alt="" />
            </div>
          </div>
          {dropdownPriceOpen &&
          <ul>
            <li>
              <label>
              <input    type="number"
                        name="minPrice"
                        placeholder={`from ${filters.minPrice}$`}
                        ref= {minpriceInputRef}
                        onChange={(e) => onFilterChange({ target: { name: 'minPrice', value: e.target.value } })}/>           
              </label>
            </li>
            <li>
              <label>
              <input    type="number"
                        name="maxPrice"
                        placeholder={`to ${filters.maxPrice}$`}
                        ref= {maxpriceInputRef}
                        onChange={(e) => onFilterChange({ target: { name: 'maxPrice', value: e.target.value } })}/>
              </label>
            </li>
            <p className='searchbar-validation'>{errorPrice}</p>
          </ul>}
        </div>
        <button onClick={handleSearchFromHero}>search</button>
      </div>
      <p className='herosearchbar-search-validation'></p>
    </div>
  )
}

export default HeroSearchBar