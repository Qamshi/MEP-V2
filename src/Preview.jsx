import React from 'react';
import './Preview.css';
import { useTextareaContext } from './TextareaProvider'; // Import the context

const AdPreview = () => {
  // Get the required values from context
  const { imageURL, productName, productDescription } = useTextareaContext();

  return (
    <div className="ad-preview">
      <div className="ad-header">
        <div className="ad-title">Market Ease Plus</div>
        <div className="ad-sponsor">Sponsored</div>
      </div>
      <div className="ad-content">
        {imageURL ? ( // Conditionally render the image
          <div className="ad-image">
            <img src={imageURL} alt={productName || 'Ad Image'}  />
          </div>
        ) : (
          <div className="ad-image" style={{ height: '0', visibility: 'hidden' }}></div> // Placeholder to maintain layout
        )}
        <div className="ad-details">
          {/* Display product name and description */}
          <h3>{productName || 'Product Name'}</h3>
          <p>{productDescription || 'Advertisement'}</p>
        </div>
      </div>
      <div className="ad-contact">
        <button>Contact Us</button>
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
