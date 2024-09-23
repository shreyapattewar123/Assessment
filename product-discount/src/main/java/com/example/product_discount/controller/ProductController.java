package com.example.product_discount.controller;

import com.example.product_discount.response.ProductFinalPriceResponse;
import com.example.product_discount.response.ProductResponse;
import com.example.product_discount.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/product-discount")
public class ProductController {

    @Autowired
    private ProductService productService;

    // Endpoint to get all products and their prices
//    @GetMapping("/product")
//    public ResponseEntity<List<ProductResponse>> getAllProducts() {
//        List<ProductResponse> productResponses = productService.findAllProducts();
//        return new ResponseEntity<>(productResponses, HttpStatus.OK);
//    }
    @GetMapping("/products/final-prices")
    public List<ProductFinalPriceResponse> getAllProductsWithFinalPrice() {
        return productService.findAllProductsWithFinalPrice();
    }
}
