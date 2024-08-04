import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';
import { type DataArray } from './Interface/data-array';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,InvestmentResultsComponent,UserInputComponent],
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  data?:DataArray[];

  dataTranfer(item:DataArray[]){
    this.data = item;
  }
}
