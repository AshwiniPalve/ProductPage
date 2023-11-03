import React from 'react';
import ProductItem from './ProductItem';
import { ProductContainer } from '../styles/ProductStyles';

const ProductList = ({ products, currentPage, productsPerPage }) => {
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <ProductContainer>
      {currentProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductContainer>
  );
};

export default ProductList;
