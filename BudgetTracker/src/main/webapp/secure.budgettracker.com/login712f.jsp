<%-- 
    Document   : login712f
    Created on : Sep 14, 2017, 9:59:36 AM
    Author     : slavi
--%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html class="login">

    <!-- Mirrored from secure.budgettracker.com/login.php?sp=nouser by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 12 Sep 2017 19:26:01 GMT -->
    <!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=iso-8859-1" /><!-- /Added by HTTrack -->
    <META name="description" content="Free Personal Finance Software to track your Bills, Budget, Calendar, and Transactions. For a small business, We offer Invoice, Estimates, Charts, and other useful tools.">
    <META name="keywords" content="personal budgeting, budget, track, tracker, money, create a budget, bills, finance, loan, budgettracker, budgetracker, living on a budget, mybudget, control, moneytracker, money saving tips, saving money, budgeting system, finance, tracking my expenses, making money,planning,household budget,personal budget,monthly budget, budget examples, debt, spending, debit, credit card, credit, free online budget, money management, budgeting plan, cash, spending, expenses, revenue, allowance, budget calculator, web20, savings, accounting, debt, credit report, economy, payment, bad credit, debt consolidation, make money, credit counseling, microsoft money, quicken, mint, mortgage payment, credit bureau, credit repair, credit rating, business solutions, college savings, auto finance, loan payment, personal finance, how to make money, loan payment calculator, financial accounting, money making, money transfer, debt management, savings accounts, bank credit, money online, software solutions, housing finance, your money, debit card, home budget, loans, spreadsheet, envelope system, envelopes, spreadsheets, debtconsolidation, investing, monetary">
    <meta name="robots" content="index,follow,all" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

    <title>
        BudgetTracker - Free Online Money Management
    </title>

    <head>

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <link rel="STYLESHEET" type="text/css" href="pics/v2/default.css">
        <script src="inc/jquery-1.6.1.min.js" type="text/javascript"></script>
        <script src="inc/jquery-ui-1.8.14.custom.min.js" type="text/javascript"></script>
        <script src="pics/v2/default.js" type="text/javascript"></script>

    </head>
    <body>

        <div class=topcontainer>
            <div class="toparea">
                <div class="logo"></div>
                <a href="createuser.jsp" class="signupbutton"></a>
                <div class="managemoney"></div>

                <div class="signupfree"></div>



                <div class="computers"></div>

            </div>
            <div class="languages" align=right>
                <b class=langbold>English</b> |
                <a href="updatelang5522.html?lang=sp">Spanish</a>		|
                <a href="updatelange68f.html?lang=fr">French</a>		</div>


            <div class="topnav">
                <div style="position:relative;">
                    <ul>
                        <li class=d><span style="color:#089fdc;" href="support.html">Home</span></li>
                        <li class=d><a href="calculators.html">Calculators</a></li>
                        <li class=d><a href="usercommentsb73c.html?t=1">Testimonials</a></li>
                        <li class=d><a href="usercomments.html">Press</a></li>
                        <li><a href="contactus.html">Contact</a></li>
                        <li class=b>
                            <input id=loginbtn onclick="loginClicked();" type=button class="button graybutton" value="Login">
                            <input onclick="location.href = 'createuser.jsp'" type=button class="button greenbutton" value="Sign Up">

                        </li>
                    </ul>
                    <div align=right id=loginformid style=display:none;>
                        <form class=loginfrm method=post action="../LoginServlet">
                            <div align=right>
                                <span style=color:#333;>Email:</span>
                                <input name=username id=emailid size=22 type=text class="textbox" value=""><br>
                            </div>
                            <div align=right>
                                <span style=color:#333; class=smallTxt>Password:</span>
                                <input name=password id=passwordid size=22 type=password class=textbox ><br>
                            </div>
                            <div align=right style=margin-top:10px;>
                                <a style=color:navy;font-size:12px;padding-right:80px; href="forgotpassword.html">Forgot Password</a>
                            </div>
                            <div align=right>
                                <input type=submit value="Login" class="button graybutton">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="middlecontainer">
            <div class="middlearea">

                <div style="height:150px;">
                    <div style="float:left;width:500px;clear:both;">
                        <div class="welcome"></div>
                        <div class="welcometxt">Budget your finances to know where your money is going. BudgetTracker is a complete online money management tool designed to keep track of all your transactions and bank accounts from your computer, mobile phone, or iPad. Receive reminders to your phone or email when your bills are due. Get started for <span style=font-weight:bold;color:green;>Free</span>!</div>
                    </div>
                    <div style="float:left;width:450px;">

                        <div style="position:relative;width:450px;" class="pressbg">

                            <a href="#" class="pressleft"></a>
                            <div id="pressId1" class="presstxt">
                                <img src="pics/affiliates/kiplinger_glass.png">
                                "some people are still not comfortable linking bank accounts directly to a budgeting site. If that describes you, try BudgetTracker.com..."<br><br>
                                <a target=_new href="http://www.kiplinger.com/features/archives/2008/12/best-online-budgeting-sites.html">Kiplinger.com Magazine</a><br>
                                also appeared in:<br>
                                <div align="center" >
                                    <img class="subimg" style="float:left" src="pics/affiliates/yahoofinance.png">
                                    <img class="subimg" style="float:left" src="pics/affiliates/msnmoney.png">
                                </div>
                            </div>
                            <div id="pressId2" class="presstxt">
                                <img height=50 src="pics/affiliates/wsj_125.gif">
                                "Budget Tracker Inc. (budgettracker.com) offers a broad range of services" <br><br>
                                <a target=_new href="http://www.wsj.com/articles/SB123793135079130587">Wall Street Journal</a>
                            </div>
                            <div id="pressId3" class="presstxt">
                                <img src="pics/affiliates/usaweekend.gif">
                                "a good choice for the security-minded"<br><br>
                            </div>
                            <div id="pressId4" class="presstxt">
                                <a href="#" class="pressleft"></a>
                                <img style=background:#000;padding:5px;margin-bottom:10px; height=50 src="pics/affiliates/marketwatch.png">
                                "According to Sander, a simple spreadsheet is one of the best ways to set up a budget. The key word is "simple." Online tools that can help include BudgetTracker.com"
                                <br><br>
                                <a target=_new href="http://www.marketwatch.com/story/4-money-mistakes-you-dont-want-to-make-2011-10-25">MarketWatch</a>
                            </div>
                            <div id="pressId5" class="presstxt">
                                <img src="pics/americanexpress.jpg" height=100>
                                "help you track your daily spending."<br><br>
                                <a target=_new href="../budgettracker.com/pics/affiliates/ae.pdf">American Express</a>
                            </div>
                            <div id="pressId6" class="presstxt">
                                <img src="pics/affiliates/popsci_glass.png">
                                "Forget Quicken-keep track of your financial life with the free and powerful BudgetTracker.com"...
                                <br><br>
                                <a target=_new href="pics/popsciarticle.png">Popular Science Magazine</a>
                            </div>
                            <div id="pressId7" class="presstxt">
                                <img src="pics/vanguard.png">
                                "sites like budgettracker.com allow you to manually enter the accounts and transactions you want to monitor."
                                <br><br>
                                <a target=_new href="https://personal.vanguard.com/us/insights/article/yil-financial-independence-022014?SYND=RSS&amp;Channel=AN">Vanguard</a>
                            </div>
                            <a href="#" class="pressright"></a>
                        </div>
                    </div>
                </div>

                <div class="services"></div>
                <div style="position:relative;">
                    <div id="service1" class="servicesbg">
                        <a href="#" class="serviceleft"></a>
                        <ul>
                            <li>
                                <h1>Track Your Account</h1>
                                <div class="servicetxt">Keep Track of your Checking, Investment, Savings and even PayPal Accounts all from one screen.</div>
                                <a href="info_accounts.html" class="readmore"></a>
                            </li>
                            <li>
                                <h1>Track Spending</h1>
                                <div class="servicetxt">Sync your Transactions by Importing them, or enter them Manually so you can always stay on top of your Budget.</div>
                                <a href="info_spending.html" class="readmore"></a>
                            </li>
                            <li>
                                <h1>Schedule Income</h1>
                                <div class="servicetxt">Keep track of your Paychecks or other sources of Income on the My Income page.</div>
                                <a href="info_income.html" class="readmore"></a>
                            </li>

                        </ul>
                        <a href="#" id="nextServiceId" class="serviceright"></a>
                    </div>
                    <div id=service2 class="servicesbg">
                        <a href="#" class="serviceleft"></a>
                        <ul>
                            <li>
                                <h1>Manage Your Business</h1>
                                <div class="servicetxt">Manage and track your Small Business with Invoices, Estimates, Project Planning, Balance Sheets, and more. In addition, track your Contacts with our built-in CRM System.</div>
                                <a href="info_biz.html" class="readmore"></a>
                            </li>
                            <li>
                                <h1>Create a Budget</h1>
                                <div class="servicetxt">Stay on top of your budget by category or by envelope methods of budgeting.</div>
                                <a href="info_budget.html" class="readmore"></a>
                            </li>
                            <li>
                                <h1>Custom Calendar</h1>
                                <div class="servicetxt">View upcoming Bills, Income, as well as your transactions and Forecast all from the My Calendar page.</div>
                                <a href="info_calendar.html" class="readmore"></a>
                            </li>
                        </ul>
                        <a href="#" id="nextServiceId" class="serviceright"></a>
                    </div>
                    <div id=service3 class="servicesbg">
                        <a href="#" class="serviceleft"></a>
                        <ul>
                            <li>
                                <h1>Organize Your Life</h1>
                                <div class="servicetxt">Track your tasks, New Years Resolutions, Work-Out Schedule or anything you can think of.</div>
                                <a href="info_organize.html" class="readmore"></a>
                            </li>
                            <li>
                                <h1>Forecast Your Income</h1>
                                <div class="servicetxt">Our forecast tool give you the ability to see how much money will be left after all bills and income have been paid.</div>
                                <a href="info_forecast.html" class="readmore"></a>
                            </li>
                            <li>
                                <h1>Be Creative</h1>
                                <div class="servicetxt">One of our most unique and useful features is the ability to create your own applications right from the BudgetTracker site.</div>
                                <a href="info_creative.html" class="readmore"></a>
                            </li>
                        </ul>
                        <a href="#" id="nextServiceId" class="serviceright"></a>
                    </div>

                </div>

            </div>
        </div>


        <div  class="bottomarea">
            <table cellpadding="0" cellspacing="0" border="0" width=1027 align="center">
                <tr>
                    <td valign="top" width="540" class="testimonial">
                        <h1></h1>
                        <div class="testimonailTxt">
                            "Honestly, I am very impressed with this service and find it amazing that it is free. Great work to the BudgetTracker team. You have been around for a while and it is clear that you try to meet everything that your users suggest. Great work."
                        </div>
                        <a href="usercommentsb73c.html?t=1" class="readmore"></a>
                    </td>
                    <td><img src="pics/v2/bottomDivider.png"></td>
                    <td valign="top" width="200" class="links">
                        <h1></h1>
                        <ul>
                            <li>
                                <div class="arrow"></div>
                                <a href="aboutus.html">About Us</a>
                            </li>
                            <li>
                                <div class="arrow"></div>
                                <a href="support.html">Help</a>
                            </li>
                            <li>
                                <div class="arrow"></div>
                                <a href="http://budgettracker.com/bt">Blog</a>
                            </li>
                            <li>
                                <div class="arrow"></div>
                                <a href="contactus.html">Contact Us</a>
                            </li>

                        </ul>

                    </td>
                    <td><img src="pics/v2/bottomDivider.png"></td>
                    <td valign="top" class="findus">
                        <h1></h1>
                        <a class="icon facebook" href="http://www.facebook.com/budgettracker"></a>
                        <a class="icon twitter" href="http://www.twitter.com/budgettracker"></a>
                        <a class="icon googleplus" href="https://plus.google.com/115982107666241461330"></a>
                        <a class="icon rss" href="http://feeds.feedburner.com/budgettracker"></a>
                        <table style="padding-top:30px;">
                            <tr>
                                <td>
                                    <script type="text/javascript" src="https://seal.thawte.com/getthawteseal?host_name=secure.budgettracker.com&amp;size=L&amp;lang=en"></script>
                                </td>
                            </tr>
                        </table>
                        </div>
                    </td>	
                </tr>
                <tr>
                    <td valign="top" colspan="5" class="copyright">

                        <div class=copyrightLinks>
                            <div style=float:left;padding-right:100px;>&copy; 2003-2017 BudgetTracker, Inc. All Rights Reserved.</div>
                            <a href="pricing.html">Subscription</a> |
                            <a href="messageboard.html">Message Boards</a> |
                            <a href="privacy.html">Privacy Policy</a> |
                            <a href="terms.html">Terms of Agreement</a>
                        </div>

                    </td>
                </tr>
            </table>

        </div>
        <script type="text/javascript">
                                var _gaq = _gaq || [];
                                _gaq.push(['_setAccount', 'UA-1576641-1']);
                                _gaq.push(['_trackPageview']);
                                _gaq.push(['_setCustomVar', 1, 'UserID', '0', 3]);
                                var pluginUrl = '../www.google-analytics.com/plugins/ga/inpage_linkid.js';
                                _gaq.push(['_require', 'inpage_linkid', pluginUrl]);
                                (function () {
                                    var ga = document.createElement('script');
                                    ga.type = 'text/javascript';
                                    ga.async = true;
                                    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                                    var s = document.getElementsByTagName('script')[0];
                                    s.parentNode.insertBefore(ga, s);
                                })();
        </script>
        <div id="fb-root"></div>
        <script>(function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id))
                    return;
                js = d.createElement(s);
                js.id = id;
                js.src = "../connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=1601848636733037";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));</script>
    </body>


    <!-- Mirrored from secure.budgettracker.com/login.php?sp=nouser by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 12 Sep 2017 19:26:39 GMT -->
</html>
