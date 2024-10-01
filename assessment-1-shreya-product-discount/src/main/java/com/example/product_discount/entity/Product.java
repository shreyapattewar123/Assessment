package com.example.product_discount.entity;

import jakarta.persistence.*;

@Entity
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="product_code")
  private int pid;
    @Column(name="Product_name")
  private String pName;
    @Column(name="product_cost")
  private int  pcost;
    @Column(name="product_Discount")
  private double pDis;

    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public String getpName() {
        return pName;
    }

    public void setpName(String pName) {
        this.pName = pName;
    }

    public int getPcost() {
        return pcost;
    }

    public void setPcost(int pcost) {
        this.pcost = pcost;
    }

    public double getpDis() {
        return pDis;
    }

    public void setpDis(double pDis) {
        this.pDis = pDis;
    }

    public Product() {
    }
}
