package com.example.product_discount.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ProductConfig {
    @Bean
    public ModelMapper modelMapper() {
        try {
            return new ModelMapper();
        } catch (Exception ex) {
            throw new RuntimeException("Error creating ModelMapper bean", ex);
        }
    }
}
