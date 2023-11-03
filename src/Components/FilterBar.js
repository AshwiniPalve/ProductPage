import React from 'react';
import { FilterBarContainer, Button} from '../styles/FilterBarStyles'

const FilterBar = ({ onFilter, onSort ,oncategorySort}) => {
  return (
    <FilterBarContainer>
    <Button onClick={onFilter}>Filter</Button>
    <Button onClick={onSort}>PriceSort</Button>
    <Button onClick={oncategorySort}>CategorySort</Button>
  </FilterBarContainer>
  );
};

export default FilterBar;

