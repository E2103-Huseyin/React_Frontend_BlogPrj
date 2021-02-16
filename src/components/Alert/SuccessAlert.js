import React from 'react';
// import { render } from 'react-dom'
// import { transitions, positions, Provider as AlertProvider } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'
// import App from './App'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

// const options = {
//     // you can also just use 'bottom center'
//     position: positions.BOTTOM_CENTER,
//     timeout: 5000,
//     offset: '30px',
//     // you can also just use 'scale'
//     transition: transitions.SCALE
// }





// const Root = () => (
//     <AlertProvider template={AlertTemplate} {...options}>
//       <App />
//     </AlertProvider>
// )
   
// render(<Root />, document.getElementById('root'))




const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },

    margin: "auto",
    padding:"20px"
  },
}));

export default function SuccessAlerts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Alert variant="filled" severity="success">
      Successfully Updated 
      </Alert>
    </div>
  );
}
