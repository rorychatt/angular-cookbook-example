import { TestBed } from '@angular/core/testing';

import { ItemsStoreService } from './items-store.service';
import { firstValueFrom } from 'rxjs';

describe('ItemsStoreService', () => {
  let service: ItemsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add item', () => {
    service.addItem('item1');
    service.items$.subscribe((items) => {
      expect(items.length).toBe(1);
      expect(items[0].name).toBe('item1');
    });
  });

  // it('should remove item', async () => {
  //   service.addItem('item1');
  //   service.addItem('item2');
  //
  //   const items = await firstValueFrom(service.items$);
  //   const item1Id = items[0].id;
  //
  //   expect(item1Id).toBeDefined();
  //
  //   service.removeItemById(item1Id);
  //   service.items$.subscribe((items) => {
  //     expect(items.length).toBe(1);
  //     expect(items[0].name).toBe('item2');
  //   });
  // });
});
