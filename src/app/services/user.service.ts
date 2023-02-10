import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser.interface';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { IPost } from '../interfaces/IPost.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    // console.log(http)
  }

  private _users:Array<IUser> = [];

  getUsers():Observable<Array<IUser>>{
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id:string|number):Observable<IUser>{
    return this.http.get<IUser>('https://jsonplaceholder.typicode.com/users/'+id);
  }

}
