import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-header-logged',
  templateUrl: './header-logged.component.html',
  styleUrls: ['./header-logged.component.css']
})
export class HeaderLoggedComponent implements OnInit {

  constructor(private userLog: UserService) { }

  logout(){
    this.userLog.loggedIn =false;
  }

  ngOnInit(): void {
  }

}
