import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../Models/user.model';
import {TransferService} from '../../service/transfer.service';
import {TransferModel} from '../../Models/transfer.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userLog: UserService,private transferServ: TransferService) { }

  transfers: TransferModel[];


  historyOfTransfers(){
    console.log("This user id: " + this.user.id);
      this.transferServ.getUserTransfers(this.user.id).subscribe(res=>
      {
        this.transfers = res;
        console.log(this.transfers);
      })
  }



  historyOfTransactions(){

  }

  user = this.userLog.user;

  ngOnInit(): void {
  }

}
