package com.budgettracker.Overview;

import com.budgettracker.account.Account;
import com.budgettracker.exceptions.InvalidAccountException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Overview  implements IOverview{
    List<Account> accounts;
    
    public Overview() {
        this.accounts = new ArrayList<>();
    }

    @Override
    public void showEverything(Account account) {
        for(Account acc : this.accounts) {
            
        }
    }

    @Override
    public void addAccount(Account account) {
        if(account != null) {
            this.accounts.add(account);
        } else {
            try {
                throw new InvalidAccountException("No such account!");
            } catch (InvalidAccountException ex) {
                Logger.getLogger(Overview.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
	

}
