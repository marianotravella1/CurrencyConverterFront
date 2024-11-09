import { Injectable } from '@angular/core';
import { Login, ResLogin } from '../Interfaces/login';
import { User } from '../Interfaces/user';
import { environment } from '../Environments/environment';
import { SignUp } from '../Interfaces/sign-up';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { 
    const token = this.getToken();
    if(token){
      if(!this.user) this.user = {
        username: '',
        token: token,
        isAdmin: false
      }
      else this.user!.token = token;
    }
  }
user: User | undefined;

  async login(loginData: Login) {
    const res = await fetch(environment.API_URL+'login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    });

    if (res.status !== 200) return;

    const resJson: ResLogin = await res.json();

    if (!resJson.token) return;

    this.user = {
        username: loginData.username,
        token: resJson.token,
        isAdmin: false
    };

    localStorage.setItem("authToken", resJson.token);

    const userDetailsRes = await fetch(environment.API_URL+`usuarios/${encodeURIComponent(loginData.username)}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${resJson.token}`,
            'Content-Type': 'application/json'
        }
    });

    if (userDetailsRes.status !== 200) return;

    const userDetailsResJson = await userDetailsRes.json();

    this.user.isAdmin = userDetailsResJson.isAdmin;

    return userDetailsRes;
  }

  async signUp(registerData: SignUp) {
    const res = await fetch(environment.API_URL+'sign-up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
    });

    if (res.status !== 201) return;
    return res;
  }

  getToken() {
    return localStorage.getItem("authToken");
  }

  clearToken() {
    localStorage.removeItem("authToken")
  }
}
