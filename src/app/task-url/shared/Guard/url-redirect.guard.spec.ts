import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { urlRedirectGuard } from './url-redirect.guard';

describe('urlRedirectGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => urlRedirectGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
