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
    const [content, setContent] = React.useState('P');
    const handleChange2 = (event) => {
        setCurrency(event.target.value);
      };
    const handleChange3 = (event) => {
        setContent(event.target.value);
      };
    const [createdata, setCreatedata] = useState(
        {   
            "title" :"",
            "image" :"",
            "category" :"",
            "status" :"",
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
                        onChange={handleChange2,handleChange}
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
                        label="Content"
                        name="content"
                        value={content}
                        onChange={handleChange3,handleChange}
                        helperText="Please select your content"
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
                <Button variant="contained" color="primary"   >
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
