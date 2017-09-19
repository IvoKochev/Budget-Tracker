package com.budgettracker.MyBills;

import com.budgettracker.account.Account;
import java.util.Date;

public class Bill {
	private String payee;
	private double amount;
	private boolean isPaid;
	private boolean isChecked;
	private Date startingDate;
	private Account account;
	private Account transferToAcc;
	private Recurrence recurrence;
	private Category category;
}
