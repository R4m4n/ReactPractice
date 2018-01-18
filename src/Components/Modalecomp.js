import React, { Component } from 'react';

import Tabs from './Tabs';
import { confirmAlert } from 'react-confirm-alert';
import Grids from './grids';
import BootstrapComponents from './BootstrapComponents';
import {Bootstrap, Grid, Row, Col,Alert,Badge,Breadcrumb,Button,ButtonGroup,ButtonToolbar} from 'react-bootstrap';
import {DropdownButton,MenuItem,Carousel,Modal,OverlayTrigger,Form,FormGroup,FormControl,Checkbox} from 'react-bootstrap';

class Modalecomp extends Component {
  constructor(props) {
  		super(props);

  		this.handleShow = this.handleShow.bind(this);
  		this.handleClose = this.handleClose.bind(this);

  		this.state = { showModal: false ,
                      user: {
                        name:'',
                        designation:'',
                        company:'',
                        address:'',
                        city:'',
                        country:''
                      },
                      isHidden: true
                  };
                  const Warning = () => (
                <div className="warningDiv">All Fields are not filled</div>
                  )
  	}

  	handleClose() {
  		this.setState({ showModal: false });
  	}

  	handleShow() {
  		this.setState({ showModal: true });
  	}
    handleChange = (key, event) => {
      let {user} = this.state;
      user[key] = event.target.value;

      this.setState({ user });
    }
    toggleHidden =()=> {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  handleAdd = (e) => {
    e.preventDefault();
  let {user} = this.state;
  if(user.name===''||user.designation===''||user.company===''||user.city===''||user.country===''||user.address==='')
  {
    console.log("Empty");
    this.setState({
      isHidden: !this.state.isHidden
    })
  }else {


  this.setState({ showModal: false });
  this.props.addToList(user);
  
}
}
  	render() {

  		return (
  			<div>

<Button bsStyle="success" onClick={this.handleShow}>Add User</Button>

  				<Modal show={this.state.showModal} onHide={this.handleClose}>
  					<Modal.Header closeButton>
  						<Modal.Title>Enter the user details below</Modal.Title>
  					</Modal.Header>
  					<Modal.Body>
            <Form horizontal onSubmit={this.handleAdd}>

              <Col sm={10}>
                <FormControl type="text" placeholder="Name" onChange={this.handleChange.bind(this, 'name')} />
              </Col>



              <Col sm={10}>
                <FormControl type="text" placeholder="Designation" onChange={this.handleChange.bind(this, 'designation')}/>
              </Col>


            <Col sm={10}>
              <FormControl type="text" placeholder="Company" onChange={this.handleChange.bind(this, 'company')}/>
            </Col>

          <Col sm={10}>
            <FormControl type="text" placeholder="Address" onChange={this.handleChange.bind(this, 'address')}/>
          </Col>

        <Col sm={10}>
          <FormControl type="text" placeholder="City" onChange={this.handleChange.bind(this, 'city')}/>
        </Col>

      <Col sm={10}>
        <FormControl type="text" placeholder="Country" onChange={this.handleChange.bind(this, 'country')}/>
      </Col>



            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button bsStyle="success" type="submit">Add</Button>
              </Col>
            </FormGroup>
            </Form>
            {!this.state.isHidden && <Warning />}

  					</Modal.Body>
  					<Modal.Footer>
  						<Button onClick={this.handleClose}>Close</Button>
  					</Modal.Footer>
  				</Modal>
  			</div>
  		);
  	}

}

export default Modalecomp;
