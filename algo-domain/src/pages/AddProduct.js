import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productId: '',
    productName: '',
    productType: '',
    productCategory: '',
    price: '',
  });

  const [productData, setProductData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:1997/products', formData);
      const data = response.data;
      calculateProductDetails(data);
      setProductData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const calculateProductDetails = (data) => {
    const { price, productCategory } = data;
    let discount = 0;
    let gst = 0;
    let deliveryCharge = 0;

    if (productCategory === 'Electronics') {
      discount = 0.15 * price;
      gst = 0.18 * price;
      deliveryCharge = 350;
    } else if (productCategory === 'Home Appliances') {
      discount = 0.22 * price;
      gst = 0.24 * price;
      deliveryCharge = 800;
    } else if (productCategory === 'Clothing') {
      discount = 0.4 * price;
      gst = 0.12 * price;
      deliveryCharge = 0;
    } else if (productCategory === 'Furniture') {
      discount = 0.1 * price;
      gst = 0.18 * price;
      deliveryCharge = 300;
    }

    const finalPrice = parseFloat(price) - discount + gst + deliveryCharge;

    data.discount = discount.toFixed(2);
    data.gst = gst.toFixed(2);
    data.deliveryCharge = deliveryCharge.toFixed(2);
    data.finalPrice = finalPrice.toFixed(2);
  };

  return (
    <div className='form-container'>
      <h1>Add Product</h1>
      <div className='sub-form-container'>
        <div>
          <form onSubmit={handleSubmit} className='form'>
          <label className="form-label">
              Product ID:
              <input type="text" name="productId" value={formData.productId} onChange={handleChange} className="form-input" />
            </label>
            <label className="form-label">
              Name:
              <input type="text" name="productName" value={formData.productName} onChange={handleChange} className="form-input" />
            </label>
            <label className="form-label">
              Product Type:
              <input type="text" name="productType" value={formData.productType} onChange={handleChange} className="form-input" />
            </label>
            <label className="form-label">
              Product Category:
              <select name='productCategory' value={formData.productCategory} onChange={handleChange} className='form-input'>
                <option>Select</option>
                <option value='Electronics'>Electronics</option>
                <option value='Home Appliances'>Home Appliances</option>
                <option value='Clothing'>Clothing</option>
                <option value='Furniture'>Furniture</option>
              </select>
            </label>
            <label className="form-label">
              Base Price:
              <input type="text" name="price" value={formData.price} onChange={handleChange} className="form-input" />
            </label>
            <button type='submit' className='form-button'>
              Submit
            </button>
          </form>
        </div>
        <div className='product-container'>
          {productData && (
            <>
              <div className='product-details'>
                <h1>{productData.productName}</h1>
                <p>{productData.productCategory} - {productData.productType}</p>
                <p>Discount: {productData.discount}</p>
                <p>GST: {productData.gst}</p>
                <p>Delivery Charge: {productData.deliveryCharge}</p>
                <p className="product-price">Price: {productData.finalPrice}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
