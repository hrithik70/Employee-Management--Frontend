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

  getAllUser()
  {
    return this.http.get("http://localhost:8080/getUsers");
  }

  deleteUserById(userId: any) {
    return this.http.post("http://localhost:8080/delete/"+userId,null);
  }

  fetchUserById(userId: any) {
   return this.http.get("http://localhost:8080/fetchUser/"+userId);
  }
  
  updateUser(userId: any, userDataJson: any) {
    return this.http.post("http://localhost:8080/update/"+userId , userDataJson);
  }
  
}
