import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Account } from 'src/app/interfaces/account';
import { ACCOUNTS } from './../../mocks/accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private router: Router) { }

  getAccountsByUserId(id: number): Observable<Account[]> {
    // TODO: call backend and get user accounts
    return of(ACCOUNTS);
  }

  getAccountById(id: number): Observable<Account> {
    return of(ACCOUNTS.find(account => account.id === id));
  }

  async createAccount(name: string, value: number, currencycode: string) {
    // TODO: call backend create

    /* ######### DUMMY ################## */
    var nextId: number = ACCOUNTS.length + 1;

    var newAccount: Account = new Account(); 
    newAccount.id = nextId;
    newAccount.name = name;
    newAccount.value = value;
    newAccount.currencycode = currencycode;

    ACCOUNTS.push(newAccount);
    /* ################################# */
    this.router.navigate(['accounts']);
  }
}
