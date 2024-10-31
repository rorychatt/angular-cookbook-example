import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ItemsStoreService } from '../services/items-store.service';

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

});
