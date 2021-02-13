import React, {useEffect,useState} from 'react';
import axios from "axios";
import PrimarySearchAppBar from "../components/Navbar/index";
import { useParams } from "react-router-dom"



const postDetailBaseUrl = "https://blog6666.herokuapp.com/detail/"
const Detail = () => {
    const usertoken ="Token "+localStorage.getItem('Authorization');
    console.log("usertoken:",usertoken);
    const { slug } = useParams();
    console.log("slug:",slug);
    const [blogDetail, setBlogDetail] = useState("");
    


    console.log("detail:",blogDetail);
    useEffect(() => {
        axios.get((postDetailBaseUrl+slug+"/"), {
           headers : {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization : {usertoken},

           }
        })
        .then( (res)=>setBlogDetail(res.data) )
        
        
        
    }, []) 
   
    return (
        
        <div>
            
            <h1>detail page</h1>
            <h5>{blogDetail.title}</h5>
            <p>{blogDetail.content}</p>

        </div>
    )
}

export default Detail
