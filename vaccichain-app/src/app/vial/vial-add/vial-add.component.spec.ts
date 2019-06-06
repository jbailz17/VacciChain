import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VialAddComponent } from './vial-add.component';

describe('VialAddComponent', () => {
  let component: VialAddComponent;
  let fixture: ComponentFixture<VialAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VialAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VialAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
