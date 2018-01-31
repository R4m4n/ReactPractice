import React, { Component } from 'react';
import Validate from "react-validate-form";
import Tabs from './Tabs';
import { confirmAlert } from 'react-confirm-alert';
import Grids from './grids';
import BootstrapComponents from './BootstrapComponents';
import {Bootstrap, Grid, Row, Col,Alert,Badge,Breadcrumb,ButtonGroup,ButtonToolbar} from 'react-bootstrap';
import {DropdownButton,Carousel,Modal,Form,FormGroup,FormControl,HelpBlock,ControlLabel} from 'react-bootstrap';
import is from 'is_js';
import Ripples from 'react-ripples';
import {Button, Icon} from 'react-materialize';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import '../Style/TableScreen.css';
import InventoryHeader from './TableScreen/InventoryHeader';
import DrawerLayout from './TableScreen/DrawerLayout';
import Menu, { MenuItem } from 'material-ui/Menu';
import InventoryMain from './TableScreen/InventoryMain';
import InvoiceMain from './TableScreen/InvoiceMain';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height:'100%',
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {

    display: 'flex',
    width: '130%',
    height: '100%',
  },
  appBar: {
    color:"#ffa700",
backgroundColor:"#f7f7f7",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
backgroundColor:'#ffa700',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',

    ...theme.mixins.toolbar,
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 130,
    },
  },
  'content-left': {
    marginLeft:0,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },



});




class TableScreen extends Component {
constructor(props){
  super(props)
  this.state = {
     anchorEl: null,
   };

}
state = {
   open: false,
   anchor: 'left',
 };

 handleDrawerOpen = () => {

   this.setState({ open: !this.state.open });
 };

 handleDrawerClose = () => {
   this.setState({ open: false });
 };

 handleChangeAnchor = event => {
   this.setState({
     anchor: event.target.value,
   });
 };

 handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };


  onListItemClick=(clickedOn,event)=>{
    console.log(clickedOn);

  }

render(){
  const { classes, theme } = this.props;
  const { anchor, open } = this.state;
const { anchorEl } = this.state;
  const drawer = (
    <Drawer
      type="persistent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor={anchor}
      open={open}
    >
      <div className={classes.drawerInner}>
        <div className={classes.drawerHeader}>
        <DrawerLayout clickAction={this.onListItemClick}/>

        </div>

      </div>
    </Drawer>
  );

  let before = null;
  let after = null;

  if (anchor === 'left') {
    before = drawer;
  } else {
    after = drawer;
  }

  return(
    <div>

          <div className={classes.appFrame}>
            <AppBar
              className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
                [classes[`appBarShift-${anchor}`]]: open,
              })}
            >

              <Toolbar disableGutters={!open}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography type="title" color="inherit" noWrap>

                </Typography>
                <div aria-owns={anchorEl ? 'simple-menu' : null}
                   aria-haspopup="true"
                   onClick={this.handleClick}
                   className="DropDownButtonTop"
                   style={{float:'right'}}
                 >
                 Location<i class="material-icons" style={{marginTop:"2px"}}>keyboard_arrow_down</i>
               </div>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={this.handleClose}
                    >
                      <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                      <MenuItem onClick={this.handleClose}>My account</MenuItem>
                      <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                    </Menu>
                    <div style={{backgroundColor:"#ffa700",height:"30px",width:"30px",borderRadius:"50%"}}>
                    </div>
              </Toolbar>
                <div className="InventoryHeaderContainer">  <InventoryHeader /> </div>
            </AppBar>

            {before}

            <main
              className={classNames(classes.content, classes[`content-${anchor}`], {
                [classes.contentShift]: open,
                [classes[`contentShift-${anchor}`]]: open,
              })}
            >
            <Router>
    <div>

      <Route exact path="/" component={InventoryMain}/>
      <Route path="/InvoiceMain" component={InvoiceMain}/>

    </div>
  </Router>
<InventoryMain />

            </main>
            {after}
          </div>

    </div>
  )
}
}
TableScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TableScreen);
