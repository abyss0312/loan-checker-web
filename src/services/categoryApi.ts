import { CategoryModel } from "../models/CategoryModel";
import { GenericResponse } from "../models/GenericResponse";
import { instance } from "./indexApi";




export const CategoryService ={


    async GetCategoriesApi() : Promise<GenericResponse<CategoryModel[]>>{

        var response = new GenericResponse<CategoryModel[]>();

        try{
            const request = await instance.get<GenericResponse<CategoryModel[]>>('/category');
            const res = request.data;
            response.Code = res.Code;
            response.Data = res.Data;
            response.Message= res.Message;
        }catch(err){
            console.log(err)
        }

        return response ;
    },

    async CreateCategoriesApi(category: CategoryModel) : Promise<GenericResponse<string>>{

        var response = new GenericResponse<string>();

        try{
            const request = await instance.post<GenericResponse<string>>('/category',category);
            const res = request.data;
            response.Code = res.Code;
            response.Data = res.Data;
            response.Message= res.Message;

        }catch(err){
            console.log(err)
        }

        return response ;
    }

}