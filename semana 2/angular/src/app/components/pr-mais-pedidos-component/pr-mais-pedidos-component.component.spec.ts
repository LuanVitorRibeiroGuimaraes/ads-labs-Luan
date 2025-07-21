import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrMaisPedidosComponentComponent } from './pr-mais-pedidos-component.component';

describe('PrMaisPedidosComponentComponent', () => {
  let component: PrMaisPedidosComponentComponent;
  let fixture: ComponentFixture<PrMaisPedidosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrMaisPedidosComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrMaisPedidosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
