// ProductStyles.js
import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
`;

export const ProductItemWrapper = styled.div`
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  width: 200px;
  text-align: center;

  imgage {
    max-width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    hover :1.2rem
  }

  h3 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
  }

 
`;



