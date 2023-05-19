/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModuloService } from './Modulo.service';

describe('Service: Modulo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuloService]
    });
  });

  it('should ...', inject([ModuloService], (service: ModuloService) => {
    expect(service).toBeTruthy();
  }));
});
