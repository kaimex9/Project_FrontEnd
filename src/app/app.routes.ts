import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { ListNursesComponent } from './list-nurses/list-nurses.component';
import { LoginComponent } from './login/login.component';
import { FindByNameComponent } from './find-by-name/find-by-name.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
export const routes: Routes = [

    { path: 'list-nurses', component: ListNursesComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component:LoginComponent },
    {path:'#',component:LoginComponent},
    { path: 'find-by-name', component: FindByNameComponent },
    { path: 'register', component: RegisterComponent},
    {path: 'user', component: UserComponent}
];
