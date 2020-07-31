import {Component, OnInit} from '@angular/core';

import icMail from '@iconify/icons-ic/twotone-mail';
import icAccessTime from '@iconify/icons-ic/twotone-access-time';

import accountEditOutline from '@iconify/icons-mdi/account-edit-outline';

import icAdd from '@iconify/icons-ic/twotone-add';
import icWhatshot from '@iconify/icons-ic/twotone-whatshot';
import icWork from '@iconify/icons-ic/twotone-work';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icCheck from '@iconify/icons-ic/twotone-check';

import icSearch from '@iconify/icons-ic/twotone-search';
import {CitizenProfilePageService} from '../citizen-profile-page.service';
import {stagger40ms} from '../../../../../../@vex/animations/stagger.animation';
import {scaleIn400ms} from '../../../../../../@vex/animations/scale-in.animation';
import {fadeInRight400ms} from '../../../../../../@vex/animations/fade-in-right.animation';
import {fadeInUp400ms} from '../../../../../../@vex/animations/fade-in-up.animation';
import {friendSuggestions} from '../../../../../../static-data/friend-suggestions';
import {FriendSuggestion} from '../../../social/social.component';
import {ActivatedRoute, Router} from '@angular/router';
import {CitizenModel} from 'aidrov-models';

@Component({
    selector: 'vex-citizen-profile-view',
    templateUrl: './view-citizen-profile.component.html',
    styleUrls: ['./view-citizen-profile.component.scss'],
    animations: [
        fadeInUp400ms,
        fadeInRight400ms,
        scaleIn400ms,
        stagger40ms
    ]
})
export class ViewCitizenProfileComponent implements OnInit {

    suggestions = friendSuggestions;

    icWork = icWork;
    icPhone = icPhone;
    icPersonAdd = icPersonAdd;
    icCheck = icCheck;
    icMail = icMail;
    icAccessTime = icAccessTime;
    icAdd = icAdd;
    icWhatshot = icWhatshot;
    icSearch = icSearch;
    iaccountEditOutline = accountEditOutline;
    val: CitizenModel;
    private id: string;

    constructor(
        private pageService: CitizenProfilePageService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {

    }

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.pageService.subject.subscribe((val: CitizenModel) => {
            this.val = val;
            // console.log(val);
        });
    }

    addFriend(friend: FriendSuggestion) {
        friend.added = true;
    }

    removeFriend(friend: FriendSuggestion) {
        friend.added = false;
    }

    trackByName(index: number, friend: FriendSuggestion) {
        return friend.name;
    }

    createCustomer() {
        alert('here');
    }

    navToEdit() {
        this.router.navigate(['apps/social', this.id, 'edit']);
    }
}
