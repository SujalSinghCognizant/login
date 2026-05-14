import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Register {
  http=inject(HttpClient);
  registerUser(data:any){
    return this.http.post("http://localhost:3000/auth/login",data);
  }
}
