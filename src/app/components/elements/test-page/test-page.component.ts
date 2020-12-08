import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {User} from '../../../Models/user.model';
import {UserService} from '../../../service/user.service';

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
  user = new User();
  date: Date;


  constructor(private userService: UserService,
  ) {
  }

  ngOnInit(): void {

  }

  // search(){
  //   this.http.get('https://api.github.com/users/' + this.userName)
  //     .subscribe((response) => {
  //       this.response = response;
  //       console.log(this.response);
  //     })
  // }


  create(user: User): any {
    console.log(user);
    this.userService.createUser(user).subscribe(res => {
      this.user = res;
      console.log('user');
      console.log(this.user);
      console.log(res);
    });
  }

}
