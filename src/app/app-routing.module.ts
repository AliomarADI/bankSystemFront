import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainpageComponent} from './components/mainpage/mainpage.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {TransactionComponent} from './components/transaction/transaction.component';
import {TransferComponent} from './components/transfer/transfer.component';
import {TestPageComponent} from './components/elements/test-page/test-page.component';

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'main', component: MainpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'transaction', component: TransactionComponent},
  {path: 'transfer', component: TransferComponent},
  {path: 'testpage', component: TestPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
