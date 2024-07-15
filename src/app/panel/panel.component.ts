import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BudgetService } from '../services/budget.service.service';
import { iExtres } from '../interfaces/i-extres';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent {
  @Output() newItemEvent = new EventEmitter<number>();

  extres = 0;
  constructor(private budgetService: BudgetService) {}

  extresForm = new FormGroup({
    quantitatPagines: new FormControl<number>(1),
    quantitatLlenguatges: new FormControl<number>(1),
  });

  capturarCanvis(): void {
    this.extres = 0;
    this.extres = this.budgetService.calcularExtres(
      this.extresForm.value as iExtres
    );
    this.newItemEvent?.emit(this.extres);
  }

  restar(controlName: string): void {
    const control = this.extresForm.get(controlName) as FormControl;
    if (control) {
      control.setValue(control.value + 1);
      this.capturarCanvis();
    }
  }

  sumar(controlName: string): void {
    const control = this.extresForm.get(controlName) as FormControl;
    if (control && control.value > 1) {
      control.setValue(control.value - 1);
      this.capturarCanvis();
    }
  }
}
