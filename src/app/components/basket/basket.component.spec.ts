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

  it('should not have a remove button if not an admin', () => {
    const item: Item = {
      id: 1,
      name: 'item',
    };
    fixture.componentRef.setInput('items', [item]);
    fixture.detectChanges();

    const removeButton = fixture.nativeElement.querySelector('button');

    expect(removeButton).toBeNull();
  })

  it('should have a remove button if an admin', () => {
    const item: Item = {
      id: 1,
      name: 'item',
    };

    fixture.componentRef.setInput('items', [item]);
    fixture.componentRef.setInput('isAdmin', true);
    fixture.detectChanges();

    const removeButton = fixture.nativeElement.querySelector('button');

    expect(removeButton).not.toBeNull();
  });

  it('should call the item to remove', () => {
    const item: Item = {
      id: 1,
      name: 'item',
    };
    fixture.componentRef.setInput('items', [item]);
    fixture.componentRef.setInput('isAdmin', true);
    spyOn(component, 'removeItemById');

    fixture.detectChanges();

    const removeButton = fixture.nativeElement.querySelector('button');
    removeButton.click();

    expect(component.removeItemById).toHaveBeenCalled();
  });

  it('should emit the item id to remove', () => {
    const item: Item = {
      id: 1,
      name: 'item',
    };
    fixture.componentRef.setInput('items', [item]);
    fixture.componentRef.setInput('isAdmin', true);

    spyOn(component.onItemRemoveById, 'emit');

    fixture.detectChanges();

    const removeButton = fixture.nativeElement.querySelector('button');
    removeButton.click();

    expect(component.onItemRemoveById.emit).toHaveBeenCalledWith(1);
  });

  it('should display text if no items in basket', () => {
    fixture.detectChanges();

    const itemsTable = fixture.nativeElement.querySelector('table');
    const noItemsText = fixture.nativeElement.querySelector('p');

    expect(itemsTable).not.toBeTruthy();
    expect(noItemsText).toBeTruthy();

    expect(noItemsText.textContent).toContain('No items in the basket');
  });

});
