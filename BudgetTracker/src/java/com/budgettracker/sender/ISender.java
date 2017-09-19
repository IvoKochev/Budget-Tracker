/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.sender;

import com.budgettracker.exceptions.InvalidMoneyException;
import com.budgettracker.payee.IPayee;

/**
 *
 * @author slavi
 */
public interface ISender {

    void sendMoney(IPayee payee, double money) throws InvalidMoneyException;
}
