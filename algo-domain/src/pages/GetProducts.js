import React, { useEffect, useState } from 'react';
import './css/algo.css';

function GetProducts() {
  const [products, setProducts] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:1997/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, [search]);

  return (
    <div className="get-container">

      <div>
     <input onChange={(e)=>{setsearch(e.target.value)}} className="form-input"></input>
   
      <button className='btn' onClick={()=>{
       setProducts(products.filter((e)=> search === e.productId))
      }
      } >Search</button>
     </div>
      <h1>Product List</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Product Type</th>
            <th>Category</th>
            <th>Base Price</th>
            <th>Discount</th>
            <th>GST</th>
            <th>Delivery Charge</th>
            <th>Final Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productId}>
              <td>{product.productId}</td>
              <td>{product.productName}</td>
              <td>{product.productType}</td>
              <td>{product.productCategory}</td>
              <td>{product.price}</td>
              <td>{product.discount}</td>
              <td>{product.gst}</td>
              <td>{product.delivaryCharge}</td>
              <td>{product.finalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetProducts;
