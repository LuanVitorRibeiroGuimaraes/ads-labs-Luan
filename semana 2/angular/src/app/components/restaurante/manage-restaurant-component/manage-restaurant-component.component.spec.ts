import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRestaurantComponentComponent } from './manage-restaurant-component.component';

describe('ManageRestaurantComponentComponent', () => {
  let component: ManageRestaurantComponentComponent;
  let fixture: ComponentFixture<ManageRestaurantComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageRestaurantComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageRestaurantComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
