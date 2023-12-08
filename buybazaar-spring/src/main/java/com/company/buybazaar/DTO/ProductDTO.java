package com.company.buybazaar.DTO;

public class ProductDTO {
	
	private Integer productId;
    private String productName;
    private String description;
    private String imageUrl;
    private Double price;
    private String category;
    private String subcategory;
    private Integer availableQuantity;
    private Double rating;
    private Integer reviews;
    private Integer sellerId;

    // Constructors, getters, setters, etc.
    
    // Constructors
    public ProductDTO() {
    }

    public ProductDTO(Integer productId, String productName, String description, String imageUrl, Double price,
                      String category, String subcategory, Integer availableQuantity, Double rating, Integer reviews,
                      Integer sellerId) {
        this.productId = productId;
        this.productName = productName;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.category = category;
        this.subcategory = subcategory;
        this.availableQuantity = availableQuantity;
        this.rating = rating;
        this.reviews = reviews;
        this.sellerId = sellerId;
    }

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
