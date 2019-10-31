import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiOutputComponent } from './api-output.component';

describe('ApiOutputComponent', () => {
  let component: ApiOutputComponent;
  let fixture: ComponentFixture<ApiOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
