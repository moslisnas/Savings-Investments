import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-template',
  standalone: true,
  imports: [],
  templateUrl: './view-template.component.html',
  styleUrl: './view-template.component.css'
})
export class ViewTemplateComponent implements OnInit {
  id:string = "";
  template: any = null; //TODO Add class type
  templateIncomes: any = null; //TODO Add class type
  templateExpenses: any = null; //TODO Add class type
  templateEssentialExpenses: any = new Array(); //TODO Add class type
  templateUnnecesaryExpenses: any = new Array(); //TODO Add class type

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.apiService.getTemplateById(parseInt(this.id)).subscribe({
      next: (dataTemplate) => {
        this.template = dataTemplate[0];
        //Template Incomes
        this.apiService.getTemplateIncomesByIdTemplate(parseInt(this.template.id)).subscribe({
          next: (dataTemplateIncomes) => {
            this.templateIncomes = dataTemplateIncomes;
            this.templateIncomes.forEach((templateIncome:any, index_income:any) => {
              this.apiService.getIncomeTypeById(parseInt(templateIncome.income_type)).subscribe({
                next: (data) => {
                  data.forEach((income_type:any) => {
                    if(income_type.id == this.templateIncomes[index_income].income_type){
                      this.templateIncomes[index_income].income_type_name = income_type.name;
                    }
                  });
                },
                error: (error) => {
                  console.error('Error al obtener los datos', error);
                },
              });
            });
          },
          error: (error) => {
            console.error('Error al obtener los datos: incomes', error);
          },
        });
        //Expenses
        this.apiService.getExpensesByIdTemplate(parseInt(this.template.id)).subscribe({
          next: (dataTemplateExpenses) => {
            this.templateExpenses = dataTemplateExpenses;
            this.templateExpenses.forEach((expense:any, index_expense:any) => {
              this.apiService.getExpenseTypeById(parseInt(expense.expense_type)).subscribe({
                next: (data) => {
                  data.forEach((expense_type:any) => {
                    if(expense_type.id == this.templateExpenses[index_expense].expense_type){
                      this.templateExpenses[index_expense].expense_type_name = expense_type.name;
                    }
                  });
                },
                error: (error) => {
                  console.error('Error al obtener los datos', error);
                },
              });
              //Essential expenses
              if(expense.expense_income_type == 2){
                this.templateEssentialExpenses.push(expense);
              }
              //Unnecesary expenses
              else if(expense.expense_income_type == 3){
                this.templateUnnecesaryExpenses.push(expense);
              }
            });
          },
          error: (error) => {
            console.error('Error al obtener los datos', error);
          },
        });
      },
      error: (error) => {
        console.error('Error al obtener los datos: template', error);
      },
    });
  }
}
