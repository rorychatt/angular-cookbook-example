import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { firstValueFrom } from 'rxjs';
import { ItemsStoreService } from '../services/items-store.service';
import { possibleItemNames } from '../models';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call itemStoreService to remove item by Id', () => {
    const itemId = 1;
    const itemsStoreService = TestBed.inject(ItemsStoreService);
    const spy = spyOn(itemsStoreService, 'removeItemById');
    component.removeItemById(itemId);
    expect(spy).toHaveBeenCalledWith(itemId);
  });

  it('should call add item to itemStoreService', async () => {
    const itemsStoreService = TestBed.inject(ItemsStoreService);

    const spy = spyOn(itemsStoreService, 'addItem');
    const itemNameToAdd = possibleItemNames[0];
    component.addItem(itemNameToAdd);
    expect(spy).toHaveBeenCalledWith(itemNameToAdd);

  });

  it('should add an existing item to basket', async () => {
    const itemsStoreService = TestBed.inject(ItemsStoreService);
    const itemNameToAdd = possibleItemNames[0];
    component.addItem(itemNameToAdd);

    const items = await firstValueFrom(itemsStoreService.items$);

    expect(items.at(-1)).toBeTruthy();
    expect(items.at(-1)!.name).toContain(itemNameToAdd);
  })

});
