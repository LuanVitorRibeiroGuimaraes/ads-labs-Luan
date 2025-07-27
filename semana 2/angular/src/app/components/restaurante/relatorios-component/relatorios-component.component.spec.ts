import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosComponentComponent } from './relatorios-component.component';

describe('RelatoriosComponentComponent', () => {
  let component: RelatoriosComponentComponent;
  let fixture: ComponentFixture<RelatoriosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatoriosComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatoriosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
