import { BalanceDto, BalanceModel } from "../models/Balance.model"
import { GenericResponse } from "../models/GenericResponse"
import { instance } from "./indexApi";




export const BalanceService = {


    async GetBalancesByUser(Id:number) : Promise<GenericResponse<BalanceModel[]>> {

        const response = new GenericResponse<BalanceModel[]>();

        try{
            await instance.get<GenericResponse<BalanceModel[]>>(`/balances/${Id}`).then((res) => {

                const filterRes = res.data;

                if(filterRes.Code == 200) {
                    response.Code= 200;
                    response.Data = filterRes.Data;
                    response.Message = filterRes.Message;
                    response.validateResult = filterRes.validateResult;
                }
            }).catch(err =>{

                response.Code= 500;
                response.Data = [];
                response.Message = err;
                response.validateResult = false;
            });
            


            
        }catch(err){
            response.Code= 500;
            response.Data = [];
            response.Message = 'fallo al traer balances';
            response.validateResult = false;

            console.log(err);
        }



        return response;

    },


    async CreateBalance(body: BalanceModel) : Promise<GenericResponse<BalanceModel>> {

        const response = new GenericResponse<BalanceModel>();

        await instance.post('/balance',body).then((res) => {
            const filterRes = res.data;

            if(filterRes.Code == 200) {
                response.Code= 200;
                response.Data = filterRes.Data;
                response.Message = filterRes.Message;
                response.validateResult = filterRes.validateResult;
            }
        }).catch(err =>{

            response.Code= 500;
            response.Message = err;
            response.validateResult = false;
        });


        

        return response;
    }

}