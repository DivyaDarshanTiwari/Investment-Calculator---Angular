import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,InvestmentResultsComponent,UserInputComponent],
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {}
