/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.servlet.AddBudget;

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
 * @author Ivo
 */
public class AddBudget extends HttpServlet {

    int acc_Id;

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String accName = req.getParameter("account_name");
        String category = req.getParameter("catid");
        String ampunt = req.getParameter("budget");
        String date = req.getParameter("startdate");

        try (Connection connection = new DBConnection().getConnection()) {
            if (checkAccount(accName, connection)) {
                double amount = Double.parseDouble(ampunt);
                write(category, amount, date, connection);
            }

        } catch (ClassNotFoundException | SQLException ex) {
            resp.getWriter().print(ex);
        }

    }

    private boolean checkAccount(String accName, Connection connect) throws SQLException {
        String query = "SELECT id,name,user_id FROM accounts WHERE name ='" + accName + "' and user_id =" + User.getId();
        ResultSet rs = null;
        try (Statement stmt = connect.createStatement()) {
            rs = stmt.executeQuery(query);
            rs.next();
            int user_id = rs.getInt("user_id");
            if (user_id == User.getId()) {
                acc_Id = rs.getInt("id");
                return true;

            }
        } finally {
            if (rs != null) {
                rs.close();
            }
        }
        return false;
    }

    private void write(String category, double amount, String date, Connection connection) throws SQLException {
        String query = " insert into budget (category,amount,account_id,date) values (?, ?, ?, ?)";
        try (PreparedStatement preparedStmt = connection.prepareStatement(query, PreparedStatement.RETURN_GENERATED_KEYS)) {
            preparedStmt.setString(1, category);
            preparedStmt.setDouble(2, amount);
            preparedStmt.setInt(3, acc_Id);
            preparedStmt.setString(4, date);
            preparedStmt.execute();
        }
    }

}
