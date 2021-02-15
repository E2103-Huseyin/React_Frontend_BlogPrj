import React, {useEffect,useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom"
import { useParams } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



const postDetailBaseUrl = "https://blog6666.herokuapp.com/detail/"
const Detail = () => {
    const history = useHistory();
    const usertoken ="Token "+localStorage.getItem('Authorization');
    console.log("usertoken:",usertoken);
    const { slug } = useParams();
    console.log("slug:",slug);
    const [blogDetail, setBlogDetail] = useState("");
    
    const handleMenuUpdate = () => {
		
		history.push(`/update/${slug}/`)
		document.location.reload()
  	};

    console.log("detail:",blogDetail);
    useEffect(() => {
        axios.get((postDetailBaseUrl+slug+"/"), {
           headers : {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization : "Token "+localStorage.getItem('Authorization'),

           }
        })
        .then( (res)=>setBlogDetail(res.data) )
        
        
        
    }, []) 
   
    return (
        
        <div>
            
            <h1>detail page</h1>
            <h5>{blogDetail.title}</h5>
            <p>{blogDetail.content}</p>

            <Button variant="outlined" onClick={handleMenuUpdate}>Update</Button>
            <Button variant="outlined" color="primary">
                Primary
            </Button>
            <Button variant="outlined" color="secondary">
                Secondary
            </Button>

        </div>
    )
}

export default Detail
