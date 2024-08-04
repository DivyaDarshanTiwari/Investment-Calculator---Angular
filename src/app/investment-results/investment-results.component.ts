import { Component, Input } from '@angular/core';
import { type DataArray } from '../Interface/data-array';
import { CommonModule } from '@angular/common';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input({required:true}) result_data?:DataArray[];
}
