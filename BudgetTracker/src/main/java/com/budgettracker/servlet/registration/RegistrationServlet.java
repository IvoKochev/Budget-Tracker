/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.servlet.registration;

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
public class RegistrationServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String emailaddress = request.getParameter("emailaddress");
        String password = request.getParameter("password");
        try (Connection connect = new DBConnection().getConnection()) {

            if (!checkEmail(emailaddress, connect)) {
                this.write(emailaddress, password, connect);
                response.sendRedirect("/BudgetTracker/secure.budgettracker.com/updateaccount.jsp");
                return;
            }
            response.sendRedirect("/BudgetTracker/secure.budgettracker.com/createuser.jsp");

        } catch (ClassNotFoundException | SQLException ex) {
            response.getWriter().print(ex);
        }
    }

    private void write(String email, String password, Connection connection) throws SQLException {
        String query = " insert into users (email,password) values (?, ?)";
        try (PreparedStatement preparedStmt = connection.prepareStatement(query, PreparedStatement.RETURN_GENERATED_KEYS)) {
            preparedStmt.setString(1, email);
            preparedStmt.setString(2, password);
            preparedStmt.execute();
        }
    }

    private boolean checkEmail(String email, Connection connect) throws SQLException {
        String query = "SELECT email FROM users WHERE email ='" + email + "'";
        ResultSet rs = null;
        try (Statement stmt = connect.createStatement()) {
            rs = stmt.executeQuery(query);
            return rs.first();
        } finally {
            if (rs != null) {
                rs.close();
            }
        }

    }
}
