import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Login {
  http=inject(HttpClient)
  login(data:any){
    return this.http.post("http://localhost:3000/user/login",data)
  }
}
