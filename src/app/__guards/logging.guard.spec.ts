import { TestBed } from '@angular/core/testing';

import { LoggingGuard } from './logging.guard';

describe('LoggingGuard', () => {
  let guard: LoggingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
