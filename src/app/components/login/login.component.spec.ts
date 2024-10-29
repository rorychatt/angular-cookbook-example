import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          url: of([{ path: '/login' }]),
          snapshot: {
            paramMap: {
              get: () => null,
            },
          },
        },
      }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a login as administrator anchor', () => {
    const login = fixture.nativeElement.querySelector('.btn');
    expect(login.textContent).toContain('Login as Admin');
  })
});
