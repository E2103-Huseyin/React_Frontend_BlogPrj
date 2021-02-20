import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Comment({props}) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={props.commenter.toUpperCase()}  src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={props.commenter.toUpperCase()} 
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {props.comment}
                <br/>
              </Typography>
              {props.comment_time.slice(0,10)}{" __ "} {props.comment_time.slice(11,16)}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      
    </List>
  );
}
