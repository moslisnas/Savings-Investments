import { TemplateExpense } from "../models/TemplateExpense";
import { TemplateIncome } from "../models/TemplateIncome"

export class ApiToObjectMapper{
    //Templates
    public static templateIncome(apiElement:any){
        let result:TemplateIncome = new TemplateIncome;
        result.id = apiElement.id;
        result.idTemplate = apiElement.id_template;
        result.incomeType = apiElement.income_type;
        result.from = apiElement.from;
        result.date = apiElement.date;
        result.value = apiElement.value;
        return result;
    }
    public static templateIncomes(apiElements:any[]){
        let result:TemplateIncome[] = [];
        apiElements.forEach((apiElement:any) => result.push(ApiToObjectMapper.templateIncome(apiElement)));
        return result;
    }
    public static templateExpense(apiElement:any){
        let result:TemplateExpense = new TemplateExpense;
        result.id = apiElement.id;
        result.idTemplate = apiElement.id_template;
        result.expenseIncomeType = apiElement.expense_income_type;
        result.expenseType = apiElement.expense_type;
        result.date = apiElement.date;
        result.value = apiElement.value;
        return result;
    }
    public static templateExpenses(apiElements:any[]){
        let result:TemplateExpense[] = [];
        apiElements.forEach((apiElement:any) => result.push(ApiToObjectMapper.templateExpense(apiElement)));
        return result;
    }
}