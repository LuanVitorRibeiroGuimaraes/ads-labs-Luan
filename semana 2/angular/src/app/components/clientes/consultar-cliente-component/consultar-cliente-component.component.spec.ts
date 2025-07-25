import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarClienteComponentComponent } from './consultar-cliente-component.component';

describe('ConsultarClienteComponentComponent', () => {
  let component: ConsultarClienteComponentComponent;
  let fixture: ComponentFixture<ConsultarClienteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarClienteComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarClienteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
