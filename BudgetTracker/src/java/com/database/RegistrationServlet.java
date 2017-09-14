/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.database;

import java.io.IOException;
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
    protected void doPost(HttpServletRequest request,
            HttpServletResponse response) throws ServletException, IOException {

        String emailaddress = request.getParameter("emailaddress");
        String password = request.getParameter("password");
        response.getWriter().print(emailaddress + " " + password);
        response.sendRedirect("/BudgetTracker/secure.budgettracker.com/createuser.jsp");
    }
}
