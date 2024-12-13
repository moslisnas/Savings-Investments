import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TemplateIncome } from '../models/TemplateIncome';
import { ApiToObjectMapper } from '../mappers/ApiToObjectMapper';
import { TemplateExpense } from '../models/TemplateExpense';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  //Subscribe
  //TODO create class TemplateApiService: getTemplateIncomes, getTemplateExpenses
  getTemplateIncomes = (dataTemplateIncomes: any) => {
    let templateIncomes: TemplateIncome[] =
      ApiToObjectMapper.templateIncomes(dataTemplateIncomes);
    templateIncomes.forEach(
      (templateIncome: TemplateIncome, indexIncome: number) => {
        this.getIncomeTypeById(templateIncome.incomeType).subscribe({
          next: (data) => {
            data.forEach((incomeType: any) => {
              if (incomeType.id == templateIncomes[indexIncome].incomeType) {
                templateIncomes[indexIncome].incomeTypeName = incomeType.name;
              }
            });
          },
          error: (error) => {
            console.error('Error al obtener los datos', error);
          },
        });
      }
    );
    return templateIncomes;
  };
  getTemplateExpenses = (dataTemplateExpenses: any) => {
    let templateExpenses: TemplateExpense[] =
      ApiToObjectMapper.templateExpenses(dataTemplateExpenses);
    templateExpenses.forEach(
      (templateExpense: TemplateExpense, indexExpense: any) => {
        this.getExpenseTypeById(templateExpense.expenseType).subscribe({
          next: (data) => {
            data.forEach((expenseType: any) => {
              if (
                expenseType.id == templateExpenses[indexExpense].expenseType
              ) {
                templateExpenses[indexExpense].expenseTypeName =
                  expenseType.name;
              }
            });
          },
          error: (error) => {
            console.error('Error al obtener los datos', error);
          },
        });
      }
    );
    return templateExpenses;
  };
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
  getTemplateById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/template?id=${id}`);
  }
  getTemplateIncomeById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/template_income?id=${id}`);
  }
  getTemplateIncomesByIdTemplate(idTemplate: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/template_income?id_template=${idTemplate}`
    );
  }
  getIncomeTypeById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/income_type?id=${id}`);
  }
  getTemplateExpensesByIdTemplate(idTemplate: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/template_expense?id=${idTemplate}`);
  }
  getExpenseTypeById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/expense_type?id=${id}`);
  }

  //POST, PUT, DELETE methods
  //...
}
