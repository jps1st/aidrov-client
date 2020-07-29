import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VexModule} from '../@vex/vex.module';
import {HttpClientModule} from '@angular/common/http';
import {CustomLayoutModule} from './custom-layout/custom-layout.module';
import {CitizenModel} from 'aidrov-models';
import {AuthGuard} from './auth/auth-guard.service';
import {AuthService} from './auth/auth.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,

        // Vex
        VexModule,
        CustomLayoutModule
    ],
    providers: [
        AuthService,
        AuthGuard,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

console.log(new CitizenModel());
