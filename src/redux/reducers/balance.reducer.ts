import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BalanceDto, BalanceModel } from '../../models/Balance.model'
import { RootState } from '../store'



const initialState = [] as BalanceModel[]

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
        GET_BALANCES(state,action:PayloadAction<Array<BalanceModel>>) {
            return action.payload
        },
        ADD_BALANCE(state,action:PayloadAction<BalanceModel>){
            return [...state, action.payload]
        }
    }
})

export const { GET_BALANCES, ADD_BALANCE} = balanceSlice.actions

export const balanceSelector = (state: RootState) => state.balanceReducer;

export default balanceSlice.reducer