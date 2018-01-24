import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import Tabs from './Tabs';
import { confirmAlert } from 'react-confirm-alert';
import Grids from './grids';
import BootstrapComponents from './BootstrapComponents';
import {Bootstrap, Grid, Row, Col,Alert,Badge,Breadcrumb,ButtonGroup,ButtonToolbar,Glyphicon} from 'react-bootstrap';
import {DropdownButton,MenuItem,Carousel,Modal,OverlayTrigger,Form,FormGroup,FormControl,Checkbox,ListGroup,ListGroupItem} from 'react-bootstrap';
import is from 'is_js';
import Button from 'material-ui/Button';


class ToDoList extends Component {
constructor(props){
  super(props);
  this.state={
    toDoList:[],
    dropDownTitle:'Select',
    showModal:false,
    isMainChecked:false,
    isActionSelected:false,
  actionToBePerformed:'',
    user: {
      Title:'',
      isComplete:false,
isChecked:false,

  backColor:"#ffffff",
    },
  }
}


onSelectDropDown=(select,event)=>{
this.setState({
  dropDownTitle:select,
  actionToBePerformed:select,
  isActionSelected:true,
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
      isChecked:false,
      backColor:"#ffffff",
    }
  }
);
}
handleRadioChange = (key,event) => {
  let {toDoList}=this.state;

toDoList[key].isChecked=!toDoList[key].isChecked

  this.setState({toDoList})
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
        for (var i = (toDoList.length-1); i >= 0; i--) {

        if(toDoList[i].isChecked===true){

          toDoList.splice(i,1);

        }
        }
      }else {if (actionToBePerformed==='Complete') {

        for (var i = toDoList.length-1; i >=0 ; i--) {

        if(toDoList[i].isChecked===true){
                console.log('Complete   ',i);
          toDoList[i].backColor="#c0c0c0";
              toDoList[i].isComplete=true;
          this.setState({
            toDoList
          })

        }
        }
      }}
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
handleListComplete=(key,event)=>{

  let { toDoList } = this.state;
  toDoList[key].backColor="#c0c0c0"

  this.setState({
    toDoList
  })
}
render(){
  const actions = [
       <Button raised
         label="Cancel"
         primary={true}
         onClick={this.handleClose}
       />,
       <Button raised
         label="Submit"
         primary={true}
         keyboardFocused={true}
         onClick={this.handleClose}
       />,
     ];
  return(
<div>
  <Button raised primary={true} onClick={()=>this.setState({showModal:true})}>Add</Button>

    <ListGroup>

    {!is.empty(this.state.toDoList) && <div className="checkBoxListClass1">
    <Checkbox className="checkBoxClass" checked={this.state.isMainChecked} onChange={this.handleMainRadioChange}></Checkbox>
      <DropdownButton title={this.state.dropDownTitle} id="dropdown" >
            <MenuItem eventKey="1" onSelect={this.onSelectDropDown.bind(this,'Delete')}>Delete</MenuItem>
            <MenuItem eventKey="2" onSelect={this.onSelectDropDown.bind(this,'Complete')}>Complete</MenuItem>
          </DropdownButton>
        {this.state.isActionSelected &&  <Button style={{marginLeft:"3rem"}} onClick={this.PerformAction}>Perform Action</Button>}
      </div>
    }
        {this.state.toDoList.map((items,key)=><ListGroupItem key={key} className="checkBoxListClass" disable='true' style={{backgroundColor:items.backColor}}>
        <Checkbox className="checkBoxClass" checked={items.isChecked} onChange={this.handleRadioChange.bind(this,key)} >{items.Title}</Checkbox>

        <div className="iconDiv">
        <Glyphicon glyph="glyphicon glyphicon-ok" className="iconsClass" style={{color:"#00ff00"}} onClick={this.handleListComplete.bind(this,key)}/>
        <Glyphicon glyph="glyphicon glyphicon-remove" className="iconsClass" onClick={this.handleListDelete.bind(this,items)}/>
        </div>
        </ListGroupItem> )}

    </ListGroup>
    {is.empty(this.state.toDoList) && <div>No Data Found</div>}
    <Dialog
        title="Dialog With Actions"
        actions={actions}
        modal={false}
        open={this.state.showModal}
        onRequestClose={this.handleClose}
      >
{  //  <Modal show={this.state.showModal} onHide={this.handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Add new task</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
}
      <Form horizontal onSubmit={this.handleAdd}>


          <FormControl type="text" placeholder="Title" onChange={this.handleTitleChange} />



        </Form>
 {    //  </Modal.Body>
//       <Modal.Footer>
//       <div style={{height:'10rem'}}>
//         <Button bsStyle="success" onClick={this.handleAdd.bind(this,this.state.user)}>Add</Button>
//         <Button onClick={this.handleClose}>Close</Button>
//         </div>
//       </Modal.Footer>
//     </Modal>
}
    </Dialog>
</div>
  )
}
}

export default ToDoList ;
