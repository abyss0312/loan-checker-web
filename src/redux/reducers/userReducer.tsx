import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface AuthState {
  token: string,
  userId: number,
  username:string,
  isAuth:boolean
}

const initialState = {token:'',userId:0,username:'',isAuth:false} as AuthState

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    ADD_TOKEN(state,action:PayloadAction<string>) {
      state.token = action.payload;
    },
    ADD_USERID(state, action:PayloadAction<number>){
      state.userId = action.payload;
    },
    REMOVE_TOKEN(state){
      return initialState;
    },
    ADD_USERNAME(state, action:PayloadAction<string>){
      state.username = action.payload;
    },
    ADD_AUTH(state){
      state.isAuth= true;
    }
  },
})

export const { ADD_TOKEN,ADD_USERID,REMOVE_TOKEN, ADD_USERNAME,ADD_AUTH} = UserSlice.actions

export const UserSelector = (state: RootState) => state.userReducer;

export default UserSlice.reducer