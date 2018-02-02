import React, { Component } from 'react';
import Validate from "react-validate-form";
import { confirmAlert } from 'react-confirm-alert';
import {Bootstrap, Grid, Row, Col,Alert,Badge,Breadcrumb,ButtonGroup,ButtonToolbar} from 'react-bootstrap';
import {DropdownButton,Carousel,Modal,Form,FormGroup,FormControl,HelpBlock,ControlLabel} from 'react-bootstrap';
import Icon from 'material-ui/Icon';
import is from 'is_js';
import Ripples from 'react-ripples';
import {Button} from 'react-materialize';
import Menu, { MenuItem } from 'material-ui/Menu';
import '../../Style/TableScreen.css';
import TextField from 'material-ui/TextField';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';

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


  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
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


let id = 0;
function createData(product_name, vandor, category, quantity_remaining, product_type) {
  id += 1;
  return { id, product_name, vandor, category, quantity_remaining, product_type };
}



class InventoryMain extends Component {
  constructor(props){
    super(props)

  }

render(){
    const { classes, theme } = this.props;
  const data = [
    createData('Blue Dream', 'John Farmers', 'Sativa', '140g,5 1/8 units', 'Recreational'),
    createData('Alaskan Ice', 'Sean Daikin', 'Sativa', '245g', 'Medicinal'),
    createData('Blue Dream', 'John Farmers', 'Sativa', '140g,5 1/8 units', 'Recreational'),
    createData('Alaskan Ice', 'Sean Daikin', 'Sativa', '245g', 'Medicinal'),
    createData('Blue Dream', 'John Farmers', 'Sativa', '140g,5 1/8 units', 'Recreational'),
    createData('Alaskan Ice', 'Sean Daikin', 'Sativa', '245g', 'Medicinal'),
    createData('Blue Dream', 'John Farmers', 'Sativa', '140g,5 1/8 units', 'Recreational'),
    createData('Alaskan Ice', 'Sean Daikin', 'Sativa', '245g', 'Medicinal'),
    createData('Blue Dream', 'John Farmers', 'Sativa', '140g,5 1/8 units', 'Recreational'),
    createData('Alaskan Ice', 'Sean Daikin', 'Sativa', '245g', 'Medicinal'),
    createData('Blue Dream', 'John Farmers', 'Sativa', '140g,5 1/8 units', 'Recreational'),
    createData('Alaskan Ice', 'Sean Daikin', 'Sativa', '245g', 'Medicinal'),
    createData('Blue Dream', 'John Farmers', 'Sativa', '140g,5 1/8 units', 'Recreational'),
    createData('Alaskan Ice', 'Sean Daikin', 'Sativa', '245g', 'Medicinal'),
    createData('Blue Dream', 'John Farmers', 'Sativa', '140g,5 1/8 units', 'Recreational'),
    createData('Alaskan Ice', 'Sean Daikin', 'Sativa', '245g', 'Medicinal'),
    createData('Blue Dream', 'John Farmers', 'Sativa', '140g,5 1/8 units', 'Recreational'),
    createData('Alaskan Ice', 'Sean Daikin', 'Sativa', '245g', 'Medicinal'),
    createData('Blue Dream', 'John Farmers', 'Sativa', '140g,5 1/8 units', 'Recreational'),
    createData('Alaskan Ice', 'Sean Daikin', 'Sativa', '245g', 'Medicinal'),
    createData('Blue Dream', 'John Farmers', 'Sativa', '140g,5 1/8 units', 'Recreational'),
    createData('Alaskan Ice', 'Sean Daikin', 'Sativa', '245g', 'Medicinal'),

  ];
  return(
  <div>

  <Table className={classes.table}  >
   <TableHead>
  <TableRow >
      <TableCell></TableCell>
      <TableCell >Product Name</TableCell>
      <TableCell >Vendor</TableCell>
      <TableCell>Category</TableCell>
      <TableCell >Quantity Remaining</TableCell>
      <TableCell >Product Type</TableCell>
  </TableRow>
   </TableHead>
   <TableBody>
  {data.map(n => {
             return (
               <TableRow key={n.id}>
             <TableCell >   <Checkbox/> </TableCell >
                   <TableCell >{n.product_name}</TableCell>
                   <TableCell >{n.vandor}</TableCell>
                   <TableCell >{n.category}</TableCell>
                   <TableCell >{n.quantity_remaining}</TableCell>
                   <TableCell >{n.product_type}</TableCell>

               </TableRow>
             );
           })}
            </TableBody>
           </Table>

  </div>
  )
}
}

InventoryMain.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(InventoryMain);
