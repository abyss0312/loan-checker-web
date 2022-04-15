
import axios, { AxiosResponse } from'axios';
import { REMOVE_TOKEN } from '../redux/reducers/userReducer';
import store from '../redux/store'

export const instance = axios.create({
        baseURL: 'http://localhost:4000',
        headers: {
            "Content-type": "application/json",
            "Authorization":" "
          }
    });

    instance.interceptors.request.use(
      async config => {
       const token = store.getState().userReducer.token;
        config.headers = { 
          'Authorization': token
        }
        return config;
      },
      error => {
        Promise.reject(error)
    });
  
   instance.interceptors.response.use(undefined,async err => {
  
      const error =  err.response;
      if(error.status===401 && error.config && !error.config.__isRetryRequest) {
        store.dispatch({
          type: REMOVE_TOKEN
        });
      }
  
   });
  