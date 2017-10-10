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
public class InvalidAccountNameException extends Exception{

    public InvalidAccountNameException() {
    }

    public InvalidAccountNameException(String message) {
        super(message);
    }

    public InvalidAccountNameException(String message, Throwable cause) {
        super(message, cause);
    }

    public InvalidAccountNameException(Throwable cause) {
        super(cause);
    }

    public InvalidAccountNameException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
    
}
