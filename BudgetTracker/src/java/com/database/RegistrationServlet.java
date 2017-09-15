/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.database;

import com.google.gson.Gson;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
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
    Gson gson = new Gson();
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        String emailaddress = request.getParameter("emailaddress");
        String password = request.getParameter("password");
      
       
        if (this.openConnection()) {
            if (!checkEmail(emailaddress)) {
                this.write(emailaddress, password);
                return;
            }
            response.sendRedirect("/BudgetTracker/secure.budgettracker.com/createuser.jsp");
        }
        response.getWriter().print("Connection problem.Please try later");
    }
    
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
    
    private void write(String email, String password) {
        try {
            String query = " insert into accounts (email,password) values (?, ?)";
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
            String query = "SELECT * FROM accounts WHERE email ='" + email + "'";
            Statement stmt = connect.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            if (rs.next()) {
                return true;
            }
        } catch (SQLException ex) {
            Logger.getLogger(RegistrationServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
}
