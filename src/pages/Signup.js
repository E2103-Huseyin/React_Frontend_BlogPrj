import React, {useState, useEffect} from 'react';

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
import red from '@material-ui/core/colors/red';
const primary = red[500]; // #f44336


const useStyles = makeStyles((theme) => ({
    
    margin: {
        margin: theme.spacing(1),
        
      },
      root0: {
        height:"100%",
        backgroundColor:"black",
      
    },
    root: {
        backgroundImage:"url(https://images.pexels.com/photos/276330/pexels-photo-276330.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)",
        
        width: "100%",
        height: "100%",
        minHeight: "800px",
        backgroundSize: "cover",
        display: 'flex',
        justifyContent:"center",
        color:"white",
    
    },
    root2: {
        backgroundImage:"url(https://images.pexels.com/photos/5959583/pexels-photo-5959583.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
        width: "100%",
        maxWidth: "900px",
        height: "500px",
        // alignSelf:"center",
        // position: "absolute",
        // zIndex: -1,
  
  
    },
    root3: {
        width: "500px",
        minWidth: "350px",
        height: "650px",
        backgroundImage:"url(https://images.pexels.com/photos/5959583/pexels-photo-5959583.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: 'flex',
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        paddingTop:"10px",
     
    }, 
    root4: {
        textAlign:"center",
        

    },
    
    root5: {
        textAlign:"center",
        paddingLeft:"10px",
        paddingRight:"10px",

    },
    
    root6: {
        width: '200px',
        height: '200px',
        borderRadius:"50%",
        border: " 2px solid white"

    },
   

    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
      
    },

  }));
  
function Signup() {
    const history = useHistory();
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
      const [err, setErr] = useState()
    //   const handleChange =(res) =>{
    //     setUsername(res)
    //   }
    
      console.log("username:", username);
      console.log("email:", email);
      console.log("err:", err);
      
      const password = values.password
      
      console.log("localusername:", localStorage.getItem('Localusername'));
      console.log("Authorization:", localStorage.getItem('Authorization'));
    
    

    return (
        <>
        <div className={classes.root0}>
            <div className={classes.root} >
                <div className={classes.root3}>
                    <img src={"https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"} className={classes.root6} />
                    <h1>Register Page</h1>
                    <h5  className={classes.root5} >Beware of speculations. Words which are based on speculations are the biggest lies.</h5>
                    <div className={classes.root4}>
                        <FormControl className={classes.margin} >
                            <InputLabel htmlFor="input-with-icon-adornment" style={{color:"white"}}>User Name</InputLabel>
                            <Input
                                style={{color:"white"}}
                                id="input-with-icon-adornment"
                                onChange={(e)=>setUsername(e.target.value)}
                                startAdornment={
                                <InputAdornment position="start" style={{color:"#000"}}>
                                <AccountCircle />
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                    <div className={classes.root4}>
                        <FormControl className={classes.margin} >
                            <InputLabel htmlFor="input-with-icon-adornment" style={{color:"white"}}>Email</InputLabel>
                            <Input
                                style={{color:"white"}}
                                id="input-with-icon-adornment"
                                onChange={(e)=>setEmail(e.target.value)}
                                startAdornment={
                                <InputAdornment position="start" style={{color:"#000"}}>
                                <AlternateEmailIcon />
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                   
                    <div className={classes.root4}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password" style={{color:"white"}} >Password</InputLabel>
                        <OutlinedInput
                            // OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            
                            
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
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        style={{marginTop:"20px",marginLeft:"20px"}}
                        // onClick={handleSubmit}
                    >
                        Sign Up <LockOpenIcon/>
                    </Button>
                </div>

                
                {/* 
                //name input
                //email
                //pasword 
                */}
            </div>
        </div>
        </>
    )
}

export default Signup
