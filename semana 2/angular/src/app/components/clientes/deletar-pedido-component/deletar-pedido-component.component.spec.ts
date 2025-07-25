import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarPedidoComponentComponent } from './deletar-pedido-component.component';

describe('DeletarPedidoComponentComponent', () => {
  let component: DeletarPedidoComponentComponent;
  let fixture: ComponentFixture<DeletarPedidoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletarPedidoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarPedidoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
