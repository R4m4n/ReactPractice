import React, { Component } from 'react';
import Validate from "react-validate-form";
import { confirmAlert } from 'react-confirm-alert';
import {Bootstrap, Grid, Row, Col,Alert,Badge,Breadcrumb,ButtonGroup,ButtonToolbar} from 'react-bootstrap';
import {DropdownButton,Carousel,Modal,Form,FormGroup,FormControl,Checkbox,HelpBlock,ControlLabel} from 'react-bootstrap';
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



const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    color:'#fff',
    height: '100%',
    backgroundColor: '#ffa700',
    marginTop: '25px',
    paddingTop: '7rem',
    fontSize:'1.7rem',
    fontWeight:'70'
  },
ListItemStyle:{
  paddingLeft:'4rem'
}
});


class DrawerLayout extends Component {
  constructor(props){
    super(props)

  }
render(){
  const { classes } = this.props;
  return(
    <div>
<div className="DrawerHead" style={{padding:'0',alignItems:"center", paddingTop:'1.5rem'}}>
<span className="BlazeSpan">BLAZE</span><span className="WarehouseSpan"> Warehouse</span>

</div>
 <div  className={classes.root}>
<List>
       <ListItem button className={classes.ListItemStyle}>

    Invoices +
       </ListItem>
       <ListItem button className={classes.ListItemStyle}>

         Purchase Orders +
       </ListItem>

       <ListItem button className={classes.ListItemStyle}>
        Expenses +
       </ListItem>
       <ListItem button className={classes.ListItemStyle}>
        Fleet +
       </ListItem>
       <ListItem button className={classes.ListItemStyle}>
        Contacts +
       </ListItem>
       <ListItem button className={classes.ListItemStyle}>
        Inventory +
       </ListItem>
       <ListItem button className={classes.ListItemStyle}>
        Reports +
       </ListItem>
       <ListItem button className={classes.ListItemStyle}>
        Settings +
       </ListItem>
     </List>

</div>


    </div>
  )
}
}
DrawerLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerLayout);
