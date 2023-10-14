import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultViewInputComponent } from './default-view-input.component';

describe('DefaultViewInputComponent', () => {
  let component: DefaultViewInputComponent;
  let fixture: ComponentFixture<DefaultViewInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultViewInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultViewInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
