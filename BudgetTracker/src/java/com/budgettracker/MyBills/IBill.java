package com.budgettracker.MyBills;

import java.util.Date;
import java.util.List;

public interface IBill {
	void addBill(Bill bill);
	void deleteBill(Bill bill);
	void cancelBill(Bill bill);
	void updateAmount(Type type, double amount);
	void renewBill(Bill bill);
	void recordBills(List<Bill> bills);
	void filterOutChecked();
	void filterOutPaid();
	void filterByDates(Date startDate, Date endDate);

}
