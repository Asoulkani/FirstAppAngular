import { TestBed } from '@angular/core/testing';

import { CategorieServicesService } from './categorie-services.service';

describe('CategorieServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategorieServicesService = TestBed.get(CategorieServicesService);
    expect(service).toBeTruthy();
  });
});
