package net.adhi.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Products {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long productId;
	
	private String productName;

	private String productType;

	private String productCategory;
	private double price;
	private double discount;
	private double gst;
	private double delivaryCharge;
	private double finalPrice;
	public Products() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Products(Long productId, String productName, String productType, String productCategory, double price,
			double discount, double gst, double delivaryCharge, double finalPrice) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productType = productType;
		this.productCategory = productCategory;
		this.price = price;
		this.discount = discount;
		this.gst = gst;
		this.delivaryCharge = delivaryCharge;
		this.finalPrice = finalPrice;
	}
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductType() {
		return productType;
	}
	public void setProductType(String productType) {
		this.productType = productType;
	}
	public String getProductCategory() {
		return productCategory;
	}
	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public double getDiscount() {
		return discount;
	}
	public void setDiscount(double discount) {
		this.discount = discount;
	}
	public double getGst() {
		return gst;
	}
	public void setGst(double gst) {
		this.gst = gst;
	}
	public double getDelivaryCharge() {
		return delivaryCharge;
	}
	public void setDelivaryCharge(double delivaryCharge) {
		this.delivaryCharge = delivaryCharge;
	}
	public double getFinalPrice() {
		return finalPrice;
	}
	public void setFinalPrice(double finalPrice) {
		this.finalPrice = finalPrice;
	}
	@Override
	public String toString() {
		return "Products [productId=" + productId + ", productName=" + productName + ", productType=" + productType
				+ ", productCategory=" + productCategory + ", price=" + price + ", discount=" + discount
				+ ", gst=" + gst + ", delivaryCharge=" + delivaryCharge + ", finalPrice=" + finalPrice + "]";
	}


	
}
