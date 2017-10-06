package com.budgettracker.Budget;

import java.time.LocalDateTime;
import java.util.Date;

public class Budget {

    private Category category;
    private double amount;
    private LocalDateTime date;

    public Budget(Category category, double amount, LocalDateTime date) {
        if(category != null)
            this.category = category;
        if(amount > 0)
            this.amount = amount;
        if(date != null)
            this.date = date;
    }
    

}
