import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteDataComponentComponent } from './restaurante-data-component.component';

describe('RestauranteDataComponentComponent', () => {
  let component: RestauranteDataComponentComponent;
  let fixture: ComponentFixture<RestauranteDataComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestauranteDataComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
