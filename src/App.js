import React, { Component } from 'react';
import './App.css';
import Tabs from './Components/Tabs';
import { confirmAlert } from 'react-confirm-alert';
import Grids from './Components/grids';
import BootstrapComponents from './Components/BootstrapComponents';
// import ReactSlickExample from './Components/ReactSlickExample';
import {Bootstrap, Grid, Row, Col,Alert,
  Badge,
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  PageHeader,
  Dropdown,
  DropdownButton
  } from 'react-bootstrap';
import Modalecomp from './Components/Modalecomp';
import DropDownCheck from './Components/DropDownCheck';
import FetchApis from './Components/FetchApis';
import TreeComponent from './Components/TreeComponent';
import RegisterForm from './Components/RegisterForm';
import ToDoList from './Components/ToDoList';
import TableScreen from './Components/TableScreen';


class App extends Component {
  constructor(props) {
   super(props);


     this.state = {bgcolor: "#ff5577",
     showModal: false,
     user: {},
     list:[
       {

         name:"tester1",
         designation:"PHP developer",
         company:"tecHindustan",
         address:"H/No.5653",
         city:"Mohali",
         state:"Punjab",
         country:"India"
       },
       {

         name:"tester2",
         designation:"Android developer",
         company:"tecHindustan",
         address:"H/No.7553",
         city:"Mohali",
         state:"Punjab",
         country:"India"
       },
       {

         name:"tester3",
         designation:"iOS developer",
         company:"tecHindustan",
         address:"H/No.8636",
         city:"Mohali",
         state:"Punjab",
         country:"India"
       },
       {

         name:"tester4",
         designation:"React developer",
         company:"tecHindustan",
         address:"H/No.7589",
         city:"Mohali",
         state:"Punjab",
         country:"India"
       },
       {

         name:"tester5",
         designation:"Game developer",
         company:"tecHindustan",
         address:"H/No.9453",
         city:"Mohali",
         state:"Punjab",
         country:"India"
       },
     ],

checkList:[
    {
      title: 'Colors',
      selected: false,
      filters: [
        {
          title: 'Red',
          selected: false
        },
        {
          title: 'Green',
          selected: false
        },
        {
          title: 'Blue',
          selected: false
        }
      ]
    },
    {
      title: 'Size',
      selected: false,
      filters: [
        {
          title: 'S',
          selected: false
        },
        {
          title: 'M',
          selected: false
        },
        {
          title: 'L',
          selected: false
        },
        {
          title: 'XL',
          selected: false
        },
        {
          title: 'XXL',
          selected: false
        }
      ]
    }
  ]

   };





      const Tabcomponent = ({bgcolor}) => (
        <div className="App">
      <div className="contentdiv" style={{backgroundColor:bgcolor}}>

      </div>
        </div>
      );

 }

 onChangeFilter = (key, index, e) => {

   let {checkList} = this.state;
   if(index === false)
    checkList[key]['selected'] = e.target.checked;
   else
    checkList[index]['filters'][key]['selected'] = e.target.checked;

    this.setState({ checkList });

 }

 handleClose = () => {
   this.setState({ showModal: false });
 }


 listItem = (item) => {
   let html = '';
   return html += ' Name: '+item.name+'\n Designation: '+item.designation
   +'\n Company: '+item.company+'\n Address: '+item.address+'\n City: '+item.city
   +'\n State: '+item.state+'\n Country: '+item.country
 }

  handleClick = (prop) => {
    console.log(prop);
    if (prop==="tab1") {
         this.setState ({bgcolor: "#ff5577",cdata:"Tab1 Component"});
    }else{
        this.setState({bgcolor: "#ffcc44",cdata:"Tab2 Component"} );
    }}


  listonClick = (prop) => {
    this.setState({ showModal: true, user: prop });
  }

  onChangeListener = (prop) => {
console.log("changing");
  }
  addToList = (prop) => {

    let {list} = this.state;
    list.push(prop);
  console.log(list)
    this.setState({ list })
  }

  deleteAction=(prop)=>{
    console.log(prop);
    let { list } = this.state;
    list.splice(this.state.list.indexOf(prop),1);

    this.setState({
      list
    })
    }


  render() {




const dropDownList = this.state.checkList.map((d, key) => <div key={key}><DropDownCheck dropList={d.Select1}/></div>)


  const listItems = this.state.list.map((d, key) => <div key={key} className="listgroup">

  <ListGroup>
	<ListGroupItem bsStyle="success"  className="Name">{d.name}</ListGroupItem>
	<ListGroupItem bsStyle="info">{d.designation}</ListGroupItem>

</ListGroup>
<Button className="buttons" bsStyle="info" onClick={this.listonClick.bind(this,d)}>Info</Button>
<Button bsStyle="danger" onClick={this.deleteAction.bind(this,d)}>Delete</Button>

      </div>);
    return (
      <div className="App">
      {/*  <div className="tabs">
          <div className="tabbt1" onClick={this.handleClick.bind(this, "tab1")}>
            Tab1
          </div>
          <div className="tabbt2" onClick={this.handleClick.bind(this, "tab2")}>
            Tab2
          </div>
        </div>
      <Tabs bgcolor={this.state.bgcolor} cdata={this.state.cdata}/>

<Grids />
<BootstrapComponents />
<Modalecomp listvalue={this.state.list} addToList={this.addToList}/>
{listItems}*/}



{/*this.state.checkList.map((item, key) => {
  return(
    <Dropdown id="dropdown-custom-1" key={key}>
    <Dropdown.Toggle>

      <input type="checkbox" aria-label="label1" value="Label1" checked={item.selected} onChange={this.onChangeFilter.bind(this, key, false)}/>   {item.title}

    </Dropdown.Toggle>
        <Dropdown.Menu className="super-colors">
          {item.filters.map((filter, index)=><div key={index}><input type="checkbox" aria-label="..." checked={filter.selected} onChange={this.onChangeFilter.bind(this, index, key)} className="checkboxClass" Name="label" />{filter.title}</div>)}
        </Dropdown.Menu>
    </Dropdown>
  )
})<DropDownCheck dropList={this.state.checkList} propFunction={this.onChangeFilter}/>

<FetchApis />

<TreeComponent />
<RegisterForm />
<ToDoList />*/}
<TableScreen />
{/*Modal definition*/}
<Modal show={this.state.showModal} onHide={this.handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>{this.state.user.name}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <ListGroup>
	<ListGroupItem >{this.state.user.designation}</ListGroupItem>
	<ListGroupItem>
		{this.state.user.company}
	</ListGroupItem>
  <ListGroupItem>
		{this.state.user.address}
	</ListGroupItem>
  <ListGroupItem>
		{this.state.user.city}
	</ListGroupItem>
  <ListGroupItem>
    {this.state.user.country}
  </ListGroupItem>
</ListGroup>
  </Modal.Body>
  <Modal.Footer>
    <Button onClick={this.handleClose}>Close</Button>
  </Modal.Footer>
</Modal>

      </div>
    );
  }
}

export default App;
