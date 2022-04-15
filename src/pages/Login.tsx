

import { Button, Container, Grid, Input, InputLabel, TextField } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import React, { useEffect, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { UserSelector } from '../redux/reducers/userReducer';
import { login } from '../redux/actions/auth.actioncreator';
import { UserAuthModel } from '../models/UserAuthModel';
import { useNavigate } from "react-router-dom";



const Login: React.FC = () => {

  let navigate = useNavigate();
  const {token} = useSelector(UserSelector)
  const dispatch = useDispatch();
  const [auth,setAuth]= useState<UserAuthModel>({Username:'',Password:''})


    useEffect(() => {
      if(token != ''){
        navigate("/");
      }
    })

    const handleClick = async () => {


   
      const res = await dispatch(login(auth))
      if(res.toString() == '200'){
        navigate("/");
      }
        
      
      
    }
    
  return (
    <Grid
      container
      spacing={4}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={6}>
        <LoginIcon sx={{fontSize:60}} />
        Inicia Session 
      </Grid>
      <Grid item xs={6}>
        <TextField id="username" 
          label="Username" 
          variant="outlined"  
          margin='dense'  
          value={auth.Username}
          onChange={(e) => setAuth(auth => ({
            ...auth,
            Username: e.target.value
          }))}
          />
      </Grid>
      <Grid item xs={6}>
        <TextField id="password" 
          label="Password" 
          variant="outlined" 
          margin='dense' 
          value={auth.Password} 
          onChange={(e) => setAuth(auth => ({
            Username: auth.Username,
            Password: e.target.value
          }))}
          />
      </Grid>

      <Grid item xs={6}>
        <Button variant="contained" color='primary' endIcon={<SendIcon />}
          onClick={async () =>{await handleClick()}}
        >Ingresar</Button>
      </Grid>
      
    </Grid>
    
  )
}

export default Login