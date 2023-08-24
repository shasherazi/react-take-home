import React from 'react';
import '../styles/OfferHeader.css'

export const OfferHeader = ({ campaign_icon_url, campaign_name, pay_per_install }) => {
  return (
    <div className="offer-header">
      <img src={campaign_icon_url} alt="icon" className='offer-header-icon'/>
      <div className="offer-header-text">
        <h2>{campaign_name}</h2>
        <h3 className='offer-header-per-install'>{pay_per_install} per install</h3>
      </div>
    </div>
  );
}
