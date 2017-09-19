/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.sender_or_payee;

/**
 *
 * @author slavi
 */
public abstract class SenderOrPayee implements IPayee, ISender {

    private String name;

    public String getName() {
        return name;
    }
}
