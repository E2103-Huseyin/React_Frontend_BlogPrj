import React, {useEffect,useState} from 'react';
import axios from "axios"; //https://github.com/axios/axios
import Card from "../Card/index";
import Box from '@material-ui/core/Box';
import {useHistory} from "react-router-dom"

const baseurl = "https://blog6666.herokuapp.com";

const Cardlist = () => {
    const [blogList, setBlogList] = useState(null)
    useEffect(() => {
        axios.get(baseurl)?.then((res)=>setBlogList(res?.data))
        
    }, [])   // içi boşsa component did mount
    
    console.log("blogList2:", blogList)
    //useEffect -axios API call 
    //post list : https://blog6666.herokuapp.com/
    // udseState : useEffect ile istek göndereceğim data gelirse useStatte ile hafızada tutacağım
    // gelen datayı card ile sergilemek için mapping yapacağız
    const history = useHistory()
    const x = localStorage.getItem('Authorization')? "visible"  :"none";
    const y = localStorage.getItem('Authorization')? "none"  :"visible";
    
    const handleClick = ()=>{
        return(
            localStorage.getItem('Authorization')?  null : history.push("/auth/login")
        )
    }



    return (
        <div>
            <Box display="flex" justifyContent="center"  flexWrap="wrap" m={1} p={1} onClick={handleClick}>
            

                {blogList?.map(data =>{
                    return <Card  props={data} /> 
                
                
                })}

            </Box>

            
        </div>
    )
}

export default Cardlist
