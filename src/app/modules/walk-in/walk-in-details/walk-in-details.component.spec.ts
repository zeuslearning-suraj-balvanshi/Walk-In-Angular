import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkInDetailsComponent } from './walk-in-details.component';

describe('WalkInDetailsComponent', () => {
  let component: WalkInDetailsComponent;
  let fixture: ComponentFixture<WalkInDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkInDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkInDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
