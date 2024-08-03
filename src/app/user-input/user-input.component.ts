import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type DataArray } from '../Interface/data-array';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // constructor(private emitter: EventEmitter) {}

  protected initialInvestment: number = 0;
  protected duration: number = 0;
  protected expectedReturn: number = 0;
  protected annualInvestment: number = 0;
  protected cal_data: DataArray[] = [];

  protected calculateInvestmentResults() {
    const annualData: DataArray[] = [];
    let investmentValue = this.initialInvestment;

    for (let i = 0; i < this.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (this.expectedReturn / 100);
      investmentValue += interestEarnedInYear + this.annualInvestment;
      const totalInterest =
        investmentValue - this.annualInvestment * year - this.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          this.initialInvestment + this.annualInvestment * year,
      });
    }

    return annualData;
  }

  protected caluculated_data() {
    this.cal_data = this.calculateInvestmentResults();
    // this.emitter.emit(this.cal_data);
  }
}
