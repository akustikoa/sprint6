import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { BudgetService } from '../services/budget.service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  pressupostForm: FormGroup;
  pressupostTotal: number = 0;

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.pressupostForm = this.fb.group({
      Seo: [false],
      Ads: [false],
      Web: [false],
    });

    this.pressupostForm.valueChanges.subscribe((values) => {
      this.pressupostTotal = this.budgetService.calculPressupost(values);
    });
  }
}
