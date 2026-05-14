import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  router=inject(Router);
  loginService=inject(Login)
  email!:string;
  password!:string;
  authenticate(){
    this.loginService.login({email: this.email,password: this.password}).subscribe({
      next: result=>this.router.navigate(["/dashboard"]),
      error:err=>console.log("login failed",err)
    })
  }
}
