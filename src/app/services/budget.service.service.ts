import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  Seo = 300;
  Ads = 400;
  Web = 500;

  pressupostTotal = 0;

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
    }

    return this.pressupostTotal;
  }

  constructor() {}
}
