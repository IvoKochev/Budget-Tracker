/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.servlet.new_account;

import com.budgettracker.current_user.User;
import com.budgettracker.database.connection.DBConnection;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
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
        try {
            connect = new DBConnection().getConnection();
            write(accountName, balance);
        } catch (ClassNotFoundException | SQLException ex) {
            resp.getWriter().print(ex);
        } finally {
            try {
                connect.close();
            } catch (SQLException ex) {
                resp.getWriter().print(ex);
            }
        }

    }

    private void write(String accountName, String balance) throws SQLException {
        String query = " insert into accounts (name,user_id,balance) values (?,?,?)";
        PreparedStatement preparedStmt = connect.prepareStatement(query, PreparedStatement.RETURN_GENERATED_KEYS);
        long b = Integer.parseInt(balance);
        preparedStmt.setString(1, accountName);
        preparedStmt.setInt(2, User.getId());
        preparedStmt.setLong(3, b);
        preparedStmt.execute();
    }
}
