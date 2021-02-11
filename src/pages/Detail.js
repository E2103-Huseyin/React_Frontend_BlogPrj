import React, {useEffect,useState} from 'react';
import axios from "axios";
import PrimarySearchAppBar from "../components/Navbar/index";
import { useParams } from "react-router-dom"



const postDetailBaseUrl = "https://blog6666.herokuapp.com/detail/"
const Detail = () => {
    const { slug } = useParams();
    console.log("slug:",slug)
    const [blogDetail, setBlogDetail] = useState(null)
    useEffect(() => {
        axios.get(postDetailBaseUrl+slug+"/")?.then((res)=>console.log("detail:",res?.data))
        
        
    }, []) 
   
    return (
        
        <div>
            
            <h1>detail page</h1>
        </div>
    )
}

export default Detail
