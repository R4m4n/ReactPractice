import React, { Component } from 'react';
import '../App.css';
import {Bootstrap, Grid, Row, Col,Alert,
        DropdownButton,
        MenuItem,
        InputGroup,
        FormGroup,
        FormControl,
        Dropdown
                        } from 'react-bootstrap';


const DropDownCheck = (props) => {

console.log(props.dropList);
 const onClickAction=(prop)=>{
console.log("Changed");

}
const onChangeFilter = (key, index, e) => {


  if(index === false)
  props.dropList[key]['selected'] = e.target.checked;
  else
   props.dropList[index]['filters'][key]['selected'] = e.target.checked;

props.propFunction();

}


return(
  <div>
  {props.dropList.map((item, key) => {

    return(
      <Dropdown id="dropdown-custom-1" key={key}>
      <Dropdown.Toggle >

        <input type="checkbox" aria-label="label1" value="Label1" checked={item.selected} onChange={props.propFunction.bind(this,key , false)}/>   {item.title}

      </Dropdown.Toggle>
          <Dropdown.Menu className="super-colors">
            {item.filters.map((filter, index)=><div key={index}><input type="checkbox" aria-label="..." checked={filter.selected} onChange={props.propFunction.bind(this,index,key)} className="checkboxClass" Name="label" />{filter.title}</div>)}
          </Dropdown.Menu>
      </Dropdown>
    )
  })}
</div>
)

}


export default DropDownCheck;
