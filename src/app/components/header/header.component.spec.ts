import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          url: of([{ path: '/' }]),
          snapshot: {
            paramMap: {
              get: () => null,
            },
          },
        },
      }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const title = fixture.nativeElement.querySelector('h1');
    expect(title.textContent).toContain('Angular cookbook example');
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
