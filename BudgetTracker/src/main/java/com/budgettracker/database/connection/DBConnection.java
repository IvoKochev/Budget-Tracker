/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.database.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author slavi
 */
public class DBConnection implements AutoCloseable {

    public Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.jdbc.Driver");
        String url = "jdbc:mysql://localhost:3306/budget_tracker";
        return DriverManager.getConnection(url, "root", "1234");
    }

    @Override
    public void close() throws Exception {
        System.out.println("The connection is successfully closed");
    }
}
