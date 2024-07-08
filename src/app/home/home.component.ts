import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  pressupostForm: FormGroup;
  Seo: FormControl;
  Ads: FormControl;
  Web: FormControl;

  constructor() {
    this.Seo = new FormControl('');
    this.Ads = new FormControl('');
    this.Web = new FormControl('');

    this.pressupostForm = new FormGroup({
      Seo: this.Seo,
      Ads: this.Ads,
      Web: this.Web,
    });
  }
}
