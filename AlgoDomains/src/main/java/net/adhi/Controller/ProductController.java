package net.adhi.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.adhi.Model.Products;
import net.adhi.Service.ProductService;

@RestController
@CrossOrigin
@RequestMapping("/products")
public class ProductController {
	
	@Autowired
	private ProductService service;
	
	@PostMapping
	public Products saveProduct(@RequestBody Products product)
	{
		Products pdt=service.saveProduct(product);
		return pdt;
	}
	@DeleteMapping("/{productId}")
	public void deleteProduct(@PathVariable Long productId)
	{
		service.deleteProduct(productId);
	}
	@GetMapping("/{productId}")
	public Products getProduct(@PathVariable Long productId)
	{
		Products product=service.getProduct(productId);
		return product;
	}
	@GetMapping
	public List<Products> getAllProducts()
	{
		List<Products> products=service.getAllProducts();
		
	   return products;
	}
	@PutMapping("/{productId}")
	public Products updateProduct(@RequestBody Products product,@PathVariable Long productId)
	{
		Products pdt=service.updateProduct(product, productId);
		
	return pdt;	
	}
	
}
