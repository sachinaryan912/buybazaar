package com.company.buybazaar.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.company.buybazaar.DTO.ProductDTO;
import com.company.buybazaar.service.BBService;

@RestController
@RequestMapping("/api")
public class Controller {
	
	@Autowired
	private BBService bbService;
	
	@GetMapping(value="/{name}")
	public String sayHello(@PathVariable String name) {
		return "Hello "+name;
	}
	
	@GetMapping(value="/products")
	public ResponseEntity<List<ProductDTO>> getProducts() throws Exception{
		
		List<ProductDTO> prod = bbService.getProducts();
		return new ResponseEntity<>(prod,HttpStatus.OK);
	}
	
	@GetMapping(value="/products/{prodId}")
	public ResponseEntity<ProductDTO> getProduct(@PathVariable Integer prodId) throws Exception{
		
		ProductDTO prod = bbService.getProduct(prodId);
		return new ResponseEntity<>(prod,HttpStatus.OK);
	}
	
	@PostMapping("/products")
    public ResponseEntity<String> addProduct(@RequestBody ProductDTO productDTO) {
        try {
        	bbService.addProduct(productDTO);
            return new ResponseEntity<>("Product added successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
