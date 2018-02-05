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
import Tabs, { Tab } from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import OverView from './InvoiceDetailTabs/OverView';

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
       value: 0,
     };

  }
  handleClick = event => {
     this.setState({ anchorEl: event.currentTarget });
   };

   handleClose = () => {
     this.setState({ anchorEl: null });
   };

   handleChange=(event,values)=>{
     this.setState({
       value:values
     })
   }


render(){
  const { anchorEl,value } = this.state;
  return(
      <div>
        <div className="ListDiv">
          <div>
            <div className="ListDivHeader">
              <div aria-owns={anchorEl ? 'simple-menu' : null}
                 aria-haspopup="true"
                 onClick={this.handleClick}
                 className="DropDownButtonTopInvoice"

               >
                 All Invoices<i class="material-icons" style={{marginTop:"2px"}}>arrow_drop_down</i>
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
      </div>


<div className="DetailsDiv">
  <div className="DetailsDivHeader">
    <div className="InvoiceDetailTagNumber">INV-000002</div>
    <i class="material-icons" style={{marginTop:"2rem",backgroundColor:"#f6f5f6",border:"0.05px solid #000",height:"45%",width:"3%",paddingTop:"5px"}}>mode_edit</i>
    <i class="material-icons" style={{marginTop:"2rem",backgroundColor:"#f6f5f6",border:"0.05px solid #000",height:"45%",width:"3%",paddingTop:"5px",marginLeft:"-1px"}}>picture_as_pdf</i>
    <i class="material-icons" style={{marginTop:"2rem",backgroundColor:"#f6f5f6",border:"0.05px solid #000",height:"45%",width:"3%",paddingTop:"5px",marginLeft:"-1px"}}>print</i>
    <i class="material-icons" style={{marginTop:"2rem",backgroundColor:"#f6f5f6",border:"0.05px solid #000",height:"45%",width:"3%",paddingTop:"5px",marginLeft:"-1px"}}>message</i>
    <i class="material-icons" style={{marginTop:"2rem",backgroundColor:"#f6f5f6",border:"0.05px solid #000",height:"45%",width:"3%",paddingTop:"5px",marginLeft:"2%",marginRight:"-55rem"}}>attach_file</i>
    <i class="material-icons" style={{marginTop:"2rem",height:"45%",width:"3%",paddingTop:"5px",marginLeft:"1%",float:"right"}}>close</i>


    <div aria-owns={anchorEl ? 'simple-menu' : null}
       aria-haspopup="true"
       onClick={this.handleClick}
       className="DropDownButtonTop"
       style={{float:'right',width:"7%",marginLeft:"0",marginTop:"20px",border:"1px solid #dddddd",backgroundColor:"#f6f5f6"}}
     >
     More<i class="material-icons" style={{marginTop:"2px"}}>arrow_drop_down</i>
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
    <div className="newdivstyle1" style={{height:"55%",paddingTop:"10px"}}>
      Record Payment
    </div>

  </div>



      <AppBar position="static" className="TabsAppBar" style={{backgroundColor:"#ffffff",height:"7rem",fontSize:"1.5rem"}}>
             <Tabs value={value} onChange={this.handleChange}  indicatorColor="#ffa700" textColor="#a1a1a1" style={{fontSize:"1.5rem"}}>
               <Tab label="Overview" style={{fontSize:"1.5rem",height:"7rem" ,width:"25%"}}/>
               <Tab label="Payments"  style={{fontSize:"1.5rem",height:"7rem" ,width:"25%"}}/>
               <Tab label="Attachments" style={{fontSize:"1.5rem",height:"7rem" ,width:"25%"}}/>
               <Tab label="Shipping Menifest" style={{fontSize:"1.5rem",height:"7rem" ,width:"25%"}}/>
             </Tabs>
      </AppBar>
          {value === 0 && <div><OverView /></div>}
          {value === 1 && <div>Payments</div>}
          {value === 2 && <div>Attachments</div>}
          {value === 3 && <div>Shipping Menifest</div>}
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
