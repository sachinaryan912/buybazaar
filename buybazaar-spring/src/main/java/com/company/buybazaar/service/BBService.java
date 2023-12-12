package com.company.buybazaar.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.buybazaar.DTO.ProductDTO;
import com.company.buybazaar.Entity.Product;
import com.company.buybazaar.repository.ProductRepository;


@Service
public class BBService {
	
	//service functionality yet to generate
	@Autowired
	private ProductRepository prodRepo;
	
	public List<ProductDTO> getProducts() throws Exception{
		
		List<Product> products = prodRepo.findAll();
	    return products.stream()
	            .map(this::convertToProductDTO)
	            .collect(Collectors.toList());
		
	}
	
	public void addProduct(ProductDTO productDTO) throws Exception {
        Product product = new Product();
        // Map fields from DTO to the entity
        product.setProductName(productDTO.getProductName());
        product.setDescription(productDTO.getDescription());
        product.setImageUrl(productDTO.getImageUrl());
        product.setAvailableQuantity(productDTO.getAvailableQuantity());
        product.setPrice(productDTO.getPrice());
        product.setCategory(productDTO.getCategory());
        product.setSubcategory(productDTO.getSubcategory());
        product.setRating(productDTO.getRating());
        product.setReviews(productDTO.getReviews());
        product.setSellerId(productDTO.getSellerId());
        product.setTimestamp(String.valueOf(System.currentTimeMillis()));

        // Save the product to the database
        prodRepo.save(product);
    }
	
	
	public ProductDTO getProduct(Integer prodId) throws Exception{
		Optional<Product> optional = prodRepo.findById(prodId);
		Product product = optional.orElseThrow(()-> new Exception("product not found"));
		ProductDTO prod = new ProductDTO();
		prod.setProductId(product.getProductId());
		prod.setProductName(product.getProductName());
		prod.setImageUrl(product.getImageUrl());
		prod.setDescription(product.getDescription());
		prod.setAvailableQuantity(product.getAvailableQuantity());
		prod.setPrice(product.getPrice());
		prod.setCategory(product.getCategory());
		prod.setSubcategory(product.getSubcategory());
		prod.setRating(product.getRating());
		prod.setReviews(product.getReviews());
		prod.setSellerId(product.getSellerId());
		prod.setTimestamp(product.getTimestamp());

		
		
		return prod;
	}
	
	private ProductDTO convertToProductDTO(Product product) {
	    ProductDTO prod = new ProductDTO();
	    prod.setProductId(product.getProductId());
	    prod.setProductName(product.getProductName());
	    prod.setDescription(product.getDescription());
	    prod.setImageUrl(product.getImageUrl());
	    prod.setAvailableQuantity(product.getAvailableQuantity());
	    prod.setPrice(product.getPrice());
	    prod.setCategory(product.getCategory());
	    prod.setSubcategory(product.getSubcategory());
	    prod.setRating(product.getRating());
	    prod.setReviews(product.getReviews());
	    prod.setSellerId(product.getSellerId());
	    prod.setTimestamp(product.getTimestamp());
	    return prod;
	}

}
