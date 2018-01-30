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
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';




const styles = theme => ({
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
    marginTop:'10px',

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


class InventoryHeader extends Component {
  constructor(props){
    super(props)
    this.state = {
       anchorEl: null,
     };

  }

  handleClick = event => {
     this.setState({ anchorEl: event.currentTarget });
   };

   handleClose = () => {
     this.setState({ anchorEl: null });
   };

render(){
  const { classes } = this.props;
      const { anchorEl } = this.state;
  return(
<div className="InventoryHeaderMain">

  <div aria-owns={anchorEl ? 'simple-menu' : null}
     aria-haspopup="true"
     onClick={this.handleClick}
     className="DropDownButton"
     sty
   >
   All Inventory<i class="material-icons" style={{marginTop:"2px"}}>keyboard_arrow_down</i>
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

      <div className="newdivstyle1">
        New Product
      </div>
      <div className="newdivstyle2">
        New Branch
      </div>

</div>
  )
}
}

InventoryHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InventoryHeader);
