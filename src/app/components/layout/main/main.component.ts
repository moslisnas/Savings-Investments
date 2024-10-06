import { Component, OnInit  } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit{
  lastTemplate: any = "Year 2024";
  expenseIncomeTypes: any[] = [];
  investmentTypes: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getExpenseIncomeTypes().subscribe({
      next: (data) => {
        this.expenseIncomeTypes = data;
      },
      error: (error) => {
        console.error('Error al obtener los datos', error);
      },
    });
    this.apiService.getInvestmentTypes().subscribe({
      next: (data) => {
        this.investmentTypes = data;
      },
      error: (error) => {
        console.error('Error al obtener los datos', error);
      },
    });
  }
}
