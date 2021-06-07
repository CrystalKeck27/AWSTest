import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component.js';
import {SignUpComponent} from './sign-up/sign-up.component.js';
import {HomeComponent} from './home/home.component.js';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'login', component: LoginComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'home', component: HomeComponent}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class AppRoutingModule {
}
