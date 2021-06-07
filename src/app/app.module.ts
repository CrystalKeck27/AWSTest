import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
// noinspection SpellCheckingInspection
Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: 'us-east-2',
        userPoolId: 'us-east-2_Fo8BjmJT3',
        userPoolWebClientId: '6pq1kt3ucj8gbjiibbf6bfvquh',
        authenticationFlowType: 'USER_PASSWORD_AUTH'
    }
});

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignUpComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
