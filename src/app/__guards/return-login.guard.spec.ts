import { TestBed } from '@angular/core/testing';

import { ReturnLoginGuard } from './return-login.guard';

describe('ReturnLoginGuard', () => {
  let guard: ReturnLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReturnLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
