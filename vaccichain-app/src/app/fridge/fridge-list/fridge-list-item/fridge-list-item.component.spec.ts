import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeListItemComponent } from './fridge-list-item.component';

describe('FridgeListItemComponent', () => {
  let component: FridgeListItemComponent;
  let fixture: ComponentFixture<FridgeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridgeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
