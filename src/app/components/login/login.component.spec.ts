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

  it('should emit login as admin message when pressing login as admin button', () => {

    const loginButton: HTMLButtonElement = fixture
      .nativeElement
      .querySelector('[data-testid="login-admin__button"]');

    spyOn(component.loginService, 'logIn');
    loginButton.click();
    expect(component.loginService.logIn).toHaveBeenCalledWith(Roles.Admin);
  });

  it('should emit login as user message when pressing login as user button', () => {

    const loginButton: HTMLButtonElement = fixture
      .nativeElement
      .querySelector('[data-testid="login-employee__button"]');

    spyOn(component.loginService, 'logIn');
    loginButton.click();
    expect(component.loginService.logIn).toHaveBeenCalledWith(Roles.Default);
  });

});
