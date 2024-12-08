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
  getIncomeTypes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/income_type`);
  }
  getExpenseTypes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/expense_type`);
  }
  getTemplates(): Observable<any> {
    return this.http.get(`${this.apiUrl}/template`);
  }
  getTemplateById(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/template?id=${id}`);
  }
  getTemplateIncomeById(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/template_income?id=${id}`);
  }
  getTemplateIncomesByIdTemplate(idTemplate:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/template_income?id_template=${idTemplate}`);
  }
  getIncomeTypeById(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/income_type?id=${id}`);
  }
  getExpensesByIdTemplate(idTemplate:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/template_expense?id=${idTemplate}`);
  }
  getExpenseTypeById(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/expense_type?id=${id}`);
  }

  //POST, PUT, DELETE methods
  //...
}
