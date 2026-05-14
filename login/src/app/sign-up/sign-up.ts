import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../register';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  router=inject(Router);
  registerService=inject(Register);
  email!:String;
  password!:String;
  register(){
    this.registerService.registerUser({email:this.email,password:this.password}).subscribe({
      next:result=>{
        this.router.navigate(['/login'])
        console.log("User Registered Successfull");
      },
      error:err=>console.log("Registration Failed",err)
    })
  }
}
