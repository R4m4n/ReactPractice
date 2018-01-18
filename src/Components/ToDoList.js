import React, { Component } from 'react';

import Tabs from './Tabs';
import { confirmAlert } from 'react-confirm-alert';
import Grids from './grids';
import BootstrapComponents from './BootstrapComponents';
import {Bootstrap, Grid, Row, Col,Alert,Badge,Breadcrumb,Button,ButtonGroup,ButtonToolbar,Glyphicon} from 'react-bootstrap';
import {DropdownButton,MenuItem,Carousel,Modal,OverlayTrigger,Form,FormGroup,FormControl,Checkbox,ListGroup,ListGroupItem} from 'react-bootstrap';
import is from 'is_js';


class ToDoList extends Component {
constructor(props){
  super(props);
  this.state={
    toDoList:[],
    dropDownTitle:'Select',
    showModal:false,
    keyValues:[],
    isMainChecked:false,
    user: {
      Title:'',
      isComplete:false,
isChecked:false,
actionToBePerformed:'',
    },
  }
}
onSelectDropDown=(select,event)=>{
this.setState({
  dropDownTitle:select,
  actionToBePerformed:select
})
}
handleClose = () => {
  this.setState({ showModal: false });
}
handleAdd=(prop)=>{
  console.log("user     ",prop);
  let {toDoList}=this.state;
  toDoList.push(prop);
  this.setState({toDoList})
  this.setState({ showModal: false });
}
handleTitleChange=(event)=>{
    this.setState({ user : {
      Title: event.target.value,
      isComplete: false,
      isChecked:false
    }
  }
);
}


handleRadioChange = (title,event) => {
  let {toDoList,titlevalue}=this.state;

toDoList[toDoList.indexOf(title)].isChecked=!toDoList[toDoList.indexOf(title)].isChecked
if (toDoList.indexOf(title).isChecked===true) {

titlevalue.push(title)

  this.pushKey.bind(this,titlevalue)
}
  this.setState({toDoList,titlevalue})
}


handleListDelete = (item,event) => {
  console.log(item);
  let { toDoList } = this.state;
  toDoList.splice(toDoList.indexOf(item),1);

  this.setState({
    toDoList
  })
}
PerformAction=()=>{
    let { toDoList,actionToBePerformed } = this.state;


      if (actionToBePerformed==='Delete') {
        console.log("toDoList.length   ",toDoList.length);
        for (var i = 0; i < toDoList.length; i++) {
                console.log(i,'   ',toDoList[i]);
        if(toDoList[i].Title===true){

          toDoList.splice(i,1);

        }
        }
      }else {
        for (var i = 0; i < toDoList.length; i++) {
        if(toDoList[i].isComplete===true){


        }
        }
      }
      this.setState({
        toDoList
      })

      if(is.empty(this.state.toDoList))
      {  this.setState({
          dropDownTitle:'Select',
          showModal:false,
          isMainChecked:false,
        })}

}
handleMainRadioChange=()=>{
  console.log("handleMainRadioChange");
    let { toDoList,isMainChecked } = this.state;
      for (var i = 0; i < toDoList.length; i++){
    toDoList[i].isChecked=!this.state.isMainChecked
  }
    this.setState({toDoList,
isMainChecked:!isMainChecked
    })
}
pushKey=(key)=>{
  console.log(key);
  let {keyValues}=this.state;
  keyValues.push(key);
  this.setState({keyValues})
}
render(){

  return(
<div>
  <Button bsStyle="success" onClick={()=>this.setState({showModal:true})}>Add</Button>

    <ListGroup>

    {!is.empty(this.state.toDoList) && <div className="checkBoxListClass1">
    <Checkbox className="checkBoxClass" checked={this.state.isMainChecked} onChange={this.handleMainRadioChange}></Checkbox>
      <DropdownButton title={this.state.dropDownTitle} id="dropdown" >
            <MenuItem eventKey="1" onSelect={this.onSelectDropDown.bind(this,'Delete')}>Delete</MenuItem>
            <MenuItem eventKey="2" onSelect={this.onSelectDropDown.bind(this,'Complete')}>Complete</MenuItem>
          </DropdownButton>
          <Button style={{marginLeft:"3rem"}} onClick={this.PerformAction}>Perform Action</Button>
      </div>
    }
        {this.state.toDoList.map((items,key)=><ListGroupItem key={key} className="checkBoxListClass" disable='true'>
        <Checkbox className="checkBoxClass" checked={items.isChecked} onChange={this.handleRadioChange.bind(this,items.Title)}>{items.Title}</Checkbox>

        <div className="iconDiv">
        <Glyphicon glyph="glyphicon glyphicon-ok" className="iconsClass" style={{color:"#00ff00"}}/>
        <Glyphicon glyph="glyphicon glyphicon-remove" className="iconsClass" onClick={this.handleListDelete.bind(this,items)}/>
        </div>
        </ListGroupItem> )}

    </ListGroup>
    {is.empty(this.state.toDoList) && <div>No Data Found</div>}
    <Modal show={this.state.showModal} onHide={this.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form horizontal onSubmit={this.handleAdd}>

        <Col sm={10}>
          <FormControl type="text" placeholder="Title" onChange={this.handleTitleChange} />
        </Col>


        </Form>
      </Modal.Body>
      <Modal.Footer>
      <div style={{height:'10rem'}}>
        <Button bsStyle="success" onClick={this.handleAdd.bind(this,this.state.user)}>Add</Button>
        <Button onClick={this.handleClose}>Close</Button>
        </div>
      </Modal.Footer>
    </Modal>
</div>
  )
}
}

export default ToDoList ;
