import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientePageComponentComponent } from './cliente-page-component.component';

describe('ClientePageComponentComponent', () => {
  let component: ClientePageComponentComponent;
  let fixture: ComponentFixture<ClientePageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientePageComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
