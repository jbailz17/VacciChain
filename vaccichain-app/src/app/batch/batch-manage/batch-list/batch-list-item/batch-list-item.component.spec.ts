import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchListItemComponent } from './batch-list-item.component';

describe('BatchListItemComponent', () => {
  let component: BatchListItemComponent;
  let fixture: ComponentFixture<BatchListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
