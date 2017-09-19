/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.account;

import com.budgettracker.income.Income;
import com.budgettracker.transaction.Transaction;
import java.util.List;
import java.util.Set;

/**
 *
 * @author slavi
 */
public class Account {

    private String name;
   // private Set<Bill> bills;
    private List<Transaction> transactions;
    private Set<Income> incomes;
   // private Set<Budget> budgets;
}
