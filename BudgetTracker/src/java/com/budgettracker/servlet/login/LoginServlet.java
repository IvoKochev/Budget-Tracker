/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.budgettracker.servlet.login;

import com.budgettracker.database.connection.DBConnection;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
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
public class LoginServlet extends HttpServlet {

    private Connection connection = null;

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String email = req.getParameter("username");
        String password = req.getParameter("password");
        try {
            connection = new DBConnection().getConnection();
            if (checkEmailAndPassword(email, password)) {
                resp.sendRedirect("/BudgetTracker/secure.budgettracker.com/updateaccount.jsp");
                return;
            }
            resp.sendRedirect("/BudgetTracker/secure.budgettracker.com/login_secure-f.jsp");

        } catch (ClassNotFoundException | SQLException ex) {
            resp.getWriter().print(ex);
        } finally {
            try {
                connection.close();
            } catch (SQLException ex) {
                Logger.getLogger(LoginServlet.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    private boolean checkEmailAndPassword(String email, String password) {
        try {
            String query = "SELECT email,password FROM accounts WHERE email ='" + email + "'";
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            rs.next();
            String pass = rs.getString("password");
            return password.equals(pass);
        } catch (SQLException ex) {
            Logger.getLogger(LoginServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
}
