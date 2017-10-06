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
public class BudgetTrackerException extends RuntimeException {

    BudgetTrackerException() {
        super();
    }

    BudgetTrackerException(String massage) {
        super(massage);
    }
}
