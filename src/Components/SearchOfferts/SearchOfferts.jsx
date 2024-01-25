import React from 'react';
import './SearchOfferts.css';
import OffertItem from '../OffertItem/OffertItem';
import arrow from '../Assets/arrow-searchbar.svg';

const SearchOfferts = ({ filteredOffers }) => {
  return (
    <div className='searchofferts'>
      <div className="searchofferts-firstline">
        <div className="searchofferts-title-count">
          <h2>Search property</h2>
          <p className='searchofferts-resultcount'>{filteredOffers.length} results</p>
        </div>
        <div className="searchofferts-sort-container">
          <div>
            <p>Sort</p>
            <img src={arrow} alt="arrow" />
          </div>
          <ul>
            <li>
              <label>
                <input type="radio" />
                price descending
              </label>
            </li>
            <li>
              <label>
                <input type="radio" />
                price ascending
              </label>
            </li>
            <li>
              <label>
                <input type="radio" />
                surface descending
              </label>
            </li>
            <li>
              <label>
                <input type="radio" />
                surface ascending
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="searchpage-offerts">
        {filteredOffers.map((property, index) => (
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
