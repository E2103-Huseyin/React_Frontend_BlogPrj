import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '../components/Auth/Grid';
import Button from '@material-ui/core/Button';

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
            

            <div style={{ width: '100%' }}>
                <Box display="flex" justifyContent="center" flexWrap="wrap"  m={1} p={1} bgcolor="black">
                    
                    <Box p={1}  bgcolor="#fff" display="flex" alignItems="center">
                        
                        <Box >
                            <h1 style={{ color: '#A1C0C1' }}>LOGIN PAGE</h1>
                            <Grid/>
                            <div style={{
                                border: '1px solid black',
                                marginTop:"30px",
                                padding:"15px",
                                backgroundColor:"black"
                            }}>
                            <h1 style={{ color: 'red' }}>Henüz Üye Değil Misiniz?</h1>
                            <p style={{ color: 'white' }}>Üyelerimize özel hizmetlerimizden faydalanabilmek için üye olun.</p>
                            <Button variant="outlined" color="primary" href="#outlined-buttons">
                                Hemen Üye Ol
                            </Button>
                            </div>

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
