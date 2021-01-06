import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from '../../services/account/account-service.service';
import { Account } from '../../interfaces/account';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {

  constructor(private accountService: AccountServiceService) {  }

  accounts: Account[];

  getAccounts(): void {
    // TODO: implement userid
    this.accountService.getAccountsByUserId(1).subscribe(serviceAccounts => this.accounts = serviceAccounts);
  }

  ngOnInit(): void {
    this.getAccounts();
  }

  async create() {

  }

}
