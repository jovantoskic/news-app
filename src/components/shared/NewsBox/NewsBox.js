import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './NewsBox.scss';

function NewsBox({ title, img, description }) {
  return (
    <div className="news-box-container">
      <div className="news-box-content">
        <h4 className="news-box-title content-item">{`${title.slice(
          0,
          100
        )}...`}</h4>
        <img className="news-box-img content-item" src={img} alt="img" />

        <p className="news-box-description content-item">{description}</p>
      </div>

      <div className="more-news">
        <NavLink to="/more">More</NavLink>
      </div>
    </div>
  );
}

export default NewsBox;
