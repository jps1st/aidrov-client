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
import {ViewCitizenProfileComponent} from './view/view-citizen-profile.component';
import {EditCitizenProfileComponent} from './edit/edit-citizen-profile.component';
import {FormWizardRoutingModule} from '../../../ui/forms/form-wizard/form-wizard-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {SecondaryToolbarModule} from '../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import {MatSelectModule} from '@angular/material/select';
import {BreadcrumbsModule} from '../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import {ContainerModule} from '../../../../../@vex/directives/container/container.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
    declarations: [
        CitizenProfileComponent,
        ViewCitizenProfileComponent,
        EditCitizenProfileComponent
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

        MatRippleModule,
        FormWizardRoutingModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatInputModule,
        MatCheckboxModule,
        SecondaryToolbarModule,
        MatSelectModule,
        BreadcrumbsModule,
        ContainerModule,
        MatAutocompleteModule,
        MatDividerModule
    ]
})
export class CitizenProfileModule {
}
