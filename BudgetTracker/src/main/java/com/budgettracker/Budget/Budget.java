package com.budgettracker.Budget;


import com.budgettracker.exceptions.InvalidAccountException;
import com.budgettracker.exceptions.InvalidAmountException;
import java.time.LocalDateTime;

public class Budget {

    private Category category;
    private double amount;
    private LocalDateTime startDate;
    private Recurrence recurrence;
    private String accountName;
    private BudgetType budgetType;

   
    public Budget(Category category, double amount, LocalDateTime startDate, Recurrence recurrence, String accountName, BudgetType budgetType) throws InvalidAmountException, InvalidAccountException {
        if(category != null)
            this.category = category;
        if(amount > 0){
            this.amount = amount;
        } else {
            throw new InvalidAmountException("Invalid amount!");
        }
        if(startDate != null && !startDate.isBefore(LocalDateTime.now()))
            this.startDate = startDate;
        if(recurrence != null)
            this.recurrence = recurrence;
        if(accountName != null && !accountName.isEmpty()){
            this.accountName = accountName;
        } else {
            throw new InvalidAccountException("Invalid account name!");
        }
        if(budgetType != null)
            this.budgetType = budgetType;
    }

    public Category getCategory() {
        return category;
    }

    public double getAmount() {
        return amount;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public Recurrence getRecurrence() {
        return recurrence;
    }

    public String getAccountName() {
        return accountName;
    }

    public BudgetType getBudgetType() {
        return budgetType;
    }

    
    public void addToBudget(String accountName, double amount) {
        if(accountName != null && ! accountName.isEmpty() && amount > 0) {
            this.amount += amount;
        }
    }

}
