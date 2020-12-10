import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {TransferService} from '../../service/transfer.service';
import {TransactionService} from '../../service/transaction.service';
import {TransferModel} from '../../Models/transfer.model';
import {TransactionModel} from '../../Models/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private userServe: UserService, private tsAction: TransactionService) { }

  tsType: string[] = ['ONAY','UTIL','ESP','FINE','TAX','OTHER'];

  choose: any;

  pick: string;
  amount: number;
  addinfo: string;
  commissionForPage: number = 0;

  send(type: string, value: string, amount: number){
    this.commissionForPage = amount * 0.10;
    let commission = amount * 0.10;
    let transaction = new TransactionModel(0,amount,type,value,commission);

    this.tsAction.createTransaction(transaction).subscribe(res =>
      {
        console.log(res);
      }
    );
  }

  ngOnInit(): void {
  }

}
