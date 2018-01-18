import React, { Component } from 'react';
import '../App.css';
import {Bootstrap, Grid, Row, Col,Alert} from 'react-bootstrap';


const Grids = (props) => {
  const dummySentences = [
	'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
	'Donec hendrerit tempor tellus.',
	'Donec pretium posuere tellus.',
	'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
	'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
	'Nulla posuere.',
	'Donec vitae dolor.',
	'Nullam tristique diam non turpis.',
	'Cras placerat accumsan nulla.',
	'Nullam rutrum.',
	'Nam vestibulum accumsan nisl.'
];

const gridInstance = (
	<Grid>
		<Row className="show-grid">
			<Col sm={6} md={6}>
				<code>&lt;{'Col sm={6} md={6}'} /&gt;</code>
				<br />
				{dummySentences.slice(0, 10).join('\n  ------')}
			</Col>
      <Col sm={6} md={3}>
    				<code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
    				<br />
    				{dummySentences.slice(0, 2).join(' ')}
    			</Col>
		</Row>
	</Grid>
);


    return (
      <div className="App">
{gridInstance}
      </div>
    );
}


export default Grids;
