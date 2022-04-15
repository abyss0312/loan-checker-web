import { Grid, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";

import { useEffect, useState } from "react";
import { CategoryModel } from "../models/CategoryModel";



 const NewBalance = () => {

    const [amount,setAmount] = useState(0);
    const [categoryId,setCategory] = useState('');
    const [category,setCategoryList] = useState([{id:1,Name:'Test'}]);
    const [stateBalance,setStateBalance] = useState([{Name:'Credit', Value:'true'},{Name:'Debit',Value:'false'}])
    const [credit,setCredit] = useState('');

    const handleChangeCategory = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
     
      };
      const handleChangeCredit = (event: SelectChangeEvent) => {
        setCredit(event.target.value as string);
     
      };

      useEffect(() =>{
          setCategoryList(old => [{id:2,Name:'Carro'},{id:3,Name:'test'}])
      },[])

    return(
        <>
        
            <Grid container>
                <Grid item xs={12}>
                <TextField id="outlined-basic" label="Amount" variant="outlined" />
                </Grid>
                <Grid item xs={2}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={categoryId}
                        label="Age"
                        onChange={handleChangeCategory}
                        sx={{width:200}}
                        >
                          {category.map((contact, index) => {
                                return (
                                    <MenuItem
                                        value={contact.id}
                                        key={index}
                                    >
                                        {contact.Name}{" "}
                                    </MenuItem>
                                );
                            })}
                        
                    </Select>
                </Grid>
                <Grid item xs={6}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={credit}
                        label="Credit"
                        onChange={handleChangeCredit}
                        sx={{width:200}}
                        >
                          {stateBalance.map((state, index) => {
                                return (
                                    <MenuItem
                                        value={state.Value}
                                        key={index}
                                    >
                                        {state.Name}{" "}
                                    </MenuItem>
                                );
                            })}
                        
                    </Select>
                </Grid>
            </Grid>
        </>
    );


}


export default NewBalance;
