/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.database.connection;

import com.database.registration.RegistrationServlet;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author slavi
 */
public class DBConnection {

    private Connection connect = null;

    private boolean openConnection() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            String url = "jdbc:mysql://localhost:3306/budgettracker";
            connect = DriverManager.getConnection(url, "root", "1234");

        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(RegistrationServlet.class.getName()).log(Level.SEVERE, null, ex);
            return false;
        }
        return true;
    }

    public Connection getConnection() {
        if (openConnection()) {
            return connect;
        }
        return null;
    }
}
