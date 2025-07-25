import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPratoComponentComponent } from './criar-prato-component.component';

describe('CriarPratoComponentComponent', () => {
  let component: CriarPratoComponentComponent;
  let fixture: ComponentFixture<CriarPratoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarPratoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPratoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
