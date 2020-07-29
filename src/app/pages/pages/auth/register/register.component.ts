import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {fadeInUp400ms} from '../../../../../@vex/animations/fade-in-up.animation';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '../../../../auth/auth.service';

@Component({
    selector: 'vex-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    animations: [
        fadeInUp400ms
    ]
})
export class RegisterComponent implements OnInit {

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
            name: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            passwordConfirm: ['', Validators.required],
            termsAccepted: ['', Validators.requiredTrue]
        });
    }

    async send() {
        this.snackbar.dismiss();

        if (!this.form.valid) {
            this.snackbar.open('Please fill up all fields with valid input.', 'OK', {duration: 5000});
            return;
        }

        const reg = this.form.getRawValue();
        if (reg.password !== reg.passwordConfirm) {
            this.snackbar.open('Passwords do not match.', 'OK', {duration: 5000});
            return;
        }

        try {
            await this.authService.signup(reg.name, reg.email, reg.password);
            this.router.navigate(['/']);
            this.snackbar.open('Your account has been created.', 'OK', {duration: 5000});
        } catch (e) {
            const m = e.error ? e.error : e.message ? e.message : 'An error occurred with sign-up. Pleas try again later.';
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
