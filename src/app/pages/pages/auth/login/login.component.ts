import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import {fadeInUp400ms} from '../../../../../@vex/animations/fade-in-up.animation';
import {AuthService} from '../../../../auth/auth.service';

@Component({
    selector: 'vex-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        fadeInUp400ms
    ]
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    inputType = 'password';
    visible = false;

    icVisibility = icVisibility;
    icVisibilityOff = icVisibilityOff;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private cd: ChangeDetectorRef,
        private snackbar: MatSnackBar,
        private authService: AuthService
    ) {
    }

    ngOnInit() {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    async send() {
        try {
            const sub = this.form.getRawValue();
            await this.authService.signinUser(sub.email, sub.password);
            this.router.navigate(['dashboards/analytics']);
        } catch (e) {
            const m = e.error ? e.error : e.message ? e.message : 'An error occurred with login. Pleas try again later.';
            this.snackbar.open(m, 'OK', {duration: 5000});
        }
    }

    toggleVisibility() {
        if (this.visible) {
            this.inputType = 'password';
            this.visible = false;
            this.cd.markForCheck();
        } else {
            this.inputType = 'text';
            this.visible = true;
            this.cd.markForCheck();
        }
    }
}
