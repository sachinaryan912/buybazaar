package com.company.buybazaar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.company.buybazaar.Entity.Product;

public interface ProductRepository extends JpaRepository<Product,Integer>{

}
