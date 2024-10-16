import { TestBed } from '@angular/core/testing';

import { ItemsStoreService } from './items-store.service';

describe('ItemsStoreService', () => {
  let service: ItemsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
