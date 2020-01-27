import { TestBed, async, inject } from '@angular/core/testing';

import { SecureInnerPages.Guard.TsGuard } from './secure-inner-pages.guard.ts.guard';

describe('SecureInnerPages', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecureInnerPages.Guard.TsGuard]
    });
  });

  it('should ...', inject([SecureInnerPages], (guard: SecureInnerPages) => {
    expect(guard).toBeTruthy();
  }));
});
