import { Transaction } from './../interfaces/transaction';
import { Account } from '../interfaces/account';
import { formatDate } from '@angular/common';

export const TRANSACTIONS: Transaction[] = [
    {id: 1, title: 'Geld abgehoben', description: null, fromAccount: {id: 1, name: 'Bank', value: 1230.00, currencycode: 'EUR'}, toAccount: {id: 2, name: 'Kasse', value: 150.00, currencycode: 'EUR'}, amount: 542, executedDate: formatDate('2021-01-05', 'dd.MM.yyyy hh:ss', 'en-US'), createdDate: formatDate('2021-01-05 15:45', 'dd.MM.yyyy hh:ss', 'en-US') } 
]