import { Navigate } from "react-router-dom";
import React,{FC} from 'react'
import { useSelector } from "react-redux";
import { UserSelector } from "../../redux/reducers/userReducer";



const Protected = (props: any) => {

    const {isAuth} = useSelector(UserSelector)
    //const isAuth = true;
    if (!isAuth) {
    return <Navigate to="/login" replace />;
    }
    return props.children;

};


export default Protected;