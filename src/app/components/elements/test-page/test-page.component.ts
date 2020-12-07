import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {User} from '../../../Models/user.model';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

  userName: string;
  response: any;

  // nameForRegister: string;
  // phoneNumber: number;
  // password: string;

  users: User[];

  user : User;

  date: Date;

  localUrl = 'http://localhost:4200/';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }

  search(){
    this.http.get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }



  create(){

    this.http.post('http://localhost:4200/api/users/create', this.user);
    console.log(this.user + " created!")
  }

}
