import React from 'react';
import './Preview.css';
import myPhoto from './images/car.jpeg';


const AdPreview = () => {
  return (
    <div className="ad-preview">
      <div className="ad-header">
        <div className="ad-title">Market Ease Plus</div>
        <div className="ad-sponsor">Sponsored</div>
      </div>
      <div className="ad-content">
        <div className="ad-image">
          <img src={myPhoto} alt="Best Quality Mehran" />
        </div>
        <div className="ad-details">
          <h3>Best Quality Mehran</h3>
          <p>Advertisement</p>
        </div>
      </div>
      <div className="ad-contact">
        <button>Contact us</button>
      </div>
      <div className="ad-actions">
        <div className="like">Like</div>
        <div className="comment">Comment</div>
        <div className="share">Share</div>
      </div>
    </div>
  );
};

export default AdPreview;