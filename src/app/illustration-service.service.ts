import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Illustration } from './illustration';

@Injectable({
  providedIn: 'root'
})
export class IllustrationService {

  constructor(public http: HttpClient) { }

  getIllustration():Observable<Illustration[]>{
    return this.http.get<Illustration[]>('https://localhost:5001/api/Illustrations')
  }

  getIllustrationDetail(id: number): Observable<Illustration>{
    return this.http.get<Illustration>('https://localhost:5001/api/Illustrations/' + id)
  }

  httpOptions: object = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  
  

}
