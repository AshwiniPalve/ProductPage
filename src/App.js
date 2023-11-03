// App.js
import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import FilterBar from './Components/FilterBar';
import Pagination from './Components/Pagination';

import './app.css'


const App = () => {
  const [products, setProducts] = useState([
    {
      "id": 1,
      "title": "Noise Buds VS104",
      "description": "This is the description of Product 1.",
      "price": 999,
      "category": "Electronics",
      "image":"/src/Images/noise budsvs104.jpg"
    },
    {
      "id": 2,
      "title": " Lymio Casual Shirt ",
      "description": "A detailed description of Product 2.",
      "price": 379,
      "category": "Men's Clothing",
      "image": "/src/Images/product3.jpg"
    },
    {
      "id": 3,
      "title": "Table Lamp",
      "description": "Product 3 is the third item in our catalog.",
      "price": 595,
      "category": "Home Decore",
      "image": "/src/Images/Table Lamp.webp"
    },
    {
      "id": 4,
      "title": "Product 4",
      "description": "Product 4 is a great choice for your needs.",
      "price": 19999,
      "category": "Electronics",
      "image": "/src/Images/product2.jpg"
    },
    {
      "id": 5,
      "title": "Janasya Women's Kurta with Pant and Dupatta",
      "description": "The fifth product on our list, with all the details you need.",
      "price": 399,
      "category": "Women's Clothing",
      "image": "/src/Images/Product5.jpg"
    },
    {
      "id": 6,
      "title": "Apple",
      "description": "The sixth product on our list, with all the details you need.",
      "price": 150,
      "category": "fruits",
      "image": "/src/Images/apple.jpeg"
    },
    {
      "id": 7,
      "title": "Bread",
      "description": "The seventh product on our list, with all the details you need.",
      "price": 40,
      "category": "Bakery",
      "image": "src/Images/Bread.png"
    },
    {
      "id": 8,
      "title": "Creamroll",
      "description": "The eight product on our list, with all the details you need.",
      "price": 100,
      "category": "Bakery",
      "image": "src/Images/CreamRoll.png"
    },
    {
      "id": 9,
      "title": "Malvani Khari",
      "description": "The fifth product on our list, with all the details you need.",
      "price": 100,
      "category": "Bakery",
      "image": "src/Images/Khari.png"
    },
    {
      "id": 10,
      "title": "Womens Jacket",
      "description": "The fifth product on our list, with all the details you need.",
      "price": 399,
      "category": "Women's Clothing",
      "image": "src/Images/womens jacket.jpeg"
    },
    {
      "id": 11,
      "title": "Ceil Light",
      "description": "The fifth product on our list, with all the details you need.",
      "price": 2000,
      "category": "Home Decore",
      "image": "src/Images/Ceil Light.png"
    },
    {
      "id": 12,
      "title": "Casual shirt for men",
      "description": "The fifth product on our list, with all the details you need.",
      "price": 349,
      "category": "Men's Clothing",
      "image": "src/Images/casual shirt for men.jpg"
    }

  ]
  );
  const [filteredProducts, setFilteredProducts] = useState([products]);
  const [currentPage, setCurrentPage] = useState(3);
  const productsPerPage = 5; // Number of products to display per page

  const handleFilter = (query) => {
    if (typeof query === 'string') {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      // o/w display all products.
      setFilteredProducts([...products]);
    }
  };


  const handleSort = (sortOrder) => {
   
     let sorted;
    
     if (sortOrder === 'asc') {
       sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
     } else if (sortOrder === 'desc') {
       sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
     } else {
       sorted = [...filteredProducts];
     }
 
     setFilteredProducts(sorted);
   };


  const handleCategorySort = (category) => {
    // Filter products based on the selected category
    if (typeof category === 'string') {
    const filtered = products.filter((product) => product.category === category);
  
    // Set the filtered products as the new state
    setFilteredProducts(filtered);
  } else {
      // o/w display all products.
      setFilteredProducts([...products]);
    }
  };

  // Pagination functions
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="app-container">
      <div className="app-container1">
       <header className="header"><h1>Products</h1>
       </header>
      </div>
      <FilterBar onFilter={handleFilter} onSort={handleSort}  oncategorySort={handleCategorySort}/>
      
      <ProductList products={filteredProducts}></ProductList>
      <ProductList products={filteredProducts} currentPage={currentPage} productsPerPage={productsPerPage} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        currentPage={currentPage}
        paginate={paginate}
      />
       <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
       <div><h4 > Sort By Product Title</h4> 
      <input className='input'
        type="text"
        placeholder="Search by product name"
        onChange={(e) => handleFilter(e.target.value)}
      />

      </div>
      <br />
      <div ><h4> Sort By Price</h4> 
      <button className='custom-button' onClick={() => handleSort('asc')}>Sort by Price (Low to High)</button>
      <br/>
      <button className='custom-button' onClick={() => handleSort('desc')}>Sort by Price (High to Low)</button>
      </div>
      <br />

      <div> <h4 > Sort By Category</h4> 
      <button className='custom-button'  onClick={() => handleCategorySort('Electronics')}>Electronics</button><br />
      <button className='custom-button' onClick={() => handleCategorySort("Men's Clothing")}>Men's Clothing</button><br />
      <button className='custom-button' onClick={() => handleCategorySort('Bakery')}>Bakery</button><br />
      <button className='custom-button' onClick={() => handleCategorySort("Women's Clothing")}>Women's Clothing</button><br />
      <button className='custom-button' onClick={() => handleCategorySort('Home Decore')}>Home Decore</button><br />
      <button className='custom-button' onClick={() => handleCategorySort("fruits")}>fruits</button><br />
      </div>
      </div>

      <footer className="footer">
    <div >
    <div class="row">
      
    <div >
        <h5>AboutUs</h5>
        
        <ul >
          <li >A place where you can find anything and everything for your home <a href="">Semantic Store</a></li>
          <li>You’ll always have a great selection with all the latest trends just a click away!<a href="" target="_blank" rel="license noopener"></a>, docs <a href="" target="_blank" rel="license noopener"></a>.</li>
          <li >A fresh approach to shopping.</li>
          <li >Licenced by <a href=" " target="_blank">Government</a>.</li>
        </ul>
      </div>
<span>
    
      <div >
        <h5>Connect with Us</h5>
        <ul >
          <li><a href="https://www.facebook.com/login.php/">Facebook</a></li>
          <li ><a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"> Twitter</a></li>
          <li ><a href="https://www.instagram.com/">Instagram</a></li>
          <li ><a href="https://github.com/">Github</a></li>
          <li ><a href="https://gmail.com/">Gmail</a></li>
          
        </ul>
      </div>

      </span>
    </div>
  </div>
</footer>

        <div class="copyright" >
        <div align="center">
        <p>Copyright © 2023-2024 Semantic  Store Pvt Ltd</p>
    
</div>
</div>
  </div>  
  );
};


export default App;

