import React, {useEffect,useState} from 'react';
import Comment from "../components/Comment/comment"
import axios from "axios";
import {useHistory} from "react-router-dom"
import { useParams } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';

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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },


}));



const postDetailBaseUrl = "https://blog6666.herokuapp.com/detail/"
const Detail = () => {
    const classes = useStyles();
    const history = useHistory();
    const [comment, setComment] = useState('');
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
   
    return (
        
        <>
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
