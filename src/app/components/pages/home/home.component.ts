import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  lastTemplate: any = null; //"Year 2024"; //TODO --> Define Template class type
  /*expenseIncomeTypes: any[] = [];
  investmentTypes: any[] = [];*/

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    /*this.apiService.getExpenseIncomeTypes().subscribe({
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
    });*/
  }
}
