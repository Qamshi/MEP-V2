// 
// 

import React from 'react';
import './Preview.css';
import myPhoto from './images/car.jpeg';
import commentIcon from './images/comment.png';
import likeIcon from './images/like.png';
import moreIcon from './images/more.png';
import shareIcon from './images/share.png';

const AdPreview2 = () => {
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
    <div className="ad-preview">
      <div className="ad-content">
        <div className="ad-image">
          <img src={myPhoto} alt="Best Quality Mehran" />
        </div>
        <div className="ad-details">
          <h3>Market Ease Plus</h3>
          <p>Advertisement...more</p>
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