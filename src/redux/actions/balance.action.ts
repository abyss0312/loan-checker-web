import { Dispatch } from "redux";
import { BalanceDto, BalanceModel } from "../../models/Balance.model";
import { BalanceService } from "../../services/balance.service";
import { ADD_BALANCE, GET_BALANCES } from "../reducers/balance.reducer";



export const getBalances = (id:number) => async (dispatch: Dispatch) => {

 
    var res = await BalanceService.GetBalancesByUser(id)
    if(res.Code == 200){
       return  await dispatch(GET_BALANCES(res.Data)) 
    }
}

export const CreateBalance = (balance:BalanceModel) => async (dispatch:Dispatch) =>{

    var res = await BalanceService.CreateBalance(balance)
   
    if(res.Code == 201){
        return await dispatch(ADD_BALANCE(balance))
    }
}