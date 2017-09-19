/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.transaction;

import com.budgettracker.payee.IPayee;
import com.budgettracker.sender.ISender;
import java.util.Date;

/**
 *
 * @author slavi
 */
public abstract class Transaction implements ITransaction {

    private String description;
    private final Date date;
    private final Status status;
    private final double amount;
    private final IPayee payee;
    private final ISender sender;

    public Transaction(ISender sender, IPayee payee, Date date, Status status, double amount) {
        this.sender = sender;
        this.payee = payee;
        this.status = status;
        this.amount = amount;
        this.date = date;

    }

    public Transaction(ISender sender, IPayee payee, Date date, Status status, double amount, String description) {
        this(sender, payee, date, status, amount);
        this.description = description;
    }
}
