import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

import {Account} from 'ladrov';
import {APIService} from '../backend/api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private userAccount: Account;

    constructor(
        public router: Router,
        private api: APIService
    ) {
        const logged = localStorage.getItem('loggedUsr');
        if (logged) {
            this.userAccount = (JSON.parse(logged) as Account);
            this.api.loggedIn().toPromise().then(res => {
                if (this.userAccount.documentId !== (res as Account).documentId) {
                    this.logout();
                }
            }).catch(err => {
                console.log(err);
                this.logout();
            });
        }

    }

    async signinUser(email: string, password: string) {
        this.userAccount = (await this.api.login(email, password).toPromise() as Account);
        localStorage.setItem('loggedUsr', JSON.stringify(this.userAccount));
    }

    async logout() {
        await this.api.logout();
        this.userAccount = null;
        localStorage.removeItem('loggedUsr');
        this.router.navigate(['/pages/login']);
    }

    isAuthenticated() {
        return this.userAccount != null;
    }

    async signup(name, email, pass) {
        return this.api.signup(name, email, pass).toPromise();
    }
}
