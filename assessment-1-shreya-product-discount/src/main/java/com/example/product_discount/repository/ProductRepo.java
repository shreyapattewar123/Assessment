package com.example.product_discount.repository;

import com.example.product_discount.entity.Product;
import com.example.product_discount.response.ProductFinalPriceResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer> {

    // No need for a custom query since we're retrieving all products
    List<Product> findAll();
}