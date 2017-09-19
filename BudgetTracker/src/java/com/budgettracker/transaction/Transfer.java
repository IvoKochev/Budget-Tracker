/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.transaction;

import java.util.Date;

/**
 *
 * @author slavi
 */
public class Transfer extends Transaction {

    private Date date;
    private Status status;
    private String description;
    private double amount;
}
