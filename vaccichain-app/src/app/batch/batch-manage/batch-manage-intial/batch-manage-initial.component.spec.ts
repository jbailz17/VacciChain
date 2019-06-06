import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchManageInitialComponent } from './batch-manage-initial.component';

describe('BatchManageIntialComponent', () => {
  let component: BatchManageInitialComponent;
  let fixture: ComponentFixture<BatchManageInitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchManageInitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchManageInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
