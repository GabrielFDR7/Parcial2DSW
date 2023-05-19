/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BandasService } from './Bandas.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Bandas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BandasService]
    });
  });

  it('should ...', inject([BandasService], (service: BandasService) => {
    expect(service).toBeTruthy();
  }));
});
