/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.servlet.login;

import com.budgettracker.current_user.User;
import com.budgettracker.database.connection.DBConnection;
import java.io.IOException;
import java.sql.Connection;
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
public class LoginServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String email = request.getParameter("username");
        String password = request.getParameter("password");
        try (Connection connection = new DBConnection().getConnection()) {

            if (checkEmailAndPassword(email, password, connection)) {

                response.sendRedirect("/BudgetTracker/secure.budgettracker.com/updateaccount.jsp");
                return;
            }
            response.sendRedirect("/BudgetTracker/secure.budgettracker.com/login_secure-f.jsp");

        } catch (ClassNotFoundException | SQLException ex) {
            response.sendRedirect("/BudgetTracker/secure.budgettracker.com/login_secure-f.jsp");
        }
    }

    private boolean checkEmailAndPassword(String email, String password, Connection connection) throws SQLException {
        String query = "SELECT id,email,password FROM users WHERE email ='" + email + "'";
        String pass;
        try (Statement stmt = connection.createStatement()) {
            ResultSet rs = stmt.executeQuery(query);
            rs.next();
            User.setId(rs.getInt("id"));
            pass = rs.getString("password");
        }
        return password.equals(pass);
    }
}
