import reduxThunk from 'react-redux'
import { combineReducers, configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
  } from "redux-persist";
  import logger from 'redux-logger';

  
import userReducer from './reducers/userReducer'
import categoryReducer from './reducers/category.reducer'
import balanceReducer from './reducers/balance.reducer';


const rootReducer = combineReducers({
    userReducer,
    categoryReducer,
    balanceReducer
})


const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })
});

export type RootState = ReturnType<typeof store.getState>
export default store;