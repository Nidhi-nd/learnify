import React, { useState } from "react";
import "./CourseCard.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const CourseCard = ({
  thumbnail,
  title,
  instructor,
  duration,
  rating,
  price,
  onEnroll
}) => {
  const [wishlist, setWishlist] = useState(false);

  const toggleWishlist = () => {
    setWishlist(!wishlist);
  };

  return (
    <div className="course-card">
      <div className="thumbnail-container">
        <img src={thumbnail} alt={`${title} thumbnail`} className="thumbnail" />
        <div className="wishlist-icon" onClick={toggleWishlist} aria-label="Add to Wishlist">
          {wishlist ? <FaHeart color="red" /> : <FaRegHeart />}
        </div>
      </div>
      <div className="course-info">
        <h3 className="course-title">{title}</h3>
        <p className="course-instructor">By {instructor}</p>
        <p className="course-duration">Duration: {duration}</p>
        <p className="course-rating-price">
          <span className="rating">⭐ {rating}</span>
          <span className="price">${price}</span>
        </p>
        <button className="enroll-button" onClick={onEnroll}>Enroll</button>
      </div>
    </div>
  );
};

export default CourseCard;
