import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLlenguatgesComponent } from './modal-llenguatges.component';

describe('ModalLlenguatgesComponent', () => {
  let component: ModalLlenguatgesComponent;
  let fixture: ComponentFixture<ModalLlenguatgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalLlenguatgesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLlenguatgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
