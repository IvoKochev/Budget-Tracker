/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.payee;

import com.budgettracker.exceptions.InvalidMoneyException;

/**
 *
 * @author slavi
 */
public interface Ipayee {

    void addMoney(double money) throws InvalidMoneyException;
}
