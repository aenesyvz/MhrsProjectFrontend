import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultViewSelectComponent } from './default-view-select.component';

describe('DefaultViewSelectComponent', () => {
  let component: DefaultViewSelectComponent;
  let fixture: ComponentFixture<DefaultViewSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultViewSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultViewSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
