package net.adhi.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.adhi.Model.Products;
import net.adhi.Repository.ProductRepository;

@Service
public class ProductServiceImp implements ProductService{
	
	@Autowired
	private ProductRepository repository;

	@Override
	public Products saveProduct(Products product) {
		double price=product.getPrice();
		double discount=0.0;
		double gst=0.0;
		double delivaryCharge=0.0;
		String productCategory=product.getProductCategory();
		
		if(productCategory.equals("Electronics"))
		{
			discount=0.15*price;
			gst=0.18*price;
			delivaryCharge=350;
		}
		else if(productCategory.equals("Home Applainces"))
		{
			discount=0.22*price;
			gst=0.24*price;
			delivaryCharge=800;
		}
		else if(productCategory.equals("Clothing"))
		{
			discount=0.40*price;
			gst=0.12*price;
			delivaryCharge=0;
		}
		else if(productCategory.equals("Furniture"))
		{
			discount=0.10*price;
			gst=0.18*price;
			delivaryCharge=300;
		}
		product.setDiscount(discount);
		product.setGst(gst);
		product.setDelivaryCharge(delivaryCharge);
		double finalPrice=price+gst+delivaryCharge-discount;
		product.setFinalPrice(finalPrice);
		Products pdts=repository.save(product);
		
		return pdts;
	}

	@Override
	public void deleteProduct(Long productId) {
		repository.deleteById(productId);
		
	}

	@Override
	public Products getProduct(Long productId) {
		Products product=repository.findById(productId).get();
		return product;
	}

	@Override
	public List<Products> getAllProducts() {
		List<Products> products = (List<Products>)repository.findAll();
		return products;
	}

	@Override
	public Products updateProduct(Products p, Long productId) {
		Optional<Products> optional=repository.findById(productId);
		Products pdt=optional.get();
		pdt.setProductId(productId);
		pdt.setProductName(p.getProductName());
		pdt.setPrice(p.getPrice());
		pdt.setProductType(p.getProductType());
		pdt.setProductCategory(p.getProductCategory());
		
		return repository.save(pdt);
	}

}
