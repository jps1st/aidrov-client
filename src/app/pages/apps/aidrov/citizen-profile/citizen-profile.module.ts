import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import {IconModule} from '@visurel/iconify-angular';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {CitizenProfilePageService} from './citizen-profile-page.service';
import {CitizenProfileRoutingModule} from './citizen-profile-routing.module';
import {PageLayoutModule} from '../../../../../@vex/components/page-layout/page-layout.module';
import {CitizenProfileComponent} from './citizen-profile.component';
import {CitizenProfileViewComponent} from './view/citizen-profile-view.component';

@NgModule({
    declarations: [
        CitizenProfileComponent,
        CitizenProfileViewComponent
    ],
    providers: [
        CitizenProfilePageService
    ],
    imports: [
        CommonModule,
        CitizenProfileRoutingModule,
        PageLayoutModule,
        FlexLayoutModule,
        MatTabsModule,
        IconModule,
        MatButtonModule,
        MatIconModule,
        MatRippleModule
    ]
})
export class CitizenProfileModule {
}
