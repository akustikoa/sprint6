import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPaginesComponent } from './modal-pagines.component';

describe('ModalPaginesComponent', () => {
  let component: ModalPaginesComponent;
  let fixture: ComponentFixture<ModalPaginesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPaginesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPaginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
