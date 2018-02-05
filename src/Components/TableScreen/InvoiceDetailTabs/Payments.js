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
import '../../../Style/TableScreen.css';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';




class Payments extends Component {
  constructor(props){
    super(props)


  }


render(){

  return(
<div className="InventoryHeaderMain">
Payments
</div>
  )
}
}


export default Payments;
