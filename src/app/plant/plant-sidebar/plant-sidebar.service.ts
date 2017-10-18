import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PlantSidebarService {
    sidebarActiveSubject = new Subject<any>();
    constructor() { }

    openPlantSidebar(productId: number) {
        this.sidebarActiveSubject.next(productId);
    }

    closePlantSidebar() {
        this.sidebarActiveSubject.next(false);
    }

    getPlantSidbarState(): Observable<any> {
        return this.sidebarActiveSubject.asObservable();
    }
}
