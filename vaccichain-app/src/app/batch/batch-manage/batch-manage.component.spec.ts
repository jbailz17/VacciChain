import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchManageComponent } from './batch-manage.component';

describe('BatchManageComponent', () => {
  let component: BatchManageComponent;
  let fixture: ComponentFixture<BatchManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
