import { Injectable } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { AppFirebaseService } from '@shared/services/firebase/app-firebase/app-firebase.service';

// :recycle: Optimization required

@Injectable({
  providedIn: 'root'
})
export class IaCoreFirebaseService {

  constructor(
    private _service: AppFirebaseService
  ) { }

  watchCollection$(path: string): Observable<DocumentData[]> {
    return this._service.fetchCollection(path);
  }

  foo(): string[] {
    return ['', 'one'];
  }
}
