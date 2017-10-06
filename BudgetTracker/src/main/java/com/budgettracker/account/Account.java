/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.account;

import com.budgettracker.Budget.Budget;
import com.budgettracker.MyBills.Bill;
import com.budgettracker.exceptions.InvalidMoneyException;
import com.budgettracker.income.Income;
import com.budgettracker.sender_or_payee.IPayee;
import com.budgettracker.sender_or_payee.SenderOrPayee;
import com.budgettracker.transaction.Transaction;
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

    @Override
    public void addMoney(double money) throws InvalidMoneyException {
        this.save.addMoney(money);
    }

    @Override
    public void sendMoney(IPayee payee, double money) throws InvalidMoneyException {
        double myMoney = this.save.getMoney(money);
        payee.addMoney(myMoney);
    }
}
