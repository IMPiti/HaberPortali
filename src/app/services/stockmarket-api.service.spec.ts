/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StockmarketApiService } from './stockmarket-api.service';

describe('Service: StockmarketApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockmarketApiService]
    });
  });

  it('should ...', inject([StockmarketApiService], (service: StockmarketApiService) => {
    expect(service).toBeTruthy();
  }));
});
