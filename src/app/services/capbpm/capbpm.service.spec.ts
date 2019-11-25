import { TestBed } from '@angular/core/testing';

import { CapbpmService } from './capbpm.service';

describe('CapbpmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapbpmService = TestBed.get(CapbpmService);
    expect(service).toBeTruthy();
  });
});
