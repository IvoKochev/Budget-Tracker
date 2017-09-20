/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.sender_or_payee;

import com.budgettracker.exceptions.InvalidMoneyException;

/**
 *
 * @author slavi
 */
public interface IPayee {

    void addMoney(double money) throws InvalidMoneyException;
}
