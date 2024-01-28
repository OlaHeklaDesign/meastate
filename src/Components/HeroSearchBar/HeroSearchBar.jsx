import React, { useContext, useRef, useState } from 'react';
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
  const minpriceInputRef = useRef();
  const maxpriceInputRef = useRef();

  window.addEventListener('click', (e) => {
    if(e.target !== searchItemPriceRef.current && e.target !== minpriceInputRef.current && e.target !== maxpriceInputRef.current ) {
      setDropdownPriceOpen(false);
    }
  })

  return (
    <div className='herosearchbar'>
      <div className="herosearchbar-offer-container">
        <div onClick={() => {setDropdownServiceOpen(!dropdownServiceOpen)}} ref= {searchItemServiceRef}>
          <p>buy</p>
          <img src={arrow} alt="arrow" />
        </div>
        {dropdownServiceOpen &&
        <ul>
          <li>
            <label ref= {dropdownServiceRentRef}>
            <input    type="radio"
                      name="service"
                      value="rent"
                      onChange={() => onFilterChange({ target: { name: 'service', value: 'rent' }})}
                      onClick={() => setDropdownServiceOpen(false)}/>
              Rent
            </label>
          </li>
          <li>
            <label ref= {dropdownServiceSellRef}>
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
            <p className='herosearchbar-seletor-title'>Primary</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        {dropdownMarketOpen &&
        <ul>
          <li>
            <label ref={dropdownMarketPrimaryRef}>
            <input    type="radio"
                      name="market"
                      value="primary"
                      onChange={() => onFilterChange({ target: { name: 'market', value: 'primary' }})}
                      onClick={() => setDropdownMarketOpen(false)}/>
              Primary
            </label>
          </li>
          <li>
            <label ref={dropdownMarketSecondaryRef}>
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
            <p className='herosearchbar-seletor-title'>400K - 700K</p>
            <img src={arrow} alt="" />
          </div>
        </div>
        {dropdownPriceOpen &&
        <ul>
          <li>
            <label>
            <input    type="text"
                      name="minPrice"
                      placeholder='from'
                      ref= {minpriceInputRef}
                      onChange={(e) => onFilterChange({ target: { name: 'minPrice', value: e.target.value } })}/>           
            </label>
          </li>
          <li>
            <label>
            <input    type="text"
                      name="maxPrice"
                      placeholder='to'
                      ref= {maxpriceInputRef}
                      onChange={(e) => onFilterChange({ target: { name: 'maxPrice', value: e.target.value } })}/>
            </label>
          </li>
        </ul>}
      </div>
      <button onClick={handleSearchFromHero}>search</button>
    </div>
  )
}

export default HeroSearchBar