import { TestBed } from '@angular/core/testing';

import { ServiceRemoteService } from './service-remote.service';

describe('ServiceRemoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceRemoteService = TestBed.get(ServiceRemoteService);
    expect(service).toBeTruthy();
  });
});
