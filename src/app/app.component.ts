import {Component, Inject, LOCALE_ID, Renderer2} from '@angular/core';
import {ConfigService} from '../@vex/services/config.service';
import {Settings} from 'luxon';
import {DOCUMENT} from '@angular/common';
import {Platform} from '@angular/cdk/platform';
import {NavigationService} from '../@vex/services/navigation.service';
import icLayers from '@iconify/icons-ic/twotone-layers';
import icAssigment from '@iconify/icons-ic/twotone-assignment';
import icPersonOutline from '@iconify/icons-ic/twotone-person-outline';
import icSettings from '@iconify/icons-ic/twotone-settings';
import {LayoutService} from '../@vex/services/layout.service';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {SplashScreenService} from '../@vex/services/splash-screen.service';
import {Style, StyleService} from '../@vex/services/style.service';
import {ConfigName} from '../@vex/interfaces/config-name.model';
import {AuthService} from "./auth/auth.service";

@Component({
    selector: 'vex-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Citizen Roster';

    constructor(
        private configService: ConfigService,
        private styleService: StyleService,
        private renderer: Renderer2,
        private platform: Platform,
        @Inject(DOCUMENT) private document: Document,
        @Inject(LOCALE_ID) private localeId: string,
        private layoutService: LayoutService,
        private route: ActivatedRoute,
        private navigationService: NavigationService,
        private splashScreenService: SplashScreenService,
        private authService: AuthService,
        private router: Router
    ) {
        Settings.defaultLocale = this.localeId;

        if (this.platform.BLINK) {
            this.renderer.addClass(this.document.body, 'is-blink');
        }

        /**
         * Customize the template to your needs with the ConfigService
         * Example:
         *  this.configService.updateConfig({
         *    sidenav: {
         *      title: 'Custom App',
         *      imageUrl: '//placehold.it/100x100',
         *      showCollapsePin: false
         *    },
         *    footer: {
         *      visible: false
         *    }
         *  });
         */

        /**
         * Config Related Subscriptions
         * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
         * Example: example.com/?layout=apollo&style=default
         */
        this.route.queryParamMap.pipe(
            map(queryParamMap => queryParamMap.has('rtl') && coerceBooleanProperty(queryParamMap.get('rtl'))),
        ).subscribe(isRtl => {
            this.document.body.dir = isRtl ? 'rtl' : 'ltr';
            this.configService.updateConfig({
                rtl: isRtl
            });
        });

        this.route.queryParamMap.pipe(
            filter(queryParamMap => queryParamMap.has('layout'))
        ).subscribe(queryParamMap => this.configService.setConfig(queryParamMap.get('layout') as ConfigName));

        this.route.queryParamMap.pipe(
            filter(queryParamMap => queryParamMap.has('style'))
        ).subscribe(queryParamMap => this.styleService.setStyle(queryParamMap.get('style') as Style));


        /**
         * Add your own routes here
         */
        this.navigationService.items = [
            {
                type: 'link',
                label: 'Dashboard',
                route: '/',
                icon: icLayers,
                routerLinkActiveOptions: {exact: true}
            },
            {
                type: 'subheading',
                label: 'Apps',
                children: [
                    {
                        type: 'link',
                        label: 'Roster',
                        route: '/apps/aio-table',
                        icon: icAssigment
                    },
                    {
                        type: 'dropdown',
                        label: 'My Account',
                        icon: icPersonOutline,
                        children: [
                            {
                                type: 'link',
                                label: 'Profile',
                                route: () => {
                                    const currentUserId = this.authService.userAccount.documentId;
                                    this.router.navigate(['/apps/social/', currentUserId]);
                                },
                                routerLinkActiveOptions: {exact: true}
                            },
                            {
                                type: 'link',
                                label: 'Timeline',
                                route: `/apps/social/${this.authService.userAccount.documentId}/timeline`,
                                routerLinkActiveOptions: {exact: true}
                            },
                            {
                                type: 'link',
                                label: 'Quarantine Pass',
                                route: `/apps/social/${this.authService.userAccount.documentId}/timeline`,
                                routerLinkActiveOptions: {exact: true}
                            }
                        ]
                    }
                ]
            },
            {
                type: 'subheading',
                label: 'Customize',
                children: []
            },
            {
                type: 'link',
                label: 'Configuration',
                route: () => this.layoutService.openConfigpanel(),
                icon: icSettings
            }
        ];
    }
}
