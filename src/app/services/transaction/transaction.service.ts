import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transaction } from 'src/app/interfaces/transaction';
import { TRANSACTIONS } from 'src/app/mocks/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  getTransactionsByUserId(id: number): Observable<Transaction[]> {
    // TODO: call backend and get user accounts
    return of(TRANSACTIONS);
  }
}
