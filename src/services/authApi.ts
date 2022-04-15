
import { GenericResponse } from "../models/GenericResponse";
import { UserAuthModel } from "../models/UserAuthModel";
import { instance } from "./indexApi";


export  const AuthService =  {

   

     async Login(user: UserAuthModel) : Promise<GenericResponse<string>> {

        var response = new GenericResponse<string>();

        try{


            var  request = await instance.post<GenericResponse<string>>('/auth/login',user).then((res) =>{

                const filterRes = res.data;

                if(filterRes.Code == 200){
                    response.Code = 200;
                    response.Data = filterRes.Data;
                    response.validateResult = filterRes.validateResult;
                    response.Message = 'Logeado';
                }

                else if(filterRes.Code == 404){

                    response.Code = 404;
                    response.Data = '';
                    response.validateResult = filterRes.validateResult;
                    response.Message = filterRes.Message;
                    
                }
            }).catch(err =>{
                response.Code = 500;
                response.Data = '';
                response.Message = err;
                response.validateResult = false;
                
            })


        }catch(err) {
            response.Code = 500;
            response.Data = '';
            response.Message= 'error login';

        }

        return response ;
       
    }
    

}