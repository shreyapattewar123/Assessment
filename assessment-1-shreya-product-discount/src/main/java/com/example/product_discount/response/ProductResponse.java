package com.example.product_discount.response;

public class ProductResponse {
    private int pid;
    private String pName;
    private int  pcost;
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

    @Override
    public String toString() {
        return "ProductResponse{" +
                "pid=" + pid +
                ", pName='" + pName + '\'' +
                ", pcost=" + pcost +
                ", pDis=" + pDis +
                '}';
    }
}

