import { Component, OnInit } from '@angular/core';
import { AccountServiceService} from '../services/account/account-service.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  constructor(private accountService: AccountServiceService) { }

  ngOnInit(): void {
  }

  async create() {
    var name: string = (<HTMLInputElement>document.getElementById("namefield")).value;
    var value: number = +(<HTMLInputElement>document.getElementById("valuefield")).value;
    var currencyCode: string = (<HTMLInputElement>document.getElementById("currencyfield")).value;

    // TODO: call service to save
    this.accountService.createAccount(name, value, currencyCode);
  }

}
