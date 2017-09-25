<%-- 
    Document   : newAccount
    Created on : Sep 25, 2017, 12:12:15 PM
    Author     : slavi
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>Java Servlet JSON</title>
        <script src="js/jquery.1.9.1.min.js"></script>

        <!-- bootstrap just to have good looking page -->
        <link href="bootstrap/css/bootstrap.css" type="text/css" rel="stylesheet" />

        <!-- we code these -->


    </head>

    <body>
        <div id="border">
            <form id="someform" action="../AccountServlet" method="post">
                <input type="text" name="foo" />
                <input type="text" name="bar" />
                <input type="text" name="baz" />
                <input type="submit" name="submit" value="Submit" />
            </form>
        </div>
    </body> 
</html>
<script>
    $(document).on("submit", "#someform", function (event) {
        var $form = $(this);

        $.post($form.attr("action"), $form.serialize(), function (response) {
           
        });

        event.preventDefault(); // Important! Prevents submitting the form.
    });
</script>