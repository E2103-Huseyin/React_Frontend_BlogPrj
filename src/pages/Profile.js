import React, {useEffect,useState} from 'react'
import axios from "axios";
import { useParams } from "react-router-dom"


const postProfileBaseUrl = "https://blog6666.herokuapp.com/user/profile/"
const Profile = () => {

    const usertoken ="Token "+localStorage.getItem('Authorization');
    const user ="Token "+localStorage.getItem('Localusername');
    console.log("usertoken:",usertoken);
    const { username } = useParams();
    console.log("username:",username);
    const [userProfile, setUserProfile] = useState("");
    
    useEffect(() => {
        axios.put((postProfileBaseUrl+username+"/"), {
           headers : {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization : "Token "+localStorage.getItem('Authorization'),

           }
        })
        .then( (res)=>console.log("userProfile:",res) )
        // .then( (res)=>setUserProfile(res.data) )
        
        
        
    }, []) 

    return (
        <div>
            <h1>profile page</h1>

            
        </div>
    )
}

export default Profile
