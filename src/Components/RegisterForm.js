import React, { Component } from 'react';
import Validate from "react-validate-form";
import Tabs from './Tabs';
import { confirmAlert } from 'react-confirm-alert';
import Grids from './grids';
import BootstrapComponents from './BootstrapComponents';
import {Bootstrap, Grid, Row, Col,Alert,Badge,Breadcrumb,ButtonGroup,ButtonToolbar} from 'react-bootstrap';
import {DropdownButton,MenuItem,Carousel,Modal,Form,FormGroup,FormControl,Checkbox,HelpBlock,ControlLabel} from 'react-bootstrap';
import is from 'is_js';
import Ripples from 'react-ripples';
import {Button, Icon} from 'react-materialize';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <FormControl {...props} />

      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


class RegisterForm extends Component {
  constructor(props){
    super(props)
      this.state={
        user: {
          FirstName:'',
          LastName:'',
          Email:'',
          Password:'',
        CPassword:'',
        },
        match:false,
        validate:{
        Password:true,
        CPassword:true,
        FirstName:true,
        LastName:true,
        Email:true,
        isHiddenEC:true,
        isHiddenCCP:true
      }
    }

  }

  handleChange = (key, event) => {

    let {user} = this.state;
    user[key] = event.target.value;


      this.setState({ user });
      let {validate} = this.state;

      if (!is.empty(user['FirstName']))
          validate['FirstName']=true;
      if (!is.empty(user['LastName']))
          validate['LastName']=true;
      if (!is.empty(user['Email']))
          validate['Email']=true;

      if (!is.empty(user['Password']))
          validate['Password']=true;
      if (!is.empty(user['CPassword'])){
          validate['CPassword']=true;
        }else {
          if (user['Password']===user['CPassword']) {
                    validate['isHiddenCCP']=true;
          }else {
            console.log("Password Didn't match");
        validate['isHiddenCCP']=true;
          }
        }
            this.setState({ validate });
  }
submitOnClick=()=>{
  console.log("Submit--->>>     ");
  let {user} = this.state;
    let {validate} = this.state;

    if (is.empty(user['FirstName']))
        validate['FirstName']=false;
    if (is.empty(user['LastName']))
        validate['LastName']=false;
    if (is.empty(user['Email'])){
        validate['Email']=false;
      }else {
        if (!is.email(user['Email'])) {
          validate['isHiddenEC']=false;
        }else {
          validate['isHiddenEC']=true;
        }
      }
    if (is.empty(user['Password']))
        validate['Password']=false;
    if (is.empty(user['CPassword'])){
        validate['CPassword']=false;
      }else {
        if (user['Password']===user['CPassword']) {
              validate['isHiddenCCP']=true;
        }else {
          console.log("Password Didn't match");
      validate['isHiddenCCP']=false;
        }
      }


          this.setState({ validate });
}

render(){

  var Errormessage = ({message}) => (
    <div className="Invalidity">{message}</div>
  );
  return(
    <div className="formClass">
    <Col xs={4} md={2} >
    <div className="formBack">
    <b>Login via site</b>
    </div>
    <form className="formBacka">

    		<FieldGroup
    			id="formControlsTextF"
    			type="text"
          className="formGroups"
    			placeholder="First Name"
          onChange={this.handleChange.bind(this, 'FirstName')}
    		/>

        {!this.state.validate['FirstName'] &&   <Errormessage message="First Name cannot be empty"/>}
        <FieldGroup
          id="formControlsTextL"
          type="text"
          className="formGroups"
          placeholder="Last Name"
            onChange={this.handleChange.bind(this, 'LastName')}
        />
              {!this.state.validate['LastName'] &&   <Errormessage message="Last Name cannot be empty"/>}
    		<FieldGroup
    			id="formControlsEmail"
    			type="email"
          className="formGroups"
    			placeholder="Enter email"
            onChange={this.handleChange.bind(this, 'Email')}
    		/>
        {!this.state.validate['Email'] &&   <Errormessage message="Email cannot be empty"/>}
        {!this.state.validate['isHiddenEC'] &&   <Errormessage message="Please enter the proper Email Address"/>}
    		<FieldGroup id="formControlsPassword" label="Password" type="Password" placeholder="Password" className="formGroups" onChange={this.handleChange.bind(this, 'Password')}/>
        {!this.state.validate['Password'] &&   <Errormessage message="Password cannot be empty"/>}
        <FieldGroup id="formControlsCPassword" label="Confirm Password" type="Password" placeholder="Confirm Password" className="formGroups" onChange={this.handleChange.bind(this, 'CPassword')}/>
        {!this.state.validate['CPassword'] &&   <Errormessage message="Confirm Password cannot be empty" />}
        {!this.state.validate['isHiddenCCP'] &&   <Errormessage message="Password do not match"/>}
        <Ripples className="submitButton">  <div className="submitButton" onClick={this.submitOnClick}>Submit</div></Ripples>




    </form>

</Col>
</div>
  )
}
}

export default RegisterForm;
