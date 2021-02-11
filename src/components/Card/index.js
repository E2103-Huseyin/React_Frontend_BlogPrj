import React from 'react';
import Iconbar from "./iconbar"
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import {useHistory} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height:500,
    margin:20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({props}) {
    // const like = {props.like_count}
    const history = useHistory();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    
    
    <Card className={classes.root}  >
    
      <button>
        <div onClick={()=>history.push(`/detail/${props.slug}`)}>

        
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.blogger.slice(0,1).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title.toUpperCase()}
        subheader={props.blogger.toUpperCase()+" posted in "+props.publish_time}
        
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" >
            
            {props.content.slice(0,200)+"..."} 
            
            
        </Typography>
      </CardContent>
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        
        

        <CardActions >

            <div style={{padding:15}}>
                <ThumbUpAltIcon />{props.like_count}
            </div>
            <div style={{padding:15}}>
                <VisibilityIcon />{props.view_count}
            </div>
            <div style={{padding:15}}>
                <ChatBubbleOutlineIcon />{props.comment_count}
            </div>
            


        </CardActions>
      </CardActions>

      </button>
      
    </Card>
    
   
    </>
  );
}
