

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface categoryState {
  Id:number,
  Name:string
}

const initialState = [] as categoryState[]

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
        GET_CATEGORIES(state,action:PayloadAction<Array<categoryState>>) {
            return action.payload
        },
        ADD_CATEGORY(state,action:PayloadAction<categoryState>){
            return [...state, action.payload]
        }
    }
})

export const { GET_CATEGORIES, ADD_CATEGORY} = categorySlice.actions

export const categorySelector = (state: RootState) => state.categoryReducer;

export default categorySlice.reducer