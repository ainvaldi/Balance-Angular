import { TestBed } from '@angular/core/testing';

import { registroService } from './registros.service';

describe('registroService', () => {
  let service: registroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(registroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
