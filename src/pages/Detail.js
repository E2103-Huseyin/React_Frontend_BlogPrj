import React, {useEffect,useState} from 'react';
import Comment from "../components/Comment/comment"
import ImageBar from "../components/LikeViewComent/index"
import axios from "axios";
import {useHistory} from "react-router-dom"
import { useParams } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


const useStyles = makeStyles((theme) => ({
  // root: {
  //   '& > *': {
  //     margin: theme.spacing(1),
  //   },
  // },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: "15px",
    marginBottom: "15px",
    border: "2px solid black",
    borderRadius: "8px",
    padding: "15px",
    backgroundColor: "#de8"


  },
  root2: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: "15px",
    marginBottom: "15px",
    border: "2px solid black",
    borderRadius: "8px",
    padding: "15px",
    backgroundColor: "#8ef"


  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  root6: {
    // color:"white",
     display: 'flex',
     width: '50%',
    // flexWrap: 'wrap',
    justifyContent: 'space-around',
    // backgroundColor:"rgba(25,100,178,0.7)",
    padding:"8px"
  },


}));



const postDetailBaseUrl = "https://blog6666.herokuapp.com/detail/"
const Detail = () => {
    const classes = useStyles();
    const history = useHistory();
    const [comment, setComment] = useState('');
    const [visible, setVisible] = useState('');
    console.log("comment:", comment)
    const postCommentBaseUrl = "https://blog6666.herokuapp.com/comment/"
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

    const GetComment = () => {
      axios.get((postDetailBaseUrl+slug+"/"), {
        headers : {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization : "Token "+localStorage.getItem('Authorization'),
  
        }
      }).then( (res)=>setBlogDetail(res?.data) )
      
    }
    const postLike = () => {
      const requestOptions = {
        method: 'POST',
        headers : {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization : "Token "+localStorage.getItem('Authorization'),
    
        },
      };
      fetch( (`https://blog6666.herokuapp.com/like/${slug}/`), requestOptions)
      .then(response => response.json())
      .then(data => console.log("like_data:",data))
      .then(() => GetComment())
      
      
    }

    useEffect(() => {
      GetComment();
    }, []);

    const handleSubmit = () => {
      const requestOptions = {
          method: 'POST',
          headers : {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization : "Token "+localStorage.getItem('Authorization'),
      
          },
          body: JSON.stringify(
              {   
                  "comment": comment
              })
      };
      fetch( (`https://blog6666.herokuapp.com/comment/${slug}/`), requestOptions)
      .then(response => response.json())
      .then(data => console.log("response_data:",data))
      .then(() => GetComment())
      // useEffect()

    };
    
    const myblog_owner = (blogDetail.blogger == localStorage.getItem("Localusername"))? "visible"  :"hidden";
    console.log("blog_owner:", myblog_owner)
   
    const [mycolor, setMycolor] = useState('');
    const favorLike = ()=>{
      return(
        mycolor?  setMycolor(""): setMycolor("red")
      )
  }

    

   
    return (
        
        <>
            <h1>detail page</h1>
            <div className={classes.root2}>
              
              <ImageBar props={blogDetail}/>
              
              <div>
                <h5>{blogDetail.title}-({blogDetail.update_time})</h5>
                <p>{blogDetail.content}</p>
              </div>
              <div className={classes.root6} >
                <IconButton onClick={favorLike}>
                  <FavoriteIcon style={{color:mycolor }}/>
                </IconButton>

                <IconButton onClick={postLike} >
                  <ThumbUpAltIcon />{blogDetail.like_count}
                </IconButton>

                <IconButton >
                  <VisibilityIcon />{blogDetail.view_count}
                </IconButton>

                <IconButton >
                  <ChatBubbleOutlineIcon />{blogDetail.comment_count}
                </IconButton>                    
              </div>

              <div>
              <Button 
                variant="outlined" 
                onClick={handleMenuUpdate} 
                style = {{visibility: myblog_owner , backgroundImage: "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"}}
              >
                Update
              </Button>
              </div>

              
              
              
            </div>
            <div className={classes.root}>
      
              <TextField
                id="outlined-full-width"
                label="Your Comment"
                style={{ margin: 8 }}
                placeholder={blogDetail.title}
                helperText="Max 500 characters!"
                fullWidth
                multiline
                rowsMax={15}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={(e)=>setComment(e.target.value)}
              />
              <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  style={{marginTop:"20px",marginLeft:"20px"}}
                  onClick={handleSubmit}
              >
                  Post<CreateIcon/>
              </Button>
            
            </div>
            {/* <div>
              <CommentPost title={blogDetail.title}/>
            </div> */}
            <div>

              {blogDetail.comment_text?.map(data =>{
                return <Comment  props={data} /> 
                
              })}

            </div>
            
            

        </>
    )
}

export default Detail
