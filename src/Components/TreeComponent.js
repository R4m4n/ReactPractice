import React, { Component } from 'react';
import axios from 'axios';
import Tabs from './Tabs';
import { confirmAlert } from 'react-confirm-alert';
import Grids from './grids';
import BootstrapComponents from './BootstrapComponents';
import Tree from 'react-d3-tree';
import {Bootstrap, Grid, Row, Col,Alert,Badge,Breadcrumb,Button,ButtonGroup,ButtonToolbar} from 'react-bootstrap';
import {DropdownButton,MenuItem,Carousel,Modal,OverlayTrigger,Form,FormGroup,FormControl,ListGroup,ListGroupItem,Panel,PanelGroup} from 'react-bootstrap';

class TreeComponent extends Component {
constructor(props){
  super(props);
  this.state={
    treeData:{},
    showModal:false,
     user: {},
     childern:[],
    myTreeData : [
      {
         name: 'Top Level',
        // attributes: {
        //   Designation: 'val A',
        //
        // },
         children: [
          {
            name: 'Level 2: A',
            attributes: {
              Designation: 'val A',

            },
          }
        ]
        //     children: [
        //       {
        //         name: 'Level 2: A',
        //         attributes: {
        //           Designation: 'val A',
        //
        //         },
        //       }
        //       ]
        //   },
        //   {
        //     name: 'Level 2: B',
        //     attributes: {
        //       Designation: 'val A',
        //
        //     },
        //   },
        //


      },
    ],
  }
}

nodeOnClick=(prop)=>{
  console.log(prop);
  this.setState({
    showModal:true,
  })
}
handleClose=()=>{
  this.setState({
    showModal:false,
  })
}
addData=(prop)=>{
  let {myTreeData} = this.state;
  myTreeData.push(prop);
console.log(myTreeData)
  this.setState({ showModal:false, myTreeData: Object.assign({}, this.state.myTreeData, {
    childern: prop,
  }), })

}
handleChange = (key, event) => {
  let {user} = this.state;
  user[key] = event.target.value;

  this.setState({ user });
  this.state.childern.push(user);
}

render(){
{
this.state.myTreeData.map((index,key)=><div key={key}>{console.log("data",index)}</div>)}

  return(
    <div id="treeWrapper" style={{width: '100%', height: '80rem'}} >
    <Tree data={this.state.myTreeData} orientation="vertical" onClick={this.nodeOnClick}/>


    <Modal show={this.state.showModal} onHide={this.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Enter Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ListGroup>
      <FormControl type="text" placeholder="Name" onChange={this.handleChange.bind(this, 'name')} />
{  // <FormControl type="text" placeholder="Designation" onChange={this.handleChange.bind(this, 'designation')} />
}
    </ListGroup>
      </Modal.Body>
      <Modal.Footer>
          <Button onClick={this.addData.bind(this,this.state.childern)} bsStyle="success" >Add</Button>
        <Button onClick={this.handleClose} bsStyle="danger">Close</Button>
      </Modal.Footer>
    </Modal>

    </div>
  )
}
}

export default TreeComponent;
