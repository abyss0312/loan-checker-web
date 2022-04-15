
import { Card, CardContent, Grid, Typography } from '@mui/material'
import MinimizeIcon from '@mui/icons-material/Minimize';
import AddBoxIcon from '@mui/icons-material/AddBox';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBalances } from '../redux/actions/balance.action'
import { CreateCategories, getCategories } from '../redux/actions/category.action'
import { balanceSelector } from '../redux/reducers/balance.reducer'
import { UserSelector } from '../redux/reducers/userReducer'


const Home = () => {

    const balance = useSelector(balanceSelector)
    const {userId} = useSelector(UserSelector)
    const dispatch = useDispatch();


    useEffect(() => {
       dispatch(getBalances(userId))
    }, []);

    const renderDebitButton = (debit: boolean) => {
      if (debit) {
        return <AddBoxIcon />;
      } else {
        return <MinimizeIcon/>;
      }
    }

  return (
    <>
    {(() => {

      if(balance.length > 0){
        return balance.map((bal) =>(
          
          <Card sx={{ width: 400,marginLeft: 40,marginTop: 10 }} key={bal.id} >
              <CardContent  >
                  <Grid container >
                      <Grid item xs={6} >
                          <Typography variant='body2'>
                              {bal.Amount}
                          </Typography>
                      </Grid>
                      <Grid item xs={6}  textAlign="right">
                          <Typography variant='body2'>
                              {renderDebitButton(bal.IsDebit)}
                          </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        {bal.AddedDate}
                      </Grid>
                      <Grid item xs={6} textAlign="right">
                        <Typography variant='body2'>
                          {bal.category.Name}
                        </Typography>
                      </Grid>
                  </Grid>
                  
      
              </CardContent>
      
          </Card> 
        ))
      }
      else{
        return   <h2>NO RECORDS</h2>;
      }

    })()}

   
     
    
      
    </>
  
  )
}

export default Home