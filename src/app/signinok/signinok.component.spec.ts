import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninokComponent } from './signinok.component';

describe('SigninokComponent', () => {
  let component: SigninokComponent;
  let fixture: ComponentFixture<SigninokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
