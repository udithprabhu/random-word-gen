import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordOutputComponent } from './word-output.component';

describe('WordOutputComponent', () => {
  let component: WordOutputComponent;
  let fixture: ComponentFixture<WordOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
