import React, { Component } from 'react';
import '../App.css';
import {Bootstrap, Grid, Row, Col,Alert,Badge,Breadcrumb,Button,ButtonGroup,ButtonToolbar} from 'react-bootstrap';
import {DropdownButton,MenuItem,Carousel,Modal,OverlayTrigger} from 'react-bootstrap';
import Modalecomp from './Modalecomp';

const BootstrapComponents = (props) => {

    return (
      <div className="App">
      <Alert bsStyle="danger">
      	<strong>Holy guacamole!</strong> Best check yo self, youre not looking too
      	good.
      </Alert>
       		Badges <Badge>42</Badge>
          <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
	<Button bsStyle="danger">Danger</Button>

  <ButtonToolbar>
    <ButtonGroup bsSize="large">
    <Button bsStyle="danger">Danger</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  </ButtonToolbar>

  <ButtonToolbar>
    <ButtonGroup>
      <Button bsStyle="info">Danger</Button>
    <Button bsStyle="primary">Danger</Button>
      <Button>Right</Button>
    </ButtonGroup>
  </ButtonToolbar>

  <ButtonToolbar>
    <ButtonGroup bsSize="small">
    <Button bsStyle="primary">Danger</Button>
      <Button>Middle</Button>
  <Button bsStyle="success">Danger</Button>
    </ButtonGroup>
  </ButtonToolbar>

  <ButtonToolbar>
    <ButtonGroup bsSize="xsmall">
      <Button>Left</Button>
    <Button bsStyle="warning">Danger</Button>
      <Button>Right</Button>
    </ButtonGroup>
  </ButtonToolbar>
  <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
			<MenuItem eventKey="1">Dropdown link1</MenuItem>
			<MenuItem eventKey="2">Dropdown link2</MenuItem>
		</DropdownButton>
    <Carousel className="crousalclass">
  <Carousel.Item>

    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Modalecomp />
      </div>
    );
}


export default BootstrapComponents;
