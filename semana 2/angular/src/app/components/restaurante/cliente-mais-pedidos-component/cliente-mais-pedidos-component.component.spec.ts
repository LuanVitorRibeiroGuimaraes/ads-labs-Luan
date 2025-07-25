import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteMaisPedidosComponentComponent } from './cliente-mais-pedidos-component.component';

describe('ClienteMaisPedidosComponentComponent', () => {
  let component: ClienteMaisPedidosComponentComponent;
  let fixture: ComponentFixture<ClienteMaisPedidosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteMaisPedidosComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteMaisPedidosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
