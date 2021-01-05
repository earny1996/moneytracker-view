import { Component, OnInit } from '@angular/core';
import { Account } from '../interfaces/account';
import { AccountServiceService } from '../services/account/account-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts: Account[];

  constructor(private accountService: AccountServiceService, private router: Router, private route: ActivatedRoute) { }

  getAccounts(): void {
    // TODO: implement userid
    this.accountService.getAccountsByUserId(1).subscribe(serviceAccounts => this.accounts = serviceAccounts);
  }

  showAccountDetail(accountId: number): void{
    this.router.navigate(['detail/' + accountId], { relativeTo: this.route });
  }

  createNewAccount(): void {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  ngOnInit(): void {
    this.getAccounts();
  }

}
