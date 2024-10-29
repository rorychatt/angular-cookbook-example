import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketComponent } from './basket.component';
import { inject, input } from '@angular/core';
import { Item } from '../../models';

describe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BasketComponent);
    fixture.componentRef.setInput('items', []);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add an item to the basket', () => {
    const item: Item = {
      id: 1,
      name: 'item',
    };
    fixture.componentRef.setInput('items', [item]);

    const newItems = component.items();
    expect(newItems).toEqual([item]);
  });

  it('should contain item id and name', () => {
    const item: Item = {
      id: 1,
      name: 'fancyItemName',
    };
    fixture.componentRef.setInput('items', [item]);
    fixture.detectChanges();

    const itemsTable = fixture.nativeElement.querySelector('table');

    expect(itemsTable.textContent).toContain('1');
    expect(itemsTable.textContent).toContain('fancyItemName');
  });

});
