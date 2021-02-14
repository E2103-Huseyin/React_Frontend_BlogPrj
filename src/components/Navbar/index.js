import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom"
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import SpaIcon from '@material-ui/icons/Spa';
import Button from '@material-ui/core/Button';
// import {Link } from "react-router-dom";
import {history} from "react-router-dom"


const useStyles = makeStyles((theme) => ({
  grow: {
	flexGrow: 1,
  },
  menuButton: {
	marginRight: theme.spacing(2),
  },
  title: {
	display: 'none',
	[theme.breakpoints.up('sm')]: {
	  display: 'block',
	},
  },
  search: {
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: fade(theme.palette.common.white, 0.15),
	'&:hover': {
	  backgroundColor: fade(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
	  marginLeft: theme.spacing(3),
	  width: 'auto',
	},
  },
  searchIcon: {
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
  },
  inputRoot: {
	color: 'inherit',
  },
  inputInput: {
	padding: theme.spacing(1, 1, 1, 0),
	// vertical padding + font size from searchIcon
	paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
	transition: theme.transitions.create('width'),
	width: '100%',
	[theme.breakpoints.up('md')]: {
	  width: '20ch',
	},
  },
  sectionDesktop: {
	display: 'none',
	[theme.breakpoints.up('md')]: {
	  display: 'flex',
	},
  },
  
    sectionMobile: {
	
	display: 'flex',
	[theme.breakpoints.up('md')]: {
	  display: 'none',
	},
  },

    
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [message, setMessage] = useState("hello")
  const history = useHistory()
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
	setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
	setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
	setAnchorEl(null);
	handleMobileMenuClose();
  };

  const handleMenuProfile = () => {
		// axios.get(baseurl)?.then((res)=>setBlogList(res?.data))
		const username = localStorage.getItem("Localusername");	
		history.push(`/user/profile/${username}/`)
		document.location.reload()
  	};

  const handleMenuLogout = () => {
    axios.post(`https://blog6666.herokuapp.com/auth/logout/`)
      .then(response => {
		localStorage.setItem("Authorization", "");
		// localStorage.removeItem()
        console.log("Logout_message:",response )
        history.push("/")
        document.location.reload()
    }).catch(({response:{data}}) => setMessage({data}))
    
    }
	console.log("error_message:",message )
	
  	const handleMobileMenuOpen = (event) => {
	setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
	<Menu
	  anchorEl={anchorEl}
	  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
	  id={menuId}
	  keepMounted
	  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
	  open={isMenuOpen}
	//   onClose={handleMenuClose}
	>
	  <MenuItem onClick={handleMenuProfile}>Profile</MenuItem>
	  <MenuItem onClick={handleMenuClose}>My account</MenuItem>
	  <MenuItem onClick={handleMenuLogout}>Logout</MenuItem>
	</Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
	<Menu
	  anchorEl={mobileMoreAnchorEl}
	  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
	  id={mobileMenuId}
	  keepMounted
	  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
	  open={isMobileMenuOpen}
	  onClose={handleMobileMenuClose}
	>
	  <MenuItem>
		<IconButton aria-label="show 4 new mails" color="inherit">
		  <Badge badgeContent={4} color="secondary">
			<MailIcon />
		  </Badge>
		</IconButton>
		<p>Messages</p>
	  </MenuItem>
	  <MenuItem>
		<IconButton aria-label="show 11 new notifications" color="inherit">
		  <Badge badgeContent={11} color="secondary">
			<NotificationsIcon />
		  </Badge>
		</IconButton>
		<p>Notifications</p>
	  </MenuItem>
	  <MenuItem onClick={handleProfileMenuOpen}>
		<IconButton
		  aria-label="account of current user"
		  aria-controls="primary-search-account-menu"
		  aria-haspopup="true"
		  color="inherit"
		>
		  <AccountCircle />
		</IconButton>
		<p>Profile</p>
	  </MenuItem>
	</Menu>
  );
  const x = localStorage.getItem('Authorization')? "visible"  :"none";
  
  return (
	<div className={classes.grow}>
	  <AppBar position="static">
		<Toolbar>
		  <IconButton
			edge="start"
			className={classes.menuButton}
			color="inherit"
			aria-label="open drawer"
			href="http://localhost:3000/"
		  >
			<SpaIcon />
		  </IconButton>
		  <Typography className={classes.title} variant="h6" noWrap >
			BLOG
		  </Typography>

          <div className={classes.sectionDesktop}>
            <Button href="http://localhost:3000/" color="inherit">
				Post List 
				{/* <Link to="/">Post List </Link> */}
            </Button>
            <Button href="#text-buttons" color="inherit">
                Post Create
            </Button>
		  </div>

		  <div className={classes.search}>
			<div className={classes.searchIcon}>
			  <SearchIcon />
			</div>
			<InputBase
			  placeholder="Search…"
			  classes={{
				root: classes.inputRoot,
				input: classes.inputInput,
			  }}
			  inputProps={{ 'aria-label': 'search' }}
			/>
		  </div>
		  <div className={classes.grow} />
		  
		  <div className={classes.sectionDesktop}>
            <Button href="http://localhost:3000/auth/login" color="inherit" >
                Sign In
            </Button>
            <Button href="#text-buttons" color="inherit">
                Sign Up
            </Button>
		  </div>

		  
		  <div className={classes.sectionDesktop}>
		  
			<IconButton aria-label="show 4 new mails" color="inherit">
			  <Badge badgeContent={4} color="secondary">
				<MailIcon />
			  </Badge>
			</IconButton>
			<IconButton aria-label="show 17 new notifications" color="inherit">
			  <Badge badgeContent={17} color="secondary">
				<NotificationsIcon />
			  </Badge>
			</IconButton>
			<IconButton
			  edge="end"
			  aria-label="account of current user"
			  aria-controls={menuId}
			  aria-haspopup="true"
			  onClick={handleProfileMenuOpen}
			  color="inherit"
			  className={classes.userAvatar}
			  style = {{display: x }}
			>
			  <AccountCircle />
			</IconButton>
		  </div>
		  <div className={classes.sectionMobile}>
			<IconButton
			  aria-label="show more"
			  aria-controls={mobileMenuId}
			  aria-haspopup="true"
			  onClick={handleMobileMenuOpen}
			  color="inherit"
			>
			  <MoreIcon />
			</IconButton>
		  </div>
		</Toolbar>
	  </AppBar>
	  {renderMobileMenu}
	  {renderMenu}
	</div>
  );
}

