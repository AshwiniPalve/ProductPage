import React from 'react';


const ProductItem = ({ product }) => {
  return (
    <div>
      <h5>{product.id}</h5>
      <img src={product.image} alt={product.name} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h4>{product.category}</h4>
      <h3>${product.price}</h3>

     
    </div>
  );
};

export default ProductItem;
