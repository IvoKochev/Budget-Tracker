package com.budgettracker.MyBills;


import com.budgettracker.exceptions.InvalidAccountException;
import com.budgettracker.exceptions.InvalidAmountException;
import java.time.LocalDateTime;



public class Bill{   
	private Category category;
        private double amount;
        private String payee;
        private LocalDateTime startDate;
        private Recurrence recurrence;
        private Type type;

    public Bill(Category category, double amount, String payee, LocalDateTime startDate, Recurrence recurrence, Type type) throws InvalidAmountException, InvalidAccountException {
        if(category != null)
            this.category = category;
        if(amount > 0){
            this.amount = amount;
        } else {
            throw new InvalidAmountException("Invalid amount!");
        }
        if(payee != null && !payee.isEmpty()){
            this.payee = payee;
        } else {
            throw new InvalidAccountException("Invalid payee name!");
        }
        if(!startDate.isBefore(LocalDateTime.now()))
           this.startDate = startDate;
        if(recurrence != null)
            this.recurrence = recurrence;
        if(type != null)
            this.type = type;
    }

    public Type getType() {
        return type;
    }

    public Category getCategory() {
        return category;
    }

    public double getAmount() {
        return amount;
    }

    public String getPayee() {
        return payee;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public Recurrence getRecurrence() {
        return recurrence;
    }
        

    
}
