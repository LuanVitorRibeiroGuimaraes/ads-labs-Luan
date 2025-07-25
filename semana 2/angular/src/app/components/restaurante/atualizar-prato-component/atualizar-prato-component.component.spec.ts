import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarPratoComponentComponent } from './atualizar-prato-component.component';

describe('AtualizarPratoComponentComponent', () => {
  let component: AtualizarPratoComponentComponent;
  let fixture: ComponentFixture<AtualizarPratoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizarPratoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarPratoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
