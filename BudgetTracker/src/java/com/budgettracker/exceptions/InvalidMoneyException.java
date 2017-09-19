/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.exceptions;

/**
 *
 * @author slavi
 */
public class InvalidMoneyException extends Exception {

    public InvalidMoneyException(String message) {
        super(message);
    }

    public InvalidMoneyException() {
        super();
    }

    @Override
    public String getMessage() {
        return "InvalidMoneyException: The money cannot be less than 0";
    }
}
