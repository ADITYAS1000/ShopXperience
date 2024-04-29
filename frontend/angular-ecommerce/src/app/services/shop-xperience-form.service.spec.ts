import { TestBed } from '@angular/core/testing';

import { ShopXperienceFormService } from './shop-xperience-form.service';

describe('ShopXperienceFormService', () => {
  let service: ShopXperienceFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopXperienceFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
