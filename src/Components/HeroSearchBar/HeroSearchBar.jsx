import React from 'react';
import './HeroSearchBar.css';
import arrow from '../Assets/arrow-searchbar.svg';



const HeroSearchBar = () => {
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
              <input type="radio" />
              Rent
            </label>
          </li>
          <li>
            <label>
              <input type="radio" />
              Buy
            </label>
          </li>
        </ul>
      </div>
      <div className="herosearchbar-location-container">
        <p className='herosearchbar-title'>Location</p>
        <input type="text" placeholder='Warsaw' />
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
              <input type="radio" />
              Primary
            </label>
          </li>
          <li>
            <label>
              <input type="radio" />
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
              <input type="text" placeholder='400K' />
            </label>
          </li>
          <li>
            <label>
              <input type="text" placeholder='700K' />
            </label>
          </li>
        </ul>
      </div>
      <button>search</button>
    </div>
  )
}

export default HeroSearchBar