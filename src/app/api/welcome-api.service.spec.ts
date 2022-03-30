import { TestBed } from '@angular/core/testing';

import { WelcomeApiService } from './welcome-api.service';

describe('WelcomeApiService', () => {
  let service: WelcomeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
