import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }

  saveUser(userData : any)
  {
     return this.http.post("http://localhost:8080/save",userData);
  }
}
