import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
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
