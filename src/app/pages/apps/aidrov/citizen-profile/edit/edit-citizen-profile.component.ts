import {Component, OnInit} from '@angular/core';
import icBeenhere from '@iconify/icons-ic/twotone-beenhere';
import icStars from '@iconify/icons-ic/twotone-stars';
import icBusinessCenter from '@iconify/icons-ic/twotone-business-center';
import icPhoneInTalk from '@iconify/icons-ic/twotone-phone-in-talk';
import icMail from '@iconify/icons-ic/twotone-mail';
import {MatSnackBar} from '@angular/material/snack-bar';

import icDescription from '@iconify/icons-ic/twotone-description';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {fadeInRight400ms} from '../../../../../../@vex/animations/fade-in-right.animation';
import {fadeInUp400ms} from '../../../../../../@vex/animations/fade-in-up.animation';
import {scaleIn400ms} from '../../../../../../@vex/animations/scale-in.animation';
import {stagger80ms} from '../../../../../../@vex/animations/stagger.animation';
import {CitizenProfilePageService} from '../citizen-profile-page.service';
import {CitizenModel} from 'aidrov-models';


@Component({
    selector: 'vex-pricing',
    templateUrl: './edit-citizen-profile.component.html',
    styleUrls: ['./edit-citizen-profile.component.scss'],
    animations: [
        stagger80ms,
        fadeInUp400ms,
        scaleIn400ms,
        fadeInRight400ms
    ]
})
export class EditCitizenProfileComponent implements OnInit {

    formGroup: FormGroup;
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

    val: CitizenModel;

    constructor(
        private fb: FormBuilder,
        private snackbar: MatSnackBar,
        private pageService: CitizenProfilePageService
    ) {
    }

    ngOnInit() {
        this.pageService.subject.subscribe((val: CitizenModel) => {
            this.val = val;
            this.formGroup = this.fb.group({
                firstName: [val.fname, Validators.required],
                middleName: [val.mname, Validators.required],
                lastName: [val.lname, Validators.required],
                suffix: [val.suffix],
                unitHouseNo: [val.unitHouseNo], 
                sreetHouseNo: [val.address.streetHouseNo, Validators.required],
                purok: [val.address.purok, Validators.required],
                baranggay: [val.address.barangay, Validators.required],
                municipality: [val.address.municipality, Validators.required],
                province: [val.address.province, Validators.required],
                gender: [val.gender, Validators.required],
                status: [val.civilStatus, Validators.required],
                birthDate: [val.bdate, Validators.required],
                contact: [val.contact],
                contactMobile: [val.mobileNumber],
                contactOffice: [val.contactOffice],
                email: [val.email],
                employed: [val.employed, Validators.required],
                occupation: [val.occupation],
                company: [val.company],
                contactPerson: [val.contactPerson],
                contactPersonNo: [val.contactPersonNo],
            });
        });
    }

    public findInvalidControls() {
        const invalid = [];
        const controls = this.formGroup.controls;
        for (const name in controls) {
            if (controls[name].invalid) {
                invalid.push(name);
            }
        }
        return invalid;
    }


    async submit() {
        try {
            const raw = this.formGroup.getRawValue();
            this.val.fname = raw.firstName;
            this.val.mname = raw.middleName;
            this.val.lname = raw.lastName;
            this.val.suffix = raw.suffix;
            this.val.address.unitHouseNo = raw.unitHouseNo;
            this.val.address.streetHouseNo = raw.sreetHouseNo;
            this.val.address.purok = raw.purok;
            this.val.address.barangay = raw.baranggay;
            this.val.address.municipality = raw.municipality;
            this.val.address.province = raw.province;
            this.val.gender = raw.gender;
            this.val.civilStatus = raw.status;            
            this.val.bdate = (new Date(raw.birthDate)).getTime();
            this.val.phoneNumber = raw.contact;
            this.val.mobileNumber = raw.contactMobile;
            this.val.officeNumber = raw.contactOffice;
            this.val.email = raw.email;
            this.val.employed = raw.employed;
            this.val.occupation = raw.occupation;
            this.val.company = raw.company;
            this.val.contactPerson = raw.contactPerson;
            this.val.contactPersonNo = raw.contactPersonNo;
            await this.pageService.save(this.val);
            this.snackbar.open('Your profile is updated. ' +
                'Please await an SMS information you that your Quarantine Pass is activated.', null, {
                duration: 10000
            });
        } catch (e) {
            this.snackbar.open('An error occured on update.', null, {
                duration: 5000
            });
        }
    }

}
