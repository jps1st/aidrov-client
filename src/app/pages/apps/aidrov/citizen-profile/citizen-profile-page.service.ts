import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs';
import {APIService} from '../../../../backend/api.service';
import {CitizenModel} from 'aidrov-models';

@Injectable()
export class CitizenProfilePageService {

    public subject = new BehaviorSubject<CitizenModel>(new CitizenModel());

    constructor(
        private api: APIService
    ) {
        // api.search(' ', School.name).subscribe(result => {
        //     console.log(result);
        // });

        // api.customFunction({
        //     type: 'School',
        //     requestType: 'GET',
        //     name: 'schoolsAdministeredByUser'
        // }).toPromise().then(r => {
        //     console.log(r);
        // });
    }

    setTarget(school: CitizenModel) {
        this.subject.next(school);
    }

    async save(updates) {
        return this.api.saveDocument(updates).toPromise();
    }

}