import { Routes } from '@angular/router';
import { SignIn } from './sign-in/sign-in';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    {path:"",component:SignIn},
    {path:"dashboard",loadComponent:()=>import("./dashboard/dashboard").then(d=>Dashboard)}
];
