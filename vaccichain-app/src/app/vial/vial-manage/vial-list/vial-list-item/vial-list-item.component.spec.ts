import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VialListItemComponent } from './vial-list-item.component';

describe('VialListItemComponent', () => {
  let component: VialListItemComponent;
  let fixture: ComponentFixture<VialListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VialListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VialListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
