import { Component, ContentChild } from "@angular/core";
import { Account } from "./account";

@Component({
    template: ''
  })
export class Transaction {
    id: number;
    title: string;
    description: string;
    //TODO: fkuser
    @ContentChild(Account) fromAccount: Account;
    @ContentChild(Account) toAccount: Account;
    amount: number;
    executedDate: string;
    createdDate: string;
}
