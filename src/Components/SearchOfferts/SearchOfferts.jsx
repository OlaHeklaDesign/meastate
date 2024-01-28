import React, { useState, useContext, useRef } from 'react';
import './SearchOfferts.css';
import OffertItem from '../OffertItem/OffertItem';
import arrow from '../Assets/arrow-searchbar.svg';
import { SearchContext } from '../../Context/SearchContext/SearchContext';


  const SearchOfferts = () => {

    const {filteredOffers} = useContext(SearchContext);


    const [sortingOption, setSortingOption] = useState(null);
  
    const handleSortChange = (event) => {
      setSortingOption(event.target.value);
      console.log(`Kliknięto: ${event.target.value}`);
    };
  
    const sortOffers = (offers) => {
      if (sortingOption === 'price-desc') {
        return offers.slice().sort((a, b) => b.price - a.price);
      } else if (sortingOption === 'price-asc') {
        return offers.slice().sort((a, b) => a.price - b.price);
      } else if (sortingOption === 'surface-desc') {
        return offers.slice().sort((a, b) => b.surface - a.surface);
      } else if (sortingOption === 'surface-asc') {
        return offers.slice().sort((a, b) => a.surface - b.surface);
      } else {
        return offers;
      }
    };
  
    const sortedOffers = sortOffers(filteredOffers);

    const [dropdownSortOpen, setDropdownSortOpen] = useState(false);

    const dropdownSortRef = useRef();
    const searchItemSortRef = useRef();
    const pricedecRef = useRef();
    const priceascRef = useRef();
    const surfacedecRef = useRef();
    const surfaceascRef = useRef();


    window.addEventListener('click', (e) => {
      if(e.target !== dropdownSortRef.current 
        && e.target !== searchItemSortRef.current 
        && e.target !== pricedecRef.current 
        && e.target !== priceascRef.current 
        && e.target !== surfacedecRef.current 
        && e.target !== surfaceascRef.current) {
        setDropdownSortOpen(false);
      }
    })

  return (
    <div className='searchofferts'>
      <div className="searchofferts-firstline">
        <div className="searchofferts-title-count">
          <h2>Search property</h2>
          <p className='searchofferts-resultcount'>{sortedOffers.length} results</p>
        </div>
        <div className="searchofferts-sort-container">
          <div onClick={() => {setDropdownSortOpen(!dropdownSortOpen)}} ref={searchItemSortRef}>
            <p>Sort</p>
            <img src={arrow} alt="arrow" />
          </div>
          {dropdownSortOpen &&
          <ul ref={dropdownSortRef}>
            <li>
              <label ref= {pricedecRef} className={sortingOption === "price-desc" ? 'selected' : ''}>
                <input  type="radio"
                        name="sortOption"
                        value="price-desc"
                        checked={sortingOption === "price-desc"} 
                        onClick={() => setDropdownSortOpen(false)}
                        onChange={handleSortChange}/>
                price descending
              </label>
            </li>
            <li>
              <label ref= {priceascRef} className={sortingOption === "price-asc" ? 'selected' : ''}>
                <input  type="radio"
                        name="sortOption"
                        value="price-asc"
                        checked={sortingOption === "price-asc"}
                        onClick={() => setDropdownSortOpen(false)}
                        onChange={handleSortChange}/>
                price ascending
              </label>
            </li>
            <li>
              <label ref= {surfacedecRef} className={sortingOption === "surface-desc" ? 'selected' : ''}>
                <input  type="radio"
                        name="sortOption"
                        value="surface-desc"
                        checked={sortingOption === "surface-desc"}
                        onChange={handleSortChange}
                        onClick={() => setDropdownSortOpen(false)}/>
                surface descending
              </label>
            </li>
            <li>
              <label ref= {surfaceascRef} className={sortingOption === "surface-asc" ? 'selected' : ''}>
                <input  type="radio"
                        name="sortOption"
                        value="surface-asc"
                        checked={sortingOption === "surface-asc"}
                        onChange={handleSortChange}
                        onClick={() => setDropdownSortOpen(false)}/>
                surface ascending
              </label>
            </li>
          </ul>}
        </div>
      </div>
      <div className="searchpage-offerts">
        {sortedOffers.map((property, index) => (
          <OffertItem
            key={index}
            offer={property.offer}
            main_image={property.main_image}
            location={property.location}
            surface={property.surface}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            parking={property.parking}
            price={property.price}
            id={property.id}
            additionalImages={property.additionalImages}
            floorPlan={property.floorPlan}
            agentId={property.agentId}
            description={property.description}
            market={property.market}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchOfferts;