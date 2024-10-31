import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Roles } from '../../models';

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
    const login: HTMLAnchorElement[] = fixture.nativeElement.querySelectorAll('.btn');
    const loginAsAdmin = Array.from(login).find((el) => el.textContent === 'Login as Admin');
    expect(loginAsAdmin).toBeTruthy();
  })

  it('should have a login as employee anchor', () => {
    const login: HTMLAnchorElement[] = fixture.nativeElement.querySelectorAll('.btn');
    const loginAsEmployee = Array.from(login).find((el) => el.textContent === 'Login as Employee');
    expect(loginAsEmployee).toBeTruthy();
  });

  it('should emit a call with property isAdmin set to true when login as admin is clicked', () => {
    const login: HTMLAnchorElement[] = fixture.nativeElement.querySelectorAll('.btn');
    const loginAsAdmin = Array.from(login).find((el) => el.textContent === 'Login as Admin');
    expect(loginAsAdmin).toBeTruthy();
    spyOn(component, 'logIn');
    loginAsAdmin!.click();
    expect(component.logIn).toHaveBeenCalledWith(Roles.Admin);
  });

  it('should emit a call with property isAdmin set to false when login as employee is clicked', () => {
    const login: HTMLAnchorElement[] = fixture.nativeElement.querySelectorAll('.btn');
    const loginAsEmployee = Array.from(login).find((el) => el.textContent === 'Login as Employee');
    expect(loginAsEmployee).toBeTruthy();
    spyOn(component, 'logIn');
    loginAsEmployee!.click();
    expect(component.logIn).toHaveBeenCalledWith(Roles.Default);
  });
});
