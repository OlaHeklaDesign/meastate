import React from 'react';
import './SearchOfferts.css';
import OffertItem from '../OffertItem/OffertItem';

const SearchOfferts = ({ filteredOffers }) => {
  return (
    <div className='searchofferts'>
      <h2>Search property</h2>
      <p className='searchofferts-resultcount'>{filteredOffers.length} results</p>
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
