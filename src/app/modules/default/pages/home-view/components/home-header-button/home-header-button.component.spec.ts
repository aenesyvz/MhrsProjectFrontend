import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeaderButtonComponent } from './home-header-button.component';

describe('HomeHeaderButtonComponent', () => {
  let component: HomeHeaderButtonComponent;
  let fixture: ComponentFixture<HomeHeaderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHeaderButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHeaderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
