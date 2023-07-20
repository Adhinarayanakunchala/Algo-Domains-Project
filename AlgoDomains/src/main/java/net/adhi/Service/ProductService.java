package net.adhi.Service;

import java.util.List;

import net.adhi.Model.Products;

public interface ProductService {


	public Products saveProduct(Products product);
	public void deleteProduct(Long productId);
	public Products getProduct(Long productId);
	public List<Products> getAllProducts();
	public Products updateProduct(Products p,Long productId);
}
