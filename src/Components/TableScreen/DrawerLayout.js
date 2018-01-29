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


class DrawerLayout extends Component {
  constructor(props){
    super(props)

  }
render(){
  return(
    <div>
<div className="DrawerHead" style={{padding:'0',alignItems:"center", paddingTop:'1.5rem'}}>
<span className="BlazeSpan">BLAZE</span><span className="WarehouseSpan"> Warehouse</span>

<div className="DrawerBody">
<List className="ListItemsStyle" style={{color:"#fff"}}>
       <ListItem button style={{color:"#fff"}}>

         <ListItemText primary="Inbox" className="ListItemsTextStyle"/>
       </ListItem>
       <ListItem button>

         <ListItemText primary="Drafts" />
       </ListItem>
     </List>
     <Divider />
     <List>
       <ListItem button>
         <ListItemText primary="Trash" />
       </ListItem>
       <ListItem button component="a" href="#simple-list">
         <ListItemText primary="Spam" />
       </ListItem>
     </List>

</div>
</div>
    </div>
  )
}
}

export default DrawerLayout;
