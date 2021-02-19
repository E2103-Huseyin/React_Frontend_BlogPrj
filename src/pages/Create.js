import React, {useEffect,useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom"
import { useParams } from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const currencies = [
    {
      value: 'E',
      label: 'EDUCATION',
    },
    {
      value: 'H',
      label: 'HEALTH',
    },
    {
      value: 'F',
      label: 'FAMILY',
    },
    {
      value: 'T',
      label: 'TECHNOLOGY',
    },
    {
      value: 'EC',
      label: 'ECONOMY',
    },
    {
      value: 'R',
      label: 'RELIGION',
    },
  ];


  const currencies2 = [
    {
      value: 'D',
      label: 'DRAFT',
    },
    {
      value: 'P',
      label: 'PUBLISHED',
    },
    
  ];

const useStyles = makeStyles((theme) => ({
    root1: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    root0: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
    },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },


    
}));

const Create = () => {
    const history = useHistory();
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('E');
    const [currency3, setCurrency3] = React.useState('P');
    
    const handleChange2 = (event) => {
        setCurrency(event.target.value);
      };
    const handleChange3 = (event) => {
        setCurrency3(event.target.value);
      };
    const [createdata, setCreatedata] = useState(
        {   
            "title" :"",
            "image" :"",
            // "category" :"",
            // "status" :"",
            "content" :""
            
        }
    );
    const handleChange = e => {
        const { name, value } = e.target;
        setCreatedata(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    console.log("createdata :",createdata) ;

    const handleCreate = () => {
            
        
        const requestOptions = {
            method: 'POST',
            headers : {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization : "Token "+localStorage.getItem('Authorization'),
        
            },
            body: JSON.stringify(
                {   "title" : createdata.title,
                    "image" : createdata.image,
                    "category" : currency.category,
                    "status" : currency3.status,
                    "content" : createdata.content
                })
        };
        fetch( ("https://blog6666.herokuapp.com/create/"), requestOptions)
            .then(response => response.json())
            // .then(data => console.log("response_data:",data))
            .then(res =>history.push("/detail/"+res.slug) );
            
            // alert.show('Oh look, an alert!')
            // document.location.reload()
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    

    
  };



    return (
        <>
        <div>
            <h1>create page</h1>

            <form className={classes.root1} noValidate autoComplete="off"  >
                <div>
                    <TextField
                        id="standard-multiline-flexible"
                        name="title"
                        label="Title"
                        type="text"
                        multiline
                        rowsMax={2}
                        // value={updatedata.title }
                        onChange={handleChange}
                        variant="outlined"
                        
                    />
                        <TextField
                        id="standard-multiline-flexible"
                        label="Image"
                        name="image"
                        multiline
                        rowsMax={1}
                        // value={updatedata.image}
                        onChange={handleChange}
                        variant="outlined"
                        // variant="filled"
                        type="text"
                    />
                    
                     {/* <TextField
                        id="standard-multiline-flexible"
                        label="Category"
                        name="category"
                        multiline
                        rowsMax={1}
                        // value={updatedata.category}
                        variant="outlined"
                        onChange={handleChange}
                        // variant="filled"
                        type="text"
                    /> */}
                     <TextField
                        id="standard-select-currency"
                        select
                        label="Category"
                        name="category"
                        value={currency}
                        onChange={handleChange2}
                        helperText="Please select your category"
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Status"
                        name="status"
                        value={currency3}
                        onChange={handleChange3}
                        helperText="Please select your status"
                        >
                        {currencies2.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Content"
                        name="content"
                        multiline
                        rowsMax={15}
                        // value={updatedata.content}
                        style={{ width:"90%" }}
                        onChange={handleChange}
                        variant="filled"
                        type="text"
                    />

                </div>
                <div>
                <Button variant="contained" color="primary"  onClick={handleCreate} >
                    Save Post
                </Button>
                <Button variant="contained"   onClick={()=> history.push("/")} style={{marginLeft:"25px" }}>
                    cancel
                </Button>
                
                
                </div>
            </form>



        </div>

        </>
    )
}

export default Create
