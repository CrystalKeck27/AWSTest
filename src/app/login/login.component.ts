import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email = '';
    password = '';

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    async loginWithCognito(): Promise<void> {
        try {
            const user = await Auth.signIn(this.email.toString(), this.password.toString());
            console.log('Authentication performed for user=' + this.email + 'password=' + this.password + ' login result==' + user);
            const tokens = user.signInUserSession;
            if (tokens != null) {
                console.log('User authenticated');

                await this.router.navigate(['home']);
                alert('You are logged in successfully !');

            }
        } catch (error) {
            console.log(error);
            alert('User Authentication failed');
        }
    }
}
