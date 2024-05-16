import React, {useState} from 'react';
import './Preview.css';
import commentIcon from './images/comment.png';
import likeIcon from './images/like.png';
import moreIcon from './images/more.png';
import shareIcon from './images/share.png';
import { useTextareaContext } from './TextareaProvider'; // Import the context

const AdPreview2 = () => {
  const { imageURL, productName, productDescription } = useTextareaContext();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxLines = 4;
  const description = productDescription.split('\n');
  const truncatedDescription = description.slice(0, maxLines).join('\n');
  const isDescriptionTruncated = description.length > maxLines;

  const handleSeeMoreClick = () => {
    setShowFullDescription(true);
  };

  const actionButtonStyles = {
    width: '20px',
    marginLeft: '50px',
  };

  const likeButtonStyles = {
    ...actionButtonStyles,
    marginTop: '-96px',
  };

  const commentButtonStyles = {
    ...actionButtonStyles,
    marginTop: '10px',
  };

  const shareButtonStyles = {
    ...actionButtonStyles,
    marginTop: '8px',
  };

  const moreButtonStyles = {
    ...actionButtonStyles,
  };

  return (
    <div className="ad-preview" style={{maxWidth:'100%'}}>
    {/* <div className="ad-preview"> */}
      <div className="ad-content">
        <div className="ad-image">
        <img src={imageURL} alt={productName || 'Ad Image'}  />
        </div>
        <div className="ad-details">
        <h3 style={{ fontSize: "clamp(16px, 3vw, 20px)" }}>{productName || 'Product Name'}</h3>
        {/* <h3>{productName || 'Product Name'}</h3> */}
        <p>
            {showFullDescription ? productDescription : truncatedDescription}
            {isDescriptionTruncated && !showFullDescription && <span style={{cursor:'pointer'}} onClick={handleSeeMoreClick} className="see-more">See more</span>}
          </p>
        {/* <p>{productDescription || 'Advertisement'}</p> */}
          <div className="like" style={likeButtonStyles}>
            <img src={likeIcon} alt="Like" />
          </div>
          <div className="comment" style={commentButtonStyles}>
            <img src={commentIcon} alt="Comment" />
          </div>
          <div className="share" style={shareButtonStyles}>
            <img src={shareIcon} alt="Share" />
          </div>
          <div className="more" style={moreButtonStyles}>
            <img src={moreIcon} alt="More" />
          </div>
        </div>
      </div>
      <div className="ad-contact">
        <button>Contact us</button>
      </div>
      {/* <div className="sponsored-text">
        <button>Sponsored</button>
        </div> */}
    </div>
  );
};

export default AdPreview2;