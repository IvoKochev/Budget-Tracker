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
public class RegistrationServlet extends HttpServlet {
    
    private Connection connect = null;
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        String emailaddress = request.getParameter("emailaddress");
        String password = request.getParameter("password");
        try {
            connect = new DBConnection().getConnection();
            if (!checkEmail(emailaddress)) {
                this.write(emailaddress, password);
                response.sendRedirect("/BudgetTracker/secure.budgettracker.com/updateaccount.jsp");
                return;
            }
            response.sendRedirect("/BudgetTracker/secure.budgettracker.com/createuser.jsp");
            
        } catch (ClassNotFoundException | SQLException ex) {
            response.getWriter().print(ex);
        } finally {
            try {
                connect.close();
            } catch (SQLException ex) {
                Logger.getLogger(RegistrationServlet.class.getName()).log(Level.SEVERE, null, ex);
            } catch (NullPointerException e) {
                response.getWriter().print("Database connection problem");
            }
        }
    }
    
    private void write(String email, String password) {
        try {
            String query = " insert into users (email,password) values (?, ?)";
            PreparedStatement preparedStmt = connect.prepareStatement(query, PreparedStatement.RETURN_GENERATED_KEYS);
            
            preparedStmt.setString(1, email);
            preparedStmt.setString(2, password);
            
            preparedStmt.execute();
            connect.close();
        } catch (SQLException ex) {
            Logger.getLogger(RegistrationServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    private boolean checkEmail(String email) {
        try {
            String query = "SELECT email FROM users WHERE email ='" + email + "'";
            Statement stmt = connect.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            return rs.first();
        } catch (SQLException ex) {
            Logger.getLogger(RegistrationServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
}
