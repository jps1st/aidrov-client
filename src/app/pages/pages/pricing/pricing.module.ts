import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PricingRoutingModule} from './pricing-routing.module';
import {PricingComponent} from './pricing.component';
import {IconModule} from '@visurel/iconify-angular';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormWizardRoutingModule} from '../../ui/forms/form-wizard/form-wizard-routing.module';
import {BreadcrumbsModule} from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import {ContainerModule} from '../../../../@vex/directives/container/container.module';
import {SecondaryToolbarModule} from '../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    declarations: [PricingComponent],
    imports: [
        CommonModule,
        PricingRoutingModule,
        IconModule,
        FlexLayoutModule,
        MatButtonModule,
        MatStepperModule,
        FormWizardRoutingModule,
        MatSnackBarModule,
        MatIconModule,
        ReactiveFormsModule,
        MatStepperModule,
        FlexLayoutModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        SecondaryToolbarModule,
        MatSelectModule,
        IconModule,
        BreadcrumbsModule,
        ContainerModule
    ]
})
export class PricingModule {
}
