package com.company.buybazaar.Entity;

import org.hibernate.annotations.Columns;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
public class Product {
	
 	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Integer productId;
    @Column(name = "product_name", nullable = false)
    private String productName;
    @Column(name = "description")
    private String description;
    @Column(name = "image_url")
    private String imageUrl;
    @Column(name = "price", nullable = false)
    private Double price;
    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "subcategory")
    private String subcategory;

    @Column(name = "available_quantity", nullable = false)
    private Integer availableQuantity;

    @Column(name = "rating")
    private Double rating;

    @Column(name = "reviews")
    private Integer reviews;

    public String getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}

	@Column(name = "seller_id")
    private Integer sellerId;
    
    @Column(name="timestamp")
    private String timestamp;

    
	public Integer getProductId() {
		return productId;
	}

		public void setProductId(Integer productId) {
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

		public String getImageUrl() {
			return imageUrl;
		}

		public void setImageUrl(String imageUrl) {
			this.imageUrl = imageUrl;
		}

		public Double getPrice() {
			return price;
		}

		public void setPrice(Double price) {
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

		public Integer getAvailableQuantity() {
			return availableQuantity;
		}

		public void setAvailableQuantity(Integer availableQuantity) {
			this.availableQuantity = availableQuantity;
		}

		public Double getRating() {
			return rating;
		}

		public void setRating(Double rating) {
			this.rating = rating;
		}

		public Integer getReviews() {
			return reviews;
		}

		public void setReviews(Integer reviews) {
			this.reviews = reviews;
		}

		public Integer getSellerId() {
			return sellerId;
		}

		public void setSellerId(Integer sellerId) {
			this.sellerId = sellerId;
		}
	    
	    


	    
	    
	
	

	
	

}
