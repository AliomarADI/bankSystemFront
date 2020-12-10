import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(username: string, password: string) {
    this.userService.login(username, password).subscribe(res => {
      this.userService.user = res;
      this.userService.loggedIn = true;
      console.log(this.userService.user);
      console.log(this.userService.loggedIn);
      this.router.navigate(['profile']);
    });
  }

}
