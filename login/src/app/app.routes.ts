import { Routes } from '@angular/router';
import { SignIn } from './sign-in/sign-in';
import { Dashboard } from './dashboard/dashboard';
import { Home } from './home/home';
import { Login } from './login';
import { SignUp } from './sign-up/sign-up';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"login",component:SignIn},
    {path:"register",component:SignUp},
    {path:"dashboard",loadComponent:()=>import("./dashboard/dashboard").then(d=>Dashboard)}
];
