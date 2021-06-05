import { TestBed } from '@angular/core/testing';

import { IaCoreFirebaseService } from './ia-core-firebase.service';

describe('IaCoreFirebaseService', () => {
  let service: IaCoreFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaCoreFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // services use `spy` - foo shall return [/*bleh*/]
  // do not trigger a http call in services
});
