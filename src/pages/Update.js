import React, {useEffect,useState} from 'react';

import axios from "axios";
import {useHistory} from "react-router-dom"
import { useParams } from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import Alert from '@material-ui/lab/Alert';
// import { useAlert } from 'react-alert'
 

const useStyles = makeStyles((theme) => ({
    root1: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
    },


    
}));


export const Update = () => {
    // const alert = useAlert()
    const { slug } = useParams();
    const classes = useStyles();
    const postUpdateBaseUrl = "https://blog6666.herokuapp.com/update/"
    const postDeleteBaseUrl = "https://blog6666.herokuapp.com/delete/"
    const DetailUrl = "/detail/"+slug;
    const history = useHistory();

    const [updatedata, setUpdatedata] = useState(
        {   
            "title" :"",
            "image" :"",
            "category" :"",
            "content" :""
            
        }
    );
    const handleChange = e => {
        const { name, value } = e.target;
        setUpdatedata(prevState => ({
            ...prevState,
            [name]: value
        }));
    };



    
    
    
    console.log("updatedata :",updatedata) ;
    
    


    useEffect(() => {
        axios.get((postUpdateBaseUrl+slug+"/"), {
           headers : {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization : "Token "+localStorage.getItem('Authorization'),
    
           }
        })
        .then( (res)=>setUpdatedata(res.data) )
           
        
             
    }, []) 

    
    const handleMenuDelete = () => {
        axios.delete((postDeleteBaseUrl+slug+"/"), {
            headers : {
             Accept: "application/json",
             "Content-Type": "application/json",
             Authorization : "Token "+localStorage.getItem('Authorization'),
     
            }
        })
        .then( (res)=>console.log("Delete_data:", res) )
        window.alert("Your Post Deleted")
        history.push("/")
        

    };
    

    const handleMenuUpdate = () => {
            
            // PUT request using fetch inside useEffect React hook
            const requestOptions = {
                method: 'PUT',
                headers : {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization : "Token "+localStorage.getItem('Authorization'),
            
                },
                body: JSON.stringify(
                    { 
                        "title": updatedata.title ,
                        "category": updatedata.category,
                        "image": updatedata.image,
                        "content": updatedata.content  
                    })
            };
            fetch( (postUpdateBaseUrl+slug+"/"), requestOptions)
                .then(response => response.json())
                .then(data => console.log("response_data:",data));
                window.alert("Your Post Updated")
                history.push(DetailUrl)
                // alert.show('Oh look, an alert!')
                // document.location.reload()
        
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
        

		
  	};

    

    return (
        <>
           
            <h1>UPDATE PAGE</h1>

            <form className={classes.root1} noValidate autoComplete="off"  >
                <div>
                    <TextField
                        id="standard-multiline-flexible"
                        name="title"
                        label="Title"
                        type="text"
                        multiline
                        rowsMax={2}
                        value={updatedata.title }
                        onChange={handleChange}
                        variant="outlined"
                        
                    />
                        <TextField
                        id="standard-multiline-flexible"
                        label="Image"
                        name="image"
                        multiline
                        rowsMax={1}
                        value={updatedata.image}
                        onChange={handleChange}
                        variant="outlined"
                        // variant="filled"
                        type="text"
                    />
                    <TextField
                        id="standard-multiline-flexible"
                        label="Category"
                        name="category"
                        multiline
                        rowsMax={1}
                        value={updatedata.category}
                        variant="outlined"
                        onChange={handleChange}
                        // variant="filled"
                        type="text"
                    />
                    <TextField
                        id="standard-multiline-flexible"
                        label="Content"
                        name="content"
                        multiline
                        rowsMax={15}
                        value={updatedata.content}
                        style={{ width:"90%" }}
                        onChange={handleChange}
                        variant="filled"
                        type="text"
                    />

                </div>
                <div>
                <Button variant="contained" color="primary"   onClick={handleMenuUpdate}>
                    UPDATE
                </Button>
                <Button variant="contained"   onClick={()=> history.push("/")} style={{marginLeft:"25px" }}>
                    cancel
                </Button>
                {/* <Button variant="contained" color="secondary"  onClick={handleMenuDelete} style={{marginLeft:"25px" }}>
                    DELETE
                </Button>
 */}

                <Button
                 variant="contained"
                 color="secondary" 
                 onClick={e =>window.confirm("Are you sure you wish to delete this item?") && handleMenuDelete(e)} 
                 style={{marginLeft:"25px" }}
                >
                DELETE2
                </Button>
                
                </div>
            </form>
            
            
        </>
    )
}

export default Update;
