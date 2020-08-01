import {Component, OnInit} from '@angular/core';
import {fadeInRight400ms} from '../../../../../@vex/animations/fade-in-right.animation';
import {scaleIn400ms} from '../../../../../@vex/animations/scale-in.animation';
import {Link} from '../../../../../@vex/interfaces/link.interface';
import {ActivatedRoute} from '@angular/router';
import {CitizenProfilePageService} from './citizen-profile-page.service';
import {CitizenModel} from 'aidrov-models';
import { UploadedAssetInterface } from 'ladrov';

// export interface FriendSuggestion {
//     name: string;
//     imageSrc: string;
//     friends: number;
//     added: boolean;
// }

@Component({
    selector: 'vex-social',
    templateUrl: './citizen-profile.component.html',
    styleUrls: ['./citizen-profile.component.scss'],
    animations: [
        scaleIn400ms,
        fadeInRight400ms
    ]
})
export class CitizenProfileComponent implements OnInit {

    links: Link[] = [
        {
            label: 'Profile',
            route: './',
            routerLinkActiveOptions: {exact: true}
        },
        // {
        //     label: 'Activity',
        //     route: './timeline'
        // },
        // {
        //     label: 'Quarantine Pass',
        //     route: '',
        //     disabled: true
        // }
    ];
    val: CitizenModel;
    imageExists: UploadedAssetInterface;
    private id: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private pageService: CitizenProfilePageService
    ) {
    }

    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.pageService.setTarget(id);
        this.pageService.subject.subscribe((val: CitizenModel) => {
            this.val = val;
            // console.log(val);
            this.imageExists = val.image;
        });
    }
}
