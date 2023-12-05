package com.company.buybazaar.DTO;

public class ProductDTO {
	
	private int productId;
	private String productName;
	private String description;
	private double price;
	private String category;
	private String subcategory;
	private int availableQuantity;
	private float rating;
	private int reviews;
	private int sellerId;
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getSubcategory() {
		return subcategory;
	}
	public void setSubcategory(String subcategory) {
		this.subcategory = subcategory;
	}
	public int getAvailableQuantity() {
		return availableQuantity;
	}
	public void setAvailableQuantity(int availableQuantity) {
		this.availableQuantity = availableQuantity;
	}
	public float getRating() {
		return rating;
	}
	public void setRating(float rating) {
		this.rating = rating;
	}
	public int getReviews() {
		return reviews;
	}
	public void setReviews(int reviews) {
		this.reviews = reviews;
	}
	public int getSellerId() {
		return sellerId;
	}
	public void setSellerId(int sellerId) {
		this.sellerId = sellerId;
	}
	
	
	@Override
	public String toString() {
		return "ProductDTO [productId=" + productId + ", productName=" + productName + ", description=" + description
				+ ", price=" + price + ", category=" + category + ", subcategory=" + subcategory
				+ ", availableQuantity=" + availableQuantity + ", rating=" + rating + ", reviews=" + reviews
				+ ", sellerId=" + sellerId + "]";
	}
	
	
	

}
