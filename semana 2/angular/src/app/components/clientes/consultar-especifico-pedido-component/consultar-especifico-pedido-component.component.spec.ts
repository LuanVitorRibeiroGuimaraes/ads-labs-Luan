import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEspecificoPedidoComponentComponent } from './consultar-especifico-pedido-component.component';

describe('ConsultarEspecificoPedidoComponentComponent', () => {
  let component: ConsultarEspecificoPedidoComponentComponent;
  let fixture: ComponentFixture<ConsultarEspecificoPedidoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarEspecificoPedidoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarEspecificoPedidoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
