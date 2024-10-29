import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketComponent } from './basket.component';
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

  /**
   * @deprecated This is not necessary as it's not testing
   * the component itself, but the Angular framework.
   */
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
    const itemToAdd: Item = {
      id: 1,
      name: 'fancyItemName',
    };
    fixture.componentRef.setInput('items', [itemToAdd]);
    fixture.detectChanges();

    const item: HTMLTableCellElement = fixture.nativeElement.querySelector('[data-testid="basketTableBody"] > tbody > tr:first-child');

    expect(item.textContent).toContain('1');
    expect(item.textContent).toContain('fancyItemName');
  });

  it('should not have a delete-bucket-item buttons for non-admins', () => {
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

  it('should not display text if items in basket', () => {
    const item: Item = {
      id: 1,
      name: 'item',
    };
    fixture.componentRef.setInput('items', [item]);
    fixture.detectChanges();

    const itemsTable = fixture.nativeElement.querySelector('table');
    const noItemsText = fixture.nativeElement.querySelector('p');

    expect(itemsTable).toBeTruthy();
    expect(noItemsText).not.toBeTruthy();
  });

});
