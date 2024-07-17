import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { BudgetService } from '../services/budget.service.service';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, PanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  pressupostForm: FormGroup;
  pressupostTotal: number = 0;
  extres: number = 0;

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.pressupostForm = this.fb.group({
      // inicialitzem els camps dels formularis tots a false
      Seo: [false],
      Ads: [false],
      Web: [false],
    });

    this.pressupostForm.valueChanges.subscribe((values) => {
      this.pressupostTotal = this.budgetService.calculPressupost(values);
    });
  }
  onEventChange() {
    this.pressupostTotal = this.budgetService.calculPressupost(
      this.pressupostForm.value
    );
  }
  onExtresChange(extres: number) {
    //recollim l'event onExtresChange per cridar onEventChange
    this.extres = extres;
    this.onEventChange();
  }
}
