import React from 'react';
import {PaginationContainer,PageNumber}from '../styles/PaginationStyles'

const Pagination = ({ productsPerPage, totalProducts, currentPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <PageNumber onClick={() => paginate(number)}>{number}</PageNumber>
          </li>
        ))}
      </ul>
    </PaginationContainer>
  );
};
 export default Pagination