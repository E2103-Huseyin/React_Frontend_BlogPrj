import React, {useEffect,useState} from 'react';
import { useFormik } from "formik";
import axios from "axios";
import {useHistory} from "react-router-dom"
import { useParams } from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    
}));


export const Update = () => {
    const classes = useStyles();
    const postUpdateBaseUrl = "https://blog6666.herokuapp.com/update/"
    const history = useHistory();
    const { slug } = useParams();

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



    const [newdata, setNewdata] = useState(updatedata);
    
    
    console.log("updatedata :",updatedata) ;
    console.log("newdata :",newdata) ;
    
    


    useEffect(() => {
        axios.get((postUpdateBaseUrl+slug+"/"), {
           headers : {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization : "Token "+localStorage.getItem('Authorization'),
    
           }
        })
        .then( (res)=>setUpdatedata(res.data) )
           
        // setUpdatedata(res.data) )
        // .then( ()=>setNewdata(updatedata) )
             
    }, []) 

     
    

    // const formik = useFormik({

    //     initialValues,

    //     initialValues: {
    //         title: updatedata.title ,
    //         category: updatedata.category,
    //         image: updatedata.image,
    //         content: updatedata.content,

    //     //     // "title": updatedata.title ,
    //     //     // "category": updatedata.category,
    //     //     // "image": updatedata.image,
    //     //     // "content": updatedata.content  
    //     // },
        
    //     onSubmit: async (values) => {
    //       console.log("values", values);
    //       try {
    //         const result = await axios.put(
    //             (postUpdateBaseUrl+slug+"/"),
    //           values,
    //           {
    //             headers: {
    //               Accept: "application/json",
    //               "Content-Type": "application/json",
    //               Authorization : "Token "+localStorage.getItem('Authorization'),
    //             },
    //           }
    //         );
    //         console.log(result?.data);
    //       } catch ({ response }) {
    //         if (response) {
    //         //   console.log(response.data.non_field_errors[0]);
    //           console.log("catch:",response.data);
    //         } else {
    //           console.log("Something went wrong!");
    //         }
    //       }
    //     },
    // });
    
    
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
                // .then(data => setPostId(data.id));
        
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
        

		
  	};


  
    
    const title = (updatedata?.title) ;

    console.log("title:",{title}.title)
    

    

    return (
        <>
           
            <h1>UPDATE PAGE</h1>

            <form className={classes.root} noValidate autoComplete="off"  >
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
                        // onChange={(event)=>setUpdatedata({ "title": event.target.value})}
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
                        // onChange={(event)=>setUpdatedata({ "image": event.target.value})}
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
                        // onChange={(event)=>setUpdatedata({ "category": event.target.value})}
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
                        // onChange={(event)=>setUpdatedata(updatedata.content = event.target.value)}
                        variant="filled"
                        type="text"
                    />

                       







                       

                </div>
                <div>
                <Button variant="contained" color="primary"   onClick={handleMenuUpdate}>
                        UPDATE
                </Button>
                        <Button variant="contained" color="secondary" style={{marginLeft:"25px" }}>
                        DELETE
                        </Button>
                
                </div>
            </form>
            
            
        </>
    )
}

export default Update;


// const handleChange = (prop) => (event) => {
//     setUpdatedata(
//         { 
//             ...title, [prop.category]: event.target.value, 
//             ...title, [prop.content]: event.target.value, 
//             ...title, [prop.image]: event.target.value, 
//             ...title, [prop.title]: event.target.value 
        
//         }
//     );
// };


