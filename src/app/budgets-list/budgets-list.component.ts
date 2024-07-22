import { Component } from '@angular/core';
import { BudgetService } from '../services/budget.service.service';
import { iPressupost } from '../interfaces/i-extres';


@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [],
  templateUrl: './budgets-list.component.html',
  styleUrl: './budgets-list.component.scss'
})
export class BudgetsListComponent {
  usuariPressupostos: iPressupost[] = [];

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.usuariPressupostos = this.budgetService.getPressupostos();
  } //getPressupostos retorna llistatPressupostosFinal
}
