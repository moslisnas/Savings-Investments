import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Template } from '../../../models/Template';
import { TemplateIncome } from '../../../models/TemplateIncome';
import { TemplateExpense } from '../../../models/TemplateExpense';
import { TemplateUnnecesaryExpense } from '../../../models/TemplateUnnecesaryExpense';
import { TemplateEssentialExpense } from '../../../models/TemplateEssentialExpense';
import { TemplateSaving } from '../../../models/TemplateSaving';

@Component({
  selector: 'app-view-template',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view-template.component.html',
  styleUrl: './view-template.component.css',
})
export class ViewTemplateComponent implements OnInit {
  id: string = '';
  template: Template = new Template();
  templateIncomes: TemplateIncome[] = [];
  templateExpenses: TemplateExpense[] = [];
  templateEssentialExpenses: TemplateEssentialExpense[] = [];
  templateUnnecesaryExpenses: TemplateUnnecesaryExpense[] = [];
  templateSavings: TemplateSaving[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.apiService.getTemplateById(parseInt(this.id)).subscribe({
      next: (dataTemplate) => {
        this.template = dataTemplate[0];
        //Template Incomes
        this.apiService
          .getTemplateIncomesByIdTemplate(this.template.id)
          .subscribe({
            next: (dataTemplateIncomes) => {
              this.templateIncomes =
                this.apiService.getTemplateIncomes(dataTemplateIncomes);
            },
            error: (error) => {
              console.error('Error al obtener los datos: incomes', error);
            },
          });
        //Template Expenses
        this.apiService
          .getTemplateExpensesByIdTemplate(this.template.id)
          .subscribe({
            next: (dataTemplateExpenses) => {
              this.templateExpenses =
                this.apiService.getTemplateExpenses(dataTemplateExpenses);
              this.templateExpenses.forEach(
                (templateExpense: TemplateExpense) => {
                  if (templateExpense.expenseIncomeType == 2) {
                    //Template Essential expenses
                    this.templateEssentialExpenses.push(templateExpense);
                  } else if (templateExpense.expenseIncomeType == 3) {
                    //Template Unnecesary expenses
                    this.templateUnnecesaryExpenses.push(templateExpense);
                  } else if (templateExpense.expenseIncomeType == 4) {
                    //Template Saving
                    this.templateSavings.push(templateExpense);
                  }
                }
              );
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
