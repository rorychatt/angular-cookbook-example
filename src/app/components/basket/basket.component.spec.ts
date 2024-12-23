import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketComponent } from './basket.component';
import { Item, Roles } from '../../models';

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

  it('should contain item id and name', () => {
    const itemToAdd: Item = {
      id: 1,
      name: 'fancyItemName',
    };
    fixture.componentRef.setInput('items', [itemToAdd]);
    fixture.detectChanges();

    const itemRow: HTMLTableCellElement = fixture
      .nativeElement
      .querySelector(
        '[data-testid="basket-table__body"] > tbody > tr:first-child'
      );

    expect(itemRow.textContent).toContain('1');
    expect(itemRow.textContent).toContain('fancyItemName');
  });

  it('should not have a delete-bucket-item buttons for non-admins',
    () => {
      const item: Item = {
        id: 1,
        name: 'item',
      };
      fixture.componentRef.setInput('items', [item]);
      fixture.detectChanges();

      const removeButton = fixture
        .nativeElement
        .querySelector('[data-testid="basket-table_data__removeButton"]');


      expect(removeButton).toBeNull();
    })

  it('should have a delete-basket-item button for admins', () => {
    const item: Item = {
      id: 1,
      name: 'item',
    };

    fixture.componentRef.setInput('items', [item]);
    fixture.componentRef.setInput('role', Roles.Admin);
    fixture.detectChanges();

    const removeButton = fixture
      .nativeElement
      .querySelector('[data-testid="basket-table_data__removeButton"]');

    expect(removeButton).not.toBeNull();
  });

  it('should be able to remove bucket items as an admin', () => {
    const item: Item = {
      id: 1,
      name: 'item',
    };
    fixture.componentRef.setInput('items', [item]);
    fixture.componentRef.setInput('role', Roles.Admin);
    spyOn(component, 'removeItemById');

    fixture.detectChanges();

    const removeButton = fixture
      .nativeElement
      .querySelector('[data-testid="basket-table_data__removeButton"]');

    removeButton.click();

    expect(component.removeItemById).toHaveBeenCalled();
  });

  it('should emit the item id to remove', () => {
    const item: Item = {
      id: 1,
      name: 'item',
    };
    fixture.componentRef.setInput('items', [item]);
    fixture.componentRef.setInput('role', Roles.Admin);

    spyOn(component.onItemRemoveById, 'emit');

    fixture.detectChanges();

    const removeButton = fixture
      .nativeElement
      .querySelector('[data-testid="basket-table_data__removeButton"]');

    removeButton.click();

    expect(component.onItemRemoveById.emit).toHaveBeenCalledWith(1);
  });

});
