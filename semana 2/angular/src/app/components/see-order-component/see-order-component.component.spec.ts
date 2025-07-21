import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeOrderComponentComponent } from './see-order-component.component';

describe('SeeOrderComponentComponent', () => {
  let component: SeeOrderComponentComponent;
  let fixture: ComponentFixture<SeeOrderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeOrderComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeOrderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
