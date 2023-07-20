import React, { useState } from 'react';

function DeleteProduct() {
  const [productId, setProductId] = useState('');
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    setProductId(e.target.value);
  };

  const handleDeleteProduct = async () => {
    try {
      const response = await fetch(`http://localhost:1997/products/${productId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        const result = await response.text();
        if (result === 'true') {
          setStatus('Delete Successful');
        } else {
          setStatus('Invalid ID');
        }
      } else {
        setStatus('An error occurred while deleting the product.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred while deleting the product.');
    }
  };

  return (
    <div className='delete-container'>
      <h1>Delete Product</h1>
      <div>
        <input type='text' value={productId} onChange={handleInputChange} className='form-input'
          placeholder='Enter Product ID'/>
        <button onClick={handleDeleteProduct} className='form-button'>
          Delete
        </button>
      </div>
      {status && <h1>{status}</h1>}
    </div>
  );
}

export default DeleteProduct;
