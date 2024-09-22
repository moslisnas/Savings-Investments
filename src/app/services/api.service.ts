import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  //GET
  getExpenseIncomeTypes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/expense_income_type`);
  }
  getInvestmentTypes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/investment_type`);
  }

  //POST, PUT, DELETE methods
  //...
}
