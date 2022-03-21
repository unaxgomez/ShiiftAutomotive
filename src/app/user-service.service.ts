import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public http: HttpClient) { }

  httpOptions: object = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>('https://localhost:5001/api/Users')
  }

  postUser(us: User): Observable<User>{
    return this.http.post<User>("https://localhost:5001/api/Users", us, this.httpOptions)
  }

  checkUser(email: string, password: string): Observable<number>{
    return this.http.get<number>('https://localhost:5001/api/users/login/' + email + '/' + password)
  }

  getUser(id:number):Observable<User>{
    return this.http.get<User>('https://localhost:5001/api/Users/' + id)
  }

  putUser(user: User): Observable<User>{
    return this.http.put<User>("https://localhost:5001/api/Users/" + user.id, user, this.httpOptions)
  }

  deleteUser(id: number): Observable<User>{
    return this.http.delete<User>("https://localhost:5001/api/Users/" + id)
  }
}
