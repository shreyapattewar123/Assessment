package com.example.product_discount.service;

import com.example.product_discount.entity.Product;
import com.example.product_discount.repository.ProductRepo;
import com.example.product_discount.response.ProductFinalPriceResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    public List<ProductFinalPriceResponse> findAllProductsWithFinalPrice() {
        // Fetch all products from the repository
        List<Product> products = productRepo.findAll();

        // Calculate final price for each product and map to ProductFinalPriceResponse
        return products.stream()
                .map(product -> {
                    double finalPrice = product.getPcost() - (product.getPcost() * (product.getpDis() / 100));
                    return new ProductFinalPriceResponse(product.getpName(), finalPrice);
                })
                .collect(Collectors.toList());
    }
}