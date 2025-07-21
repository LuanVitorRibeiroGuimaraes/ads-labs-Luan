import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserComponentComponent } from './manage-user-component.component';

describe('ManageUserComponentComponent', () => {
  let component: ManageUserComponentComponent;
  let fixture: ComponentFixture<ManageUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageUserComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
