import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {VexRoutes} from '../../../../../@vex/interfaces/vex-route.interface';
import {CitizenProfileViewComponent} from './view/citizen-profile-view.component';
import {CitizenProfileComponent} from './citizen-profile.component';


const routes: VexRoutes = [
    {
        path: '',
        component: CitizenProfileComponent,
        data: {
            toolbarShadowEnabled: true,
            containerEnabled: true
        },
        children: [
            {
                path: '',
                component: CitizenProfileViewComponent
            },
            {
                path: 'edit',
                component: CitizenProfileViewComponent
            },
            // {
            //     path: 'timeline',
            //     loadChildren: () => import('./social-timeline/social-timeline.module').then(m => m.SocialTimelineModule)
            // }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CitizenProfileRoutingModule {
}
