package com.budgettracker.Overview;

import com.budgettracker.Budget.Budget;
import com.budgettracker.MyBills.Bill;
import com.budgettracker.account.Account;
import com.budgettracker.account.Save;
import com.budgettracker.exceptions.InvalidAccountException;
import com.budgettracker.income.Income;
import com.budgettracker.transaction.Transaction;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Overview  implements IOverview{
    List<Account> accounts;
    
    public Overview() {
        this.accounts = new ArrayList<>();
    }

    @Override
    public void getInformation() {
        for(Account acc : this.accounts) {
            int accNumber = acc.getAccountNumber();
            String accountType = acc.getAccountType().name();
            Set<Bill> bills = acc.getBills();
            Set<Budget> budgets = acc.getBudgets();
            String currency = acc.getCurrency();
            double currentBalance = acc.getCurrentBalance();
            Set<Income> incomes = acc.getIncomes();
            String name = acc.getName();
            Save save = acc.getSave();
            List<Transaction> transactions = acc.getTransactions();
            
        }
    }

    @Override
    public void addAccount(Account account) {
        if(account != null) {
            this.accounts.add(account);
        } else {
            try {
                throw new InvalidAccountException("No such account!");
            } catch (InvalidAccountException ex) {
                Logger.getLogger(Overview.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
	

}
