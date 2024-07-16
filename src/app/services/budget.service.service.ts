import { Injectable } from '@angular/core';
import { iExtres } from '../interfaces/i-extres';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  Seo = 300;
  Ads = 400;
  Web = 500;

  pressupostTotal = 0;
  extres: number = 0;

  detallExtres: iExtres = {
    quantitatPagines: 0,
    quantitatLlenguatges: 0,
  };

  calculPressupost(pressupost: any): number {
    this.pressupostTotal = 0;
    if (pressupost.Seo) {
      this.pressupostTotal += this.Seo;
    }
    if (pressupost.Ads) {
      this.pressupostTotal += this.Ads;
    }
    if (pressupost.Web) {
      this.pressupostTotal += this.Web;
    } else {
      this.extres = 0;
    }

    return (this.pressupostTotal += this.extres);
  }

  calcularExtres(pressupost: iExtres): number {
    this.extres = 0;
    this.detallExtres = {
      quantitatPagines: pressupost.quantitatPagines,
      quantitatLlenguatges: pressupost.quantitatLlenguatges,
    };
    if (
      pressupost.quantitatPagines === 1 &&
      pressupost.quantitatLlenguatges === 1
    ) {
      this.extres = 0;
    } else {
      this.extres =
        pressupost.quantitatPagines * pressupost.quantitatLlenguatges * 30;
    }
    return this.extres;
  }
  constructor() {}
}
