import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type DataArray } from '../Interface/data-array';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {


  @Output() emitter = new EventEmitter<DataArray[]>();

  protected initialInvestment: number = 0;
  protected duration: number = 0;
  protected expectedReturn: number = 0;
  protected annualInvestment: number = 0;
  protected cal_data: DataArray[] = [];

  protected calculateInvestmentResults():DataArray[] {
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

  protected calculated_data() {
    this.cal_data = this.calculateInvestmentResults();
    console.log(this.cal_data);
    this.emitter.emit(this.cal_data);
  }
}
