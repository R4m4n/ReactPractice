import React, { Component } from 'react';
import axios from 'axios';
import Tabs from './Tabs';
import { confirmAlert } from 'react-confirm-alert';
import Grids from './grids';
import BootstrapComponents from './BootstrapComponents';

import {Bootstrap, Grid, Row, Col,Alert,Badge,Breadcrumb,Button,ButtonGroup,ButtonToolbar} from 'react-bootstrap';
import {DropdownButton,MenuItem,Carousel,Modal,OverlayTrigger,Form,FormGroup,FormControl,ListGroupItem,Panel,PanelGroup} from 'react-bootstrap';

class FetchApis extends Component {
constructor(props){
  super(props);
  this.state={
    message:{},
  }
}
componentWillMount(){
  axios.get('https://dog.ceo/api/breeds/list/all')
  .then((response)=> {
    this.setState({
      message:response.data
    });
    console.log(Object.keys(response.data.message));
  })
  .catch(function (error) {
    console.log(error);
  });
}


render(){

  const { message } = this.state;

  return(
    <div className="contentlist">
    <Col xs={6} md={4}>
    <PanelGroup
  		accordion
  		id="accordion-uncontrolled-example"
  		defaultActiveKey="2"
  	>
  {message.message && Object.keys(message.message).map((item,key)=>
     	<Panel eventKey={key+1} key={key}>
        <Panel.Heading>
          <Panel.Title toggle>{item} ({message.message[item].length})</Panel.Title>

        </Panel.Heading>
           {message.message[item].map((index,keys)=>
             <Panel.Body collapsible key={keys}>{index}</Panel.Body>)
           }
      </Panel>) || null }
	</PanelGroup>
	</Col>
    </div>
  )
}
}

export default FetchApis;
