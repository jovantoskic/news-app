import React from 'react';
import PropTypes from 'prop-types';

import './Countries.scss';

function Countries({ countries }) {
  return (
    <div className="countries-container header-item">
      {countries.map(country => (
        <button key={country.state} className="country" type="button">
          {country.state}
        </button>
      ))}
    </div>
  );
}

Countries.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string,
    })
  ).isRequired,
};

export default Countries;
