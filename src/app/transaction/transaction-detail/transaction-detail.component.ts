import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/interfaces/transaction';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {

  @Input() transaction: Transaction;

  constructor(private route: ActivatedRoute,
    private transactionService: TransactionService) { }

  getTransaction(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.transactionService.getTransactionById(id).subscribe(transaction => this.transaction = transaction);
  }

  async save(id: number) {
    // TODO: Update account via backend and AccountService component
  }

  ngOnInit(): void {
    this.getTransaction();
  }

}
