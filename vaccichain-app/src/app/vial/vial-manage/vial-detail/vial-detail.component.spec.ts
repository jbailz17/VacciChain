import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VialDetailComponent } from './vial-detail.component';

describe('VialDetailComponent', () => {
  let component: VialDetailComponent;
  let fixture: ComponentFixture<VialDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VialDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
