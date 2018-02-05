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
import Contacts from './TableScreen/Contacts';
import Expenses from './TableScreen/Expenses';
import Fleet from './TableScreen/Fleet';
import PurchaseOrders from './TableScreen/PurchaseOrders';
import Reports from './TableScreen/Reports';
import Settings from './TableScreen/Settings';
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
position:'relative',
    display: 'flex',
    width: '130%',
    height: '100%',
  },
  appBar: {
display:'block',
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
    width: '77%',

    backgroundColor: theme.palette.background.default,

    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: '5%',

    },
  },
  'content-left': {
    marginLeft:-drawerWidth,
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


  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  inputLabelFocused: {
    color: '#ffa',
  },
  inputInkbar: {
    '&:after': {
      backgroundColor: '#fas',
    },
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 0,
    backgroundColor: '#fff',
    border: '1px solid #ced4da',
    fontSize: 16,


  height:'3rem',
    width: '34rem',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  textFieldFormLabel: {
    fontSize: 18,
  },



});




class TableScreen extends Component {
constructor(props){
  super(props)
  this.state = {
     anchorEl: null,
     RouteValue:'Invoices',
     margin_top:41,
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
    this.setState({
      RouteValue:clickedOn,
    })

    switch (clickedOn) {
      case 'Inventory':
      this.setState({
        margin_top:130
      })
        break;
        case 'Invoices':
        this.setState({
          margin_top:41
        })
          break;
      default:

    }
    if (clickedOn==='Inventory') {
      this.setState({
        margin_top:130
      })
    }
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
    <div className={classes.root}>

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

                {!(this.state.RouteValue==="Inventory")&&
                <TextField
                   placeholder="Search"
                   InputProps={{
                     disableUnderline: true,
                     classes: {
                       root: classes.textFieldRoot,
                       input: classes.textFieldInput,
                     },
                   }}
                   InputLabelProps={{
                     shrink: true,
                     className: classes.textFieldFormLabel,
                   }}
                 />
                }

                <div aria-owns={anchorEl ? 'simple-menu' : null}
                   aria-haspopup="true"
                   onClick={this.handleClick}
                   className="DropDownButtonTop"
                   style={{float:'right'}}
                 >
                 Location<i class="material-icons" style={{marginTop:"2px"}}>arrow_drop_down</i>
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
              {this.state.RouteValue==="Inventory" &&  <div className="InventoryHeaderContainer">  <InventoryHeader /> </div>}
            </AppBar>

            {before}




            <main
              className={classNames(classes.content, classes[`content-${anchor}`], {
                [classes.contentShift]: open,
                [classes[`contentShift-${anchor}`]]: open,
              })}
              style={{marginTop:this.state.margin_top}}
            >

              {(this.state.RouteValue==="Invoices") &&
                <InvoiceMain />
              }
              {(this.state.RouteValue==="Inventory") &&
                <InventoryMain />
              }
              {(this.state.RouteValue==="Contacts") &&
                <Contacts />
              }
              {(this.state.RouteValue==="Expenses") &&
                <Expenses />
              }
              {(this.state.RouteValue==="Fleet") &&
                <Fleet />
              }
              {(this.state.RouteValue==="PurchaseOrders") &&
                <PurchaseOrders />
              }
              {(this.state.RouteValue==="Reports") &&
                <Reports />
              }
              {(this.state.RouteValue==="Settings") &&
                <Settings />
              }


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
