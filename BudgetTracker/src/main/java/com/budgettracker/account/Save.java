/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.account;

import com.budgettracker.exceptions.InvalidMoneyException;

/**
 *
 * @author slavi
 */
public class Save {

    private double money;

    void addMoney(double money) throws InvalidMoneyException {
        if (money < 0) {
            throw new InvalidMoneyException();
        }
        this.money += money;
    }

    double getMoney(double money) throws InvalidMoneyException {
        if (this.money < money) {
            throw new InvalidMoneyException("InvalidMoneyException: The current balance is insufficient");
        }
        if (money < 0) {
            throw new InvalidMoneyException();
        }
        this.money -= money;
        return money;
    }

    double getBalance() {
        return this.money;
    }
}
