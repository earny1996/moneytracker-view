import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountCreateComponent } from './account-create/account-create.component';
import { TransactionsComponent } from './transaction/transactions/transactions.component';
import { TransactionDetailComponent } from './transaction/transaction-detail/transaction-detail.component';
import { TransactionCreateComponent } from './transaction/transaction-create/transaction-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    DashboardComponent,
    AccountsComponent,
    AccountDetailComponent,
    UsersComponent,
    UserDetailComponent,
    AccountCreateComponent,
    TransactionsComponent,
    TransactionDetailComponent,
    TransactionCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
