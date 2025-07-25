import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarPratoComponentComponent } from './deletar-prato-component.component';

describe('DeletarPratoComponentComponent', () => {
  let component: DeletarPratoComponentComponent;
  let fixture: ComponentFixture<DeletarPratoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletarPratoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarPratoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
