import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn = false;
  user = null;
  constructor(private http: HttpClient) {
  }

  createUser(user: User): Observable<any> {
    return this.http.post('/users/create', user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`/users/${id}`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`/users/all/${id}`);
  }

  updateUser(user: User): Observable<any> {
    return this.http.post('/users/update', user);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.get(`/users/login?username=${username}&password=${password}`);
  }

  getByPhoneNumber(phoneNumber:string):Observable<any>{
    return this.http.get(`/users/phoneNumber?phoneNumber=${phoneNumber}`);
  }

}
