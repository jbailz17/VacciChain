import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VialManageInitialComponent } from './vial-manage-initial.component';

describe('VialManageInitialComponent', () => {
  let component: VialManageInitialComponent;
  let fixture: ComponentFixture<VialManageInitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VialManageInitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VialManageInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
