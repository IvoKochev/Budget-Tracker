/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.account;

import com.budgettracker.Budget.Budget;
import com.budgettracker.MyBills.Bill;
import com.budgettracker.exceptions.InvalidAccountException;
import com.budgettracker.exceptions.InvalidMoneyException;
import com.budgettracker.income.Income;
import com.budgettracker.sender_or_payee.IPayee;
import com.budgettracker.sender_or_payee.SenderOrPayee;
import com.budgettracker.transaction.Transaction;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 *
 * @author slavi
 */
public class Account extends SenderOrPayee implements IAccount {

    private String name;
    private double currentBalance;
    private Set<Bill> bills;
    private List<Transaction> transactions;
    private Set<Income> incomes;
    private Set<Budget> budgets;
    private Save save;
    private int accountNumber;
    private AccountType accountType;
    private String currency;

    public Account(String name, double currentBalance, int accountNumber, AccountType accountType, String currency) throws InvalidAccountException {
        this.bills = new HashSet<Bill>();
        this.transactions = new ArrayList<>();
        this.incomes = new HashSet<>();
        this.budgets = new HashSet<>();
        if(name != null && !name.isEmpty()) {
            this.name = name;
        } else {
            throw new InvalidAccountException("Invalid account name!");
        }
        if(currentBalance > 0) {
            this.currentBalance = currentBalance;
        } else {
            throw new InvalidMoneyException("Invalid amount of money!");
        }
        if(accountType != null) {
            this.accountType = accountType;
        } else {
            throw new InvalidAccountException("Invalid account type!");
        }
        if(currency != null && !currency.isEmpty()) {
            this.currency = currency;
        }
    }
    
    @Override
    public void addMoney(double money) throws InvalidMoneyException {
        this.save.addMoney(money);
    }

    @Override
    public void sendMoney(IPayee payee, double money) throws InvalidMoneyException {
        double myMoney = this.save.getMoney(money);
        payee.addMoney(myMoney);    
    }

    public String getName() {
        return name;
    }

    public double getCurrentBalance() {
        return currentBalance;
    }

    public Set<Bill> getBills() {
        return bills;
    }

    public List<Transaction> getTransactions() {
        return transactions;
    }

    public Set<Income> getIncomes() {
        return incomes;
    }

    public Set<Budget> getBudgets() {
        return budgets;
    }

    public Save getSave() {
        return save;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    public AccountType getAccountType() {
        return accountType;
    }

    public String getCurrency() {
        return currency;
    }

    
    
    
}
