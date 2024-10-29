import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectItemsComponent } from './select-items.component';
import { possibleItemNames } from '../../models';

describe('SelectItemsComponent', () => {
  let component: SelectItemsComponent;
  let fixture: ComponentFixture<SelectItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectItemsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SelectItemsComponent);
    fixture.componentRef.setInput('possibleItemNames', possibleItemNames);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add empty item', () => {
    component.addItem();
    expect(component.getSelectedItem()).toBe('');
  });

  it('should display a list of all possible items', () => {
    const items = fixture.nativeElement.querySelectorAll('option');
    const numberOfDefaultItems = 1
    expect(items.length).toBe(possibleItemNames.length + numberOfDefaultItems);
  })

});
