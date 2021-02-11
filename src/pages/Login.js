import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '../components/Auth/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(50),
        height: theme.spacing(50),
      },
    },
  }));

const postLoginBaseUrl = "https://blog6666.herokuapp.com/auth/login/"

const Login = () => {
    const classes = useStyles();
    // useEffect(() => {
    //     axios.post(postLoginBaseUrl)?.then((res)=>console.log("Login:",res))
        
        
    // }, []) 






    return (
        <div>
            <h1>LOGIN PAGE</h1>

            <div style={{ width: '100%' }}>
                <Box display="flex" justifyContent="center" flexWrap="wrap"  m={1} p={1} bgcolor="black">
                   
                    <Box p={1}  bgcolor="#fff" display="flex" alignItems="center">
                        
                        <Box >
                            <Grid/>
                        </Box>
                        
                    </Box>
                    <Box p={1} bgcolor="#000">
                        <img src={"https://images.pexels.com/photos/4737026/pexels-photo-4737026.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="Logo" />
                        
                    </Box>
                </Box>
            </div>
            
        </div>
    )
}

export default Login
