package com.budgettracker.MyBills;

import java.util.ArrayList;
import java.util.List;



public class MyBills implements IBill{
    private List<Bill> bills;
    
    public MyBills() {
        this.bills = new ArrayList<>();
    }

    @Override
    public void addBill(Bill bill) {
       if(bill != null) 
           this.bills.add(bill);
    }
    
   
	
}