/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.exceptions;

/**
 *
 * @author Ivo
 */
public class InvalidAccountException extends Exception{

    public InvalidAccountException() {
    }

    public InvalidAccountException(String message) {
        super(message);
    }

    public InvalidAccountException(String message, Throwable cause) {
        super(message, cause);
    }

    public InvalidAccountException(Throwable cause) {
        super(cause);
    }

    public InvalidAccountException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
    
}
