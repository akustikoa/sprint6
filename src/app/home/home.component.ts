import { Component } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { BudgetService } from '../services/budget.service.service';
import { PanelComponent } from '../panel/panel.component';
import { iPressupost } from '../interfaces/i-extres';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, PanelComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  usuariForm: FormGroup<{
    nom: FormControl<string | null>;
    telefon: FormControl<string | null>;
    email: FormControl<string | null>;
  }>;

  pressupostForm: FormGroup;
  pressupostTotal: number = 0;
  extres: number = 0;

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.pressupostForm = this.fb.group({
      Seo: [false],
      Ads: [false],
      Web: [false],
    });

    this.usuariForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      telefon: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
    });

    this.pressupostForm.valueChanges.subscribe((values) => {
      this.pressupostTotal = this.budgetService.calculPressupost(values);
    });
  }

  guardarPressupost(): void {
    if (this.usuariForm.valid) {
      if (this.pressupostForm.value.Seo || this.pressupostForm.value.Ads || this.pressupostForm.value.Web) {
        let pressupost: iPressupost = {
          serveis: [{ 'Seo': this.pressupostForm.value.Seo }, { 'Ads': this.pressupostForm.value.Ads }, { 'Web': this.pressupostForm.value.Web }],
          usuari: {
            nom: this.usuariForm.value.nom ?? '',
            telefon: this.usuariForm.value.telefon ?? '',
            email: this.usuariForm.value.email ?? ''
          },
          pressupostTotal: this.pressupostTotal,
          extres: {
            quantitatLlenguatges: 0,
            quantitatPagines: 0
          }
        };
        this.budgetService.crearPressupost(pressupost);
        alert('pressupost creat amb èxit');
        this.resetForm();
      } else {
        alert('Selecciona mínim un servei');
      }
    } else {
      Object.values(this.usuariForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }

  }


  resetForm(): void {
    this.usuariForm.reset();
    this.pressupostForm.reset();
  }

  onEventChange() {
    this.pressupostTotal = this.budgetService.calculPressupost(
      this.pressupostForm.value
    );
  }

  onExtresChange(extres: number) {
    this.extres = extres;
    this.onEventChange();
  }
}
