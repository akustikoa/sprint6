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
  ordreAscendent: boolean = true;
  ordreAscendentNom: boolean = true;
  ordreAscendentData: boolean = true;

  mostrarFletxaImport: boolean = false;
  mostrarFletxaNom: boolean = false;
  mostrarFletxaData: boolean = false;

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.usuariPressupostos = this.budgetService.getPressupostos();
  }

  ordenaImport(): void {
    this.usuariPressupostos.sort((a, b) => {
      if (this.ordreAscendent) {
        return a.pressupostTotal - b.pressupostTotal;
      } else {
        return b.pressupostTotal - a.pressupostTotal;
      }
    });
    this.ordreAscendent = !this.ordreAscendent;

    this.mostrarFletxaImport = true;
    this.mostrarFletxaNom = false;
    this.mostrarFletxaData = false;

  }

  ordenaPressupostosPerNom(): void {
    this.usuariPressupostos.sort((a, b) => {
      if (this.ordreAscendentNom) {
        return a.usuari.nom.localeCompare(b.usuari.nom);
      } else {
        return b.usuari.nom.localeCompare(a.usuari.nom);
      }
    });
    this.ordreAscendentNom = !this.ordreAscendentNom;

    this.mostrarFletxaImport = false;
    this.mostrarFletxaNom = true;
    this.mostrarFletxaData = false;
  }

  ordenaPressupostosPerData(): void {
    this.usuariPressupostos.sort((a, b) => {
      const dateA = new Date(a.data).getTime();
      const dateB = new Date(b.data).getTime();
      if (this.ordreAscendentData) {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
    this.ordreAscendentData = !this.ordreAscendentData;

    this.mostrarFletxaImport = false;
    this.mostrarFletxaNom = false;
    this.mostrarFletxaData = true;
  }

}
