import { TestBed } from '@angular/core/testing';

import { ProductserveService } from './productserve.service';

describe('ProductserveService', () => {
  let service: ProductserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
