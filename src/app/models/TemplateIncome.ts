export class TemplateIncome{
    public id:number;
    public idTemplate:number;
    public incomeType:number;
    public incomeTypeName:string;
    public from:string;
    public date:Date;
    public value:number;

    constructor(){
        this.id = -1;
        this.idTemplate = -1;
        this.incomeType = -1;
        this.incomeTypeName = "";
        this.from = "";
        this.date = new Date();
        this.value = 0;
    }
}