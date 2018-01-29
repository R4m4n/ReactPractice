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
      const { anchorEl } = this.state;
  return(
<div className="InventoryHeaderMain">

  <div aria-owns={anchorEl ? 'simple-menu' : null}
     aria-haspopup="true"
     onClick={this.handleClick}
     className="DropDownButton"
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
      className="HeaderTextField"
      placeholder="Search"
    style={{border:"1px solid #070707", fontSize:"4rem", minWidth:"35rem", minHeight:"4rem",alignItems:"center", marginTop:"1.5rem"}}
        InputProps={{
          disableUnderline: true,

        }}
        InputLabelProps={{
          shrink: true,

        }}
      />
</div>
  )
}
}

export default InventoryHeader;
