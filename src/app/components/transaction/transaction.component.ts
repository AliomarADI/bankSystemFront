import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {TransferService} from '../../service/transfer.service';
import {TransactionService} from '../../service/transaction.service';
import {TransferModel} from '../../Models/transfer.model';
import {TransactionModel} from '../../Models/transaction.model';
import {TransactionType} from '../../Models/transactionType.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private userServe: UserService, private tsAction: TransactionService) { }


  tsType: TransactionType[] = [
    {value: 'ONAY',name: 'ONAY'},
    {value: 'UTIL',name: 'ComService'},
    {value: 'ESP',name: 'ЕСП'},
    {value: 'FINE',name: 'Штраф'},
    {value: 'TAX',name: 'Налог'}
  ];


// const arr: TransactionType= [
//   {id: 1, text: 'Sentence 1'},
//   {id: 2, text: 'Sentence 2'},
//   {id: 3, text: 'Sentence 3'},
//   {id: 4, text: 'Sentenc4 '},
// ];

  choose: any;
  value: string;
  user = this.userServe.user;
  payerId = this.user.id;

  pick: string;
  amount: number;
  addinfo: string;
  commissionForPage: number = 0;

  send(type: string, value: string, amount: number){
    this.commissionForPage = amount * 0.10;
    let commission = amount * 0.10;
    let transaction = new TransactionModel(this.payerId,amount,type,value,commission);

    console.log(type);
    console.log(value);

    this.tsAction.createTransaction(transaction).subscribe(res =>
      {

        console.log(res);
      }
    );
  }

  ngOnInit(): void {
  }

}
