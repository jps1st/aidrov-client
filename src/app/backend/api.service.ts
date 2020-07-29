import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';

import {SystemDocument} from 'ladrov';

// build origin api route address
const origin = `${window.location.origin}`;

@Injectable({
    providedIn: 'root'
})
export class APIService {

    // WARNING: DO NOT PUT ANY GUI RELATED CODE HERE (loading, warnings, sweetalert etc).
    // They should be done at the component definition of the page.
    constructor(
        private router: Router,
        private http: HttpClient
    ) {
    }

    getDocument(id: string, type: string) {
        return this.http.get(`${origin}/api/document/${type}/${id}`);
    }

    saveDocument(updatedDocument: SystemDocument) {
        return this.http.post<any>(`${origin}/api/document`, updatedDocument);
    }

    customFunction(args: CustomFunctionParams) {
        const {name, type, queryParams, body, requestType} = args;
        if (requestType === 'GET') {
            return this.http.get(`${origin}/api/${type}/${name}`, {params: queryParams});
        }
        if (requestType === 'POST') {
            return this.http.post(`${origin}/api/${type}/${name}`, body);
        }
        throw new Error('Invalid custom function call');
    }

    // auth

    signup(name, email, password) {
        return this.http.post(`${origin}/auth/signup`, {origin, name, email, password});
    }

    login(email, password) {
        return this.http.post(`${origin}/auth/login`, {
            origin,
            authId: email,
            authKey: password
        });
    }

    logout() {
        return this.http.get(`${origin}/auth/logout`);
    }

    loggedIn() {
        return this.http.get(`${origin}/auth/loggedIn`);
    }

}

export class CustomFunctionParams {
    name: string;
    type: string;
    queryParams?: any;
    body?: any;
    requestType: string;
}
