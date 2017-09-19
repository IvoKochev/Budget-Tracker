/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.transaction;

import com.budgettracker.sender_or_payee.SenderOrPayee;
import java.util.Date;

/**
 *
 * @author slavi
 */
public class CashAdvanceTransaction extends Transaction {

    public CashAdvanceTransaction(SenderOrPayee sender, SenderOrPayee payee, Date date, Status status, double amount) {
        super(sender, payee, date, status, amount);
    }
}
