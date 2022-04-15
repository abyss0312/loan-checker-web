import { CategoryModel } from "./CategoryModel";


export interface BalanceModel {
    id:number;
    Amount: number;
    category:CategoryModel,
    AddedDate: string,
    IsDebit:boolean;
    UserId:number
}

export interface BalanceDto{
    Amount: number;
    category:CategoryModel,
    AddedDate: string,
    IsDebit:boolean;
    UserId:number

}