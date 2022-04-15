import { Dispatch } from "redux";
import { CategoryModel } from "../../models/CategoryModel";
import { CategoryService } from "../../services/categoryApi";
import { GET_CATEGORIES,ADD_CATEGORY } from "../reducers/category.reducer";


export const getCategories = () => async (dispatch: Dispatch) => {

    var res = await CategoryService.GetCategoriesApi()

    if(res.Code == 200){
        console.log('res')
       return  await dispatch(GET_CATEGORIES(res.Data)) 
    }
}

export const CreateCategories = (category:CategoryModel) => async (dispatch:Dispatch) =>{

    var res = await CategoryService.CreateCategoriesApi(category)
   
    if(res.Code == 201){
        return await dispatch(ADD_CATEGORY(category))
    }
}