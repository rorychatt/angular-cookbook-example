import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, RouterModule.forRoot([])],
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have logout anchor if logged in', () => {
    component.isLoggedIn$ = of(true);
    fixture.detectChanges();
    const logout = fixture.nativeElement.querySelector('.btn');
    expect(logout.textContent).toContain('Log Out');
  })

  it('should not have logout anchor if not logged in', () => {
    component.isLoggedIn$ = of(false);
    fixture.detectChanges();
    const logout = fixture.nativeElement.querySelector('.btn');
    expect(logout).toBeNull();
  });

});
