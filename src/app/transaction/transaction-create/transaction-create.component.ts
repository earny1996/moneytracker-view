import { Component, NgModule, OnInit } from '@angular/core';
import { AccountServiceService } from '../../services/account/account-service.service';
import { Account } from '../../interfaces/account';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {
  

  constructor(private accountService: AccountServiceService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {  }

  accounts: Account[];
  newtransaction: FormGroup;

  getAccounts(): void {
    // TODO: implement userid
    this.accountService.getAccountsByUserId(1).subscribe(serviceAccounts => this.accounts = serviceAccounts);
  }

  ngOnInit(): void {
    this.getAccounts();
    this.newtransaction = this.formBuilder.group({
      title: [null, [Validators.required]],
      fromaccount: [null, Validators.required],
      toaccount: [null, Validators.required],
      amount: [null, Validators.required],
      executeddate: [null, Validators.required],
    });
  }

  async create() {
    // TODO: save via backend & redirect to detailview
    this.router.navigate(['transactions']);
  }

}
