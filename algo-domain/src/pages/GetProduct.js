import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [productId, setProductId] = useState('');
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setProductId(e.target.value);
  };

  const handleProductSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:1997/products/${productId}`);
      if (response.status === 200) {
        const data = response.data;
        setProductData(data);
        setError('');
      } else {
        setProductData(null);
        setError(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="get-container">
      <h1>Single Product</h1>
      <div>
        <input
          type="text"
          value={productId}
          onChange={handleInputChange}
          className="form-input"
        />
        <button onClick={handleProductSearch} className="form-button">Search</button>
      </div>
      <div className="product-container">
        {error && <div>{error}</div>}
        {productData && (
          <>
            <div className="product-details">
              <h1>{productData.productName}</h1>
              <p>{productData.productCategory} - {productData.productType}</p>
              <p className="product-price">Price: {productData.finalPrice}</p>
              <p>Discount: {productData.discount}</p>
              <p>GST: {productData.gst}</p>
              <p>Delivery: {productData.delivaryCharge}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
