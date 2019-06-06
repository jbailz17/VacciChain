import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchChartComponent } from './batch-chart.component';

describe('BatchChartComponent', () => {
  let component: BatchChartComponent;
  let fixture: ComponentFixture<BatchChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
