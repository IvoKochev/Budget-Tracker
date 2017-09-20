package com.budgettracker.Budget;

import com.budgettracker.MyBills.Bill;

public interface IBudget {
	void addToBudget(); // parameters to be added
	void updateCategory(Category category);
	void hideSubCategories();
	void deleteSubCategories();
	void editMove(); //parameters to be added
	void addToBills();
	void addToExistingBill(Bill bill);
	void customizeAmount();
	void budgetReport(int numberOfMonths);

}
