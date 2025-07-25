import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteMaisGastaramComponentComponent } from './cliente-mais-gastaram-component.component';

describe('ClienteMaisGastaramComponentComponent', () => {
  let component: ClienteMaisGastaramComponentComponent;
  let fixture: ComponentFixture<ClienteMaisGastaramComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteMaisGastaramComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteMaisGastaramComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
