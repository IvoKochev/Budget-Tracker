/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.servlet.new_account;

import com.budgettracker.database.connection.DBConnection;
import com.budgettracker.servlet.registration.RegistrationServlet;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author slavi
 */
public class AccountServlet extends HttpServlet {

    Connection connect = null;

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        String accountName = req.getParameter("accountName");
        String balance = req.getParameter("openingbalance");

    }

    private void write(String email) {
        try {
            String query = " insert into test (json) values (?)";
            PreparedStatement preparedStmt = connect.prepareStatement(query, PreparedStatement.RETURN_GENERATED_KEYS);

            preparedStmt.setString(1, email);

            preparedStmt.execute();
            connect.close();
        } catch (SQLException ex) {
            Logger.getLogger(RegistrationServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
