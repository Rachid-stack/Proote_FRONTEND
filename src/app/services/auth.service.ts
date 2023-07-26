import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    const body = { email, password };
    return this.http.post<any>(`${this.apiUrl}/signup`, body);
  }

  login(email: string, password: string) {
    const body = { email, password };
    return this.http.post<any>(`${this.apiUrl}/login`, body);
  }
}
