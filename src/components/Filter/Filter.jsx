import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput, FilterContainer } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterContainer>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={value} onChange={onChange} />
      </FilterLabel>
    </FilterContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
