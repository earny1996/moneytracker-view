import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../interfaces/account';
import { ACCOUNTS } from '../mocks/accounts';
import { AccountServiceService } from '../services/account/account-service.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  @Input() account: Account;

  constructor(private route: ActivatedRoute,
    private accountService: AccountServiceService) { }

  getAccount(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.accountService.getAccountById(id).subscribe(account => this.account = account);
  }

  async save(id: number) {
    // TODO: Update account via backend and AccountService component
  }

  ngOnInit(): void {
    this.getAccount();
  }

}
