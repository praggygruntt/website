import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileAlt} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faStackOverflow} from '@fortawesome/free-brands-svg-icons';

import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import CallIcon from '@material-ui/icons/Call';
import {Link, NavLink} from 'react-router-dom';
import './Welcome.css';

import headshot from './assets/Headshot.png';


const drawerWidth = 320;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  divider: {
      color: "white"
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
      ...theme.mixins.toolbar
    },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: "url(https://images.unsplash.com/photo-1526835230578-c62e8ff3c52d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)",
    backgroundPosition: "-15px",
    backgroundSize: "cover"
  },
  content: {
    // flexGrow: 1,
    // padding: theme.spacing(3),
    width: "70%",
    height: "100vh",
  },
  "@media (max-width: 600px)": {
    content: {
      width: "100%"
    }
  }
}));

function Welcome(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    function handleDrawerToggle() {
      setMobileOpen(!mobileOpen);
    }
    function closeDrawer() {
        setMobileOpen(false);
    }
    const drawer = (
      <div style={{height: "100%"}} className="Drawer">
        <div className={`${classes.toolbar} Drawer-open-appbar`} style={{background: "rgba(0,3,29,.7)", color: "white"}}>
            <KeyboardArrowLeftIcon onClick={closeDrawer} />
        </div>
        <div style={{background: "rgba(0,3,29,.7)", height: "100%"}}>
            <div className="Drawer-namecard">
                <img src={headshot} alt="Zachary Bowman Headshot"/>
                <h1 style={{fontWeight: "700"}}>Zachary Bowman</h1>
                <h2 style={{fontWeight: "200"}}>Front-End Web Developer</h2>
            </div>
            <div className="Drawer-links">
                <NavLink exact activeClassName="active" to="/portfolio"><h2>Portfolio</h2></NavLink>
                <NavLink exact activeClassName="active" to="/story"><h2>My Story</h2></NavLink>
                <NavLink exact activeClassName="active" to="/contact"><h2>Get in Touch</h2></NavLink>
            </div>
            <div className="Drawer-links">
                <div className="Drawer-links-single-container">
                    <a target="_blank"  rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit", margin: "inherit"}}href="https://www.github.com/praggygruntt"><h2 style={{marginRight: "3%"}}>Github</h2></a>
                    <a target="_blank"  rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit", marginLeft: "10px"}}href="https://www.github.com/praggygruntt"><FontAwesomeIcon size="lg" icon={faGithub}/></a>
                </div>       
                <div className="Drawer-links-single-container">
                  <a target="_blank"  rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit", margin: "inherit"}}href="https://www.linkedin.com/in/zacharybbowman/"><h2 style={{marginRight: "3%"}}>LinkedIn</h2></a>
                  <a target="_blank"  rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit", marginLeft: "10px"}}href="https://www.linkedin.com/in/zacharybbowman/"><FontAwesomeIcon size="lg" icon={faLinkedin}/></a>
                </div>
                <div className="Drawer-links-single-container">
                  <a target="_blank"  rel="noopener noreferrer" style={{width: "100%", textDecoration: "none", color: "inherit", margin: "inherit"}}href="https://stackoverflow.com/users/10676693/praggygruntt?tab=profile"><h2 style={{marginRight: "3%"}}>Stack Overflow</h2></a>
                  <a target="_blank"  rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit", marginLeft: "5px"}}href="https://stackoverflow.com/users/10676693/praggygruntt?tab=profile"><FontAwesomeIcon size="lg" icon={faStackOverflow}/></a>
                </div>
                <div className="Drawer-links-single-container">
                  <a target="_blank"  rel="noopener noreferrer" style={{width: "100%", textDecoration: "none", color: "inherit", margin: "inherit"}}href={require("./assets/zbResume07-14-19.pdf")}><h2 style={{marginRight: "3%"}}>Resume</h2></a>
                  <a target="_blank"  rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit", marginLeft: "5px"}} href={require("./assets/zbResume07-14-19.pdf")}><FontAwesomeIcon size="lg" icon={faFileAlt}/></a>
                </div> 
                {/* <div className="Drawer-links-single-container">
                    <h2 style={{marginRight: "3%"}}>zchrybwmn@gmail.com</h2>
                    <FontAwesomeIcon size="lg" icon={faEnvelopeOpenText}/>
                </div>  */}
            </div>
        </div>
      </div>
    );
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="inherit" noWrap style={window.screen.width > 600 ? {opacity: "0"} : {opacity: "1"}}>Zachary Bowman</Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
            
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <div className="stars">
              <div id='stars'></div>
              <div id='stars2'></div>
              <div id='stars3'></div>
            </div>
            <div className="hero">
              <h1>Hi, I'm Zach!</h1>
              <h3>I'm a web developer specializing in</h3>
              <h2>React.js Front-End Web Development</h2>
              <h3>with a touch of UI/UX Design.</h3>
            </div>
            <div className="hero-buttons">
              <Link to="/portfolio" className="hero-buttons-button">PORTFOLIO <CollectionsBookmarkIcon /></Link>
              <Link to="/contact" className="hero-buttons-button">DROP A LINE <CallIcon /></Link>
            </div>
        </main>
      </div>
    );
  }
  
  Welcome.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
  };
  
  export default Welcome;