import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTodosPratoComponentComponent } from './consultar-todos-prato-component.component';

describe('ConsultarTodosPratoComponentComponent', () => {
  let component: ConsultarTodosPratoComponentComponent;
  let fixture: ComponentFixture<ConsultarTodosPratoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarTodosPratoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarTodosPratoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
