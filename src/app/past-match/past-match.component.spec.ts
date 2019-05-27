import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastMatchComponent } from './past-match.component';

describe('PastMatchComponent', () => {
  let component: PastMatchComponent;
  let fixture: ComponentFixture<PastMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
