import React from 'react';
import { makeStyles } from '@material-ui/core/styles';





// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root3: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'center',
    // overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  root4: {
   
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height: "400px",
    width: "600px",

  },
  root5: {
    color:"white",
    backgroundColor:"rgba(0,0,0,0.7)",
    padding:"8px"
  },
  
  image: {
    
    // maxWidth:"800px",
    // maxHeight:"500px",
    minHeight:"300px",
    minWidth:"300px",
  },
  
}));



 
export default function ImageBar({props}) {
  const classes = useStyles();

  return (

    <>
       
        <div className={classes.root3} >
            <div className={classes.root4} style={{backgroundImage:`url(${props.image})`}}>
                <h2 className={classes.root5} >{props.title}   </h2>
              
            </div>

        </div>
    </>
  );
}
