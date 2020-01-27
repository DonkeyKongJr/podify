import { TestBed } from '@angular/core/testing';

import { PodService } from './pod.service';

describe('PodServicee', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PodService = TestBed.get(PodService);
    expect(service).toBeTruthy();
  });
});
