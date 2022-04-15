import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refresh } from "../redux/actions/auth.actioncreator";


const Wrapper =  (props: any) => {

    const dispatch = useDispatch();
    useEffect( () => {
        async function getToken(){
        if(localStorage.getItem('Token-test') != null){
            await dispatch(refresh(localStorage.getItem('Token-test')!))
        }
        }

        getToken()
    },[])

    return props.children;


}

export default  Wrapper;