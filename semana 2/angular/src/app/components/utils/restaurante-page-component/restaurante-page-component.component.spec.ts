import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantePageComponentComponent } from './restaurante-page-component.component';

describe('RestaurantePageComponentComponent', () => {
  let component: RestaurantePageComponentComponent;
  let fixture: ComponentFixture<RestaurantePageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantePageComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
