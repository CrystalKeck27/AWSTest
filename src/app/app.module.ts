import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

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
