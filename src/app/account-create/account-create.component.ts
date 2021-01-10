import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountServiceService} from '../services/account/account-service.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  constructor(private accountService: AccountServiceService, private formBuilder: FormBuilder) { }

  newaccount: FormGroup;
  
  ngOnInit(): void {
    this.newaccount = this.formBuilder.group({
      name: [null, [Validators.required]],
      value: [null, Validators.required],
      currency: [null, Validators.required]
    });
  }

  async create() {
    var name: string = (<HTMLInputElement>document.getElementById("namefield")).value;
    var value: number = +(<HTMLInputElement>document.getElementById("valuefield")).value;
    var currencyCode: string = (<HTMLInputElement>document.getElementById("currencyfield")).value;

    // TODO: call service to save
    this.accountService.createAccount(name, value, currencyCode);
  }

}
