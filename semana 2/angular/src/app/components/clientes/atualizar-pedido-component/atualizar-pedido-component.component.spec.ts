import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarPedidoComponentComponent } from './atualizar-pedido-component.component';

describe('AtualizarPedidoComponentComponent', () => {
  let component: AtualizarPedidoComponentComponent;
  let fixture: ComponentFixture<AtualizarPedidoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizarPedidoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarPedidoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
