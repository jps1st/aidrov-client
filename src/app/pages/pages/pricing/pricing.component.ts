import {Component, OnInit} from '@angular/core';
import icBeenhere from '@iconify/icons-ic/twotone-beenhere';
import icStars from '@iconify/icons-ic/twotone-stars';
import icBusinessCenter from '@iconify/icons-ic/twotone-business-center';
import icPhoneInTalk from '@iconify/icons-ic/twotone-phone-in-talk';
import icMail from '@iconify/icons-ic/twotone-mail';
import {MatSnackBar} from '@angular/material/snack-bar';
import {stagger60ms} from '../../../../@vex/animations/stagger.animation'; 
import icDescription from '@iconify/icons-ic/twotone-description';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {stagger80ms} from '../../../../@vex/animations/stagger.animation';
import {fadeInUp400ms} from '../../../../@vex/animations/fade-in-up.animation';
import {scaleIn400ms} from '../../../../@vex/animations/scale-in.animation';
import {fadeInRight400ms} from '../../../../@vex/animations/fade-in-right.animation';

@Component({
    selector: 'vex-pricing',
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss'],
    animations: [
        stagger80ms,
        fadeInUp400ms,
        scaleIn400ms,
        fadeInRight400ms
    ]
})
export class PricingComponent implements OnInit {

    accountFormGroup: FormGroup;
    householdMemberFormGroup: FormGroup; 

    verticalAccountFormGroup: FormGroup;
    verticalPasswordFormGroup: FormGroup;
    verticalConfirmFormGroup: FormGroup;

    icBeenhere = icBeenhere;
    icStars = icStars;
    icBusinessCenter = icBusinessCenter;
    icPhoneInTalk = icPhoneInTalk;
    icMail = icMail;
    icDescription = icDescription;
    icDoneAll = icDoneAll;

    constructor(private fb: FormBuilder,private snackbar: MatSnackBar) {
    }

    ngOnInit() {

        this.accountFormGroup = this.fb.group({
            firstName: [null, Validators.required],
            middleName: [null, Validators.required],
            lastName: [null, Validators.required],
            sreetHouseNo: [null, Validators.required],
            purok: [null, Validators.required],
            baranggay: [null, Validators.required],
            municipality: [null, Validators.required],
            province: [null, Validators.required], 
            gender: [null, Validators.required],
            status: [null, Validators.required],
            birthDate: [null, Validators.required],
            residenceType: [null, Validators.required],
            contact: [null, Validators.required]
        });
    }


    submit() {
        this.snackbar.open('Hooray! You successfully created your account.', null, {
            duration: 5000
        });
    }

}
