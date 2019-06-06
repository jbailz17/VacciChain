import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VialManageComponent } from './vial-manage.component';

describe('VialManageComponent', () => {
  let component: VialManageComponent;
  let fixture: ComponentFixture<VialManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VialManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VialManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
