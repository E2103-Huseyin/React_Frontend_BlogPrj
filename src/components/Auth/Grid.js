import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LockOpenIcon from '@material-ui/icons/LockOpen';
// import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputWithIcon() {
  const history = useHistory()
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  


  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
   const [err, setErr] = useState()
//   const handleChange =(res) =>{
//     setUsername(res)
//   }

  console.log("username:", username);
  console.log("email:", email);
//   console.log("password:", password);
  console.log("err:", err);
  console.log("values:", values.password);
  const password = values.password
  console.log("password:", password);
  const handleSubmit = async () => {
    axios.post(`https://blog6666.herokuapp.com/auth/login/`, { username ,email, password })
      .then(response => {
        localStorage.setItem("Authorization", response.data.key);
        history.push("/")
        document.location.reload()
    }).catch(({response:{data}}) => setErr({data}))
    // catch(({response:{data}}) => setErr({data}))
    }
  
      
  return (
    <div>
        <form > 
            <FormControl className={classes.margin} >
                <InputLabel htmlFor="input-with-icon-adornment">User Name</InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    onChange={(e)=>setUsername(e.target.value)}
                    startAdornment={
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                    }
                />
            </FormControl>
            <TextField        
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Email"
                onChange={(e)=>setEmail(e.target.value)}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <AlternateEmailIcon />
                    </InputAdornment>
                ),
                }}
            />
            
        
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        // OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        // onChange={(e)=>setPassword(e.target.value)}
                        
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />

                    
                </FormControl>
        
                
            <div className={classes.margin}>

            </div>

            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                style={{marginTop:"20px",marginLeft:"20px"}}
                onClick={handleSubmit}
            >
                Sign in <LockOpenIcon/>
            </Button>


        </form>
    </div>
  );
}
