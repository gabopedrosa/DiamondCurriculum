import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders }  from '@angular/common/http'
import { Observable, map } from 'rxjs'

export interface LoginForm {
  email: string,
  password: string
  role: string;
}

export interface User {
  name?: string;
  cpf?: string;
  birth?: Date;
  escolaridade?: string;
  email?: string;
  password?: string;
  role?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginForm: LoginForm) {
    
      const url = 'http://localhost:3000/api/users/login'
      return this.http.post<any>(url, {email: loginForm.email, password: loginForm.password}).pipe(
        map((token) => {
          localStorage.setItem('token', token.access_token);
          return token;
        })
      )     
  } 

  register(user) {
    const url = 'http://localhost:3000/api/users'
    return this.http.post<any>(url, user).pipe(
      map(user => user)
    )
  }


}