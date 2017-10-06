/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.servlet.AddBill;

import com.budgettracker.current_user.User;
import com.budgettracker.database.connection.DBConnection;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author slavi
 */
public class AddBillServlet extends HttpServlet {

    int acc_Id;

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String accountName = req.getParameter("payee");
        String amount = req.getParameter("amount");
        String date = req.getParameter("startdate");

        try (Connection connection = new DBConnection().getConnection()) {
            if (checkAccount(accountName, connection)) {
                double amount1 = Double.parseDouble(amount);
                write(accountName,amount1, date, connection);
            }

        } catch (ClassNotFoundException | SQLException ex) {
            resp.getWriter().print(ex);
        }

    }

    private boolean checkAccount(String accName, Connection connect) throws SQLException {
        String query = "SELECT id,name,user_id FROM accounts WHERE name ='" + accName + "'";
        ResultSet rs = null;
        try (Statement stmt = connect.createStatement()) {
            rs = stmt.executeQuery(query);
            while (rs.next()) {
                int user_id = rs.getInt("user_id");
                if (user_id == User.getId()) {
                    acc_Id = rs.getInt("id");
                    return true;
                }
            }
        } finally {
            if (rs != null) {
                rs.close();
            }
        }
        return false;
    }

    private void write(String payee,double amount, String date, Connection connection) throws SQLException {
        String query = " insert into bills (payee,amount,date,account_id) values ( ?, ?, ?,?)";
        try (PreparedStatement preparedStmt = connection.prepareStatement(query, PreparedStatement.RETURN_GENERATED_KEYS)) {
            preparedStmt.setString(1, payee);
            preparedStmt.setDouble(2, amount);
             preparedStmt.setString(3, date);
            preparedStmt.setInt(4, acc_Id);
            preparedStmt.execute();
        }
    }
}
