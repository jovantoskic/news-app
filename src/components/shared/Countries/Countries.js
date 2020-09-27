import React from 'react';
import PropTypes from 'prop-types';

import './Countries.scss';

function Countries({ countries }) {
  return (
    <div className="countries-container header-item">
      {countries.map((country, index) => (
        <button key={country.state} type="button" className="country">
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
