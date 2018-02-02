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
  appBar: {
    color:"#ffa700",
    backgroundColor:"#f8f7f7",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - 64px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
});

class InvoiceMain extends Component {
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
      <div>
      <div className="ListDiv">
<div className="ListDivHeader">
          <div aria-owns={anchorEl ? 'simple-menu' : null}
             aria-haspopup="true"
             onClick={this.handleClick}
             className="DropDownButtonTopInvoice"

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


</div>
      </div>


<div className="DetailsDiv">
<div className="DetailsDivHeader">


</div>

</div>
</div>
  )
}
}


InvoiceMain.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(InvoiceMain);
