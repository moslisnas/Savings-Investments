export class TemplateExpense{
    public id:number;
    public idTemplate:number;
    public expenseIncomeType:number;
    public expenseType:number;
    public expenseTypeName:string;
    public date:Date;
    public value:number;

    constructor(){
        this.id = -1;
        this.idTemplate = -1;
        this.expenseIncomeType = -1;
        this.expenseType = -1;
        this.expenseTypeName = "";
        this.date = new Date();
        this.value = 0;
    }
}