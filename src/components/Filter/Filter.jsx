import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  console.log('value', value);
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default Filter;
