import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPratoComponentComponent } from './consultar-prato-component.component';

describe('ConsultarPratoComponentComponent', () => {
  let component: ConsultarPratoComponentComponent;
  let fixture: ComponentFixture<ConsultarPratoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarPratoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarPratoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
