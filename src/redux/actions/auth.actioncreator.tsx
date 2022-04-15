import { Dispatch } from "redux"
import {ADD_AUTH, ADD_TOKEN, ADD_USERID,ADD_USERNAME,REMOVE_TOKEN, UserSelector} from "../reducers/userReducer"
import  {AuthService}  from "../../services/authApi"
import { UserAuthModel } from "../../models/UserAuthModel"

export const login =  (user: UserAuthModel) => async (dispatch: Dispatch) => {

 

       var res = await AuthService.Login(user)
       console.log(res)
       if(res.Code == 200){
           
                await dispatch(ADD_USERID(8))
                await dispatch(ADD_USERNAME('aarias03'))
                await dispatch(ADD_AUTH())
                await dispatch(ADD_TOKEN(res.Data)) 
                localStorage.setItem('Token-test',res.Data)

                return '200';
                

       }
       else{
           await dispatch(REMOVE_TOKEN())
           return '404'
       }


}

export const logout =  () => async (dispatch: Dispatch) => {


       localStorage.removeItem('Token-test')
       return await dispatch(REMOVE_TOKEN())
    

}


export const refresh = (token: string) => async (dispatch: Dispatch) => {

       await dispatch(ADD_USERID(8))
       await dispatch(ADD_USERNAME('aarias03'))
       await dispatch(ADD_AUTH())
       await dispatch(ADD_TOKEN(token)) 

}