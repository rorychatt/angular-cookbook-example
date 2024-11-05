import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, of } from 'rxjs';
import { ItemsStoreService } from '../services/items-store.service';
import { possibleItemNames } from '../models';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            url: of([{ path: '/' }]),
            snapshot: {
              paramMap: {
                get: () => null,
              },
            },
          },
        },
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call add item to itemStoreService', async () => {
    const itemsStoreService = TestBed.inject(ItemsStoreService);

    const spy = spyOn(itemsStoreService, 'addItem');
    const itemNameToAdd = possibleItemNames[0];
    component.addItem(itemNameToAdd);
    expect(spy).toHaveBeenCalledWith(itemNameToAdd);

  });

});
