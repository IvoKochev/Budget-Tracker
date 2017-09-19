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
public class WithdrawalOrCharge extends Transaction {

    public WithdrawalOrCharge(ISender sender, IPayee payee, Date date, Status status, double amount) {
        super(sender, payee, date, status, amount);
    }
}
