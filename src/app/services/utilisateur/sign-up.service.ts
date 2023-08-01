import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private apiUrl = 'http://localhost:8080/api/users'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  signup(data:string) {
    const body = { data };
    console.log(data);
    return this.http.post<any>(`${this.apiUrl}/create-user`, body);
  }

  checkEmail(email:string){
     return fetch(`${this.apiUrl}/check-email?email=${email}`);
    
  }
}
