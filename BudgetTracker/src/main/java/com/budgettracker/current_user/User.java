/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.current_user;

/**
 *
 * @author slavi
 */
public class User {

    private static int id;

    public static void setId(int id) {
        User.id = id;
    }

    public static int getId() {
        return id;
    }
}
