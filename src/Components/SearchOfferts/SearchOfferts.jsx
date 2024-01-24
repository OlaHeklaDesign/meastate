import React from 'react';
import './SearchOfferts.css';
import OffertItem from '../OffertItem/OffertItem';
import all_offers from '../Assets/all_offers';

const SearchOfferts = () => {
  return (
    <div className='searchofferts'>
      <h2>Search property</h2>
      <p className='searchofferts-resultcount'>26 results</p>
      <div className="searchpage-offerts">
        {all_offers.map((property, index) => (
          <OffertItem key={index} offer={property.offer} main_image={property.main_image} location={property.location} surface={property.surface} bedrooms={property.bedrooms} bathrooms={property.bathrooms} parking={property.parking} price={property.price} id={property.id} additionalImages={property.additionalImages} floorPlan={property.floorPlan} agentId={property.agentId} description={property.description} />
        ))}
      </div>
    </div>
  )
}

export default SearchOfferts