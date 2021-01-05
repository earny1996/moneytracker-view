import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'src/app/interfaces/transaction';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[];

  constructor(private transactionService: TransactionService, private router: Router, private route: ActivatedRoute) { }

  getTransactions(): void {
    // TODO: implement userid
    this.transactionService.getTransactionsByUserId(1).subscribe(serviceTransactions => this.transactions = serviceTransactions);
  }

  showTransactionDetail(accountId: number): void{
    this.router.navigate(['detail/' + accountId], { relativeTo: this.route });
  }

  createNewTransaction(): void {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  ngOnInit(): void {
    this.getTransactions();
  }

}
