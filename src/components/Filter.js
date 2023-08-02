import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleFilterChange }) => (
  <div className="filter">
    <input
      type="text"
      placeholder="Search city..."
      onChange={(e) => handleFilterChange(e.target.value)}
    />
  </div>
);
Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
