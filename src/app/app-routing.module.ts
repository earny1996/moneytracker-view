import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AccountsComponent } from './accounts/accounts.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { TransactionsComponent } from './transaction/transactions/transactions.component';
import { TransactionCreateComponent } from './transaction/transaction-create/transaction-create.component';
import { TransactionDetailComponent } from './transaction/transaction-detail/transaction-detail.component';



const routes: Routes = [
  { path: 'accounts', component: AccountsComponent },
  { path: 'accounts/create', component: AccountCreateComponent },
  { path: 'accounts/detail/:id', component: AccountDetailComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'transactions/create', component: TransactionCreateComponent },
  { path: 'transactions/detail/:id', component: TransactionDetailComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/detail/:id', component: UserDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }