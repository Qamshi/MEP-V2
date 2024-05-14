import React, {useState} from 'react';
import './Preview.css';
import { useTextareaContext } from './TextareaProvider'; // Import the context

const AdPreview = () => {
  // Get the required values from context
  const { imageURL, productName, productDescription } = useTextareaContext();

  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxLines = 6;
  const description = productDescription.split('\n');
  const truncatedDescription = description.slice(0, maxLines).join('\n');
  const isDescriptionTruncated = description.length > maxLines;

  const handleSeeMoreClick = () => {
    setShowFullDescription(true);
  };
  return (
    <div className="ad-preview" style={{maxWidth:'100%'}}>
    {/* <div className="ad-preview"> */}
      <div className="ad-header">
        <div className="ad-title">Market Ease Plus</div>
        <div className="ad-sponsor">Sponsored</div>
      </div>
      <div className="ad-content">
        {imageURL ? ( // Conditionally render the image
          <div className="ad-image">
            <img src={imageURL} alt={productName || 'Ad Image'}  style={{maxWidth:'300%', height:"auto", width:'270px'}} />
          </div>
        ) : (
          <div className="ad-image" style={{ height: '0', visibility: 'hidden' }}></div> // Placeholder to maintain layout
        )}
        <div className="ad-details">
          {/* Display product name and description */}
          <h3 style={{ fontSize: "clamp(16px, 3vw, 20px)" }}>{productName || 'Product Name'}</h3>
          {/* <h3>{productName || 'Product Name'}</h3> */}
          <p>
            {showFullDescription ? productDescription : truncatedDescription}
            {isDescriptionTruncated && !showFullDescription && <span style={{cursor:'pointer'}} onClick={handleSeeMoreClick} className="see-more">See more </span>}
          </p>
          {/* <p>{productDescription || 'Advertisement'}</p> */}
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
