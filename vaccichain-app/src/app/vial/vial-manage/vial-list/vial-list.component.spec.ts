import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VialListComponent } from './vial-list.component';

describe('VialListComponent', () => {
  let component: VialListComponent;
  let fixture: ComponentFixture<VialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
