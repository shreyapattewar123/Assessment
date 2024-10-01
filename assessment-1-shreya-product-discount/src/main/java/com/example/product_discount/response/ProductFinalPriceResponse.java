package com.example.product_discount.response;

public class ProductFinalPriceResponse {
    private String pName;
    private double finalPrice;

    public ProductFinalPriceResponse(String pName, double finalPrice) {
        this.pName = pName;
        this.finalPrice = finalPrice;
    }

    public String getpName() {
        return pName;
    }

    public double getFinalPrice() {
        return finalPrice;
    }
}
