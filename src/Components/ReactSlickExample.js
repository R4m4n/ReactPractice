import React, { Component } from 'react';
import '../App.css';
import {Bootstrap, Grid, Row, Col,Alert} from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

const ReactSlickExample = (props) => {
const  afterchange = (index) => {
console.log(index, "After Change");
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed:1500,
        accessibility:true,
pauseOnHover:true,
rtl:true,
  };
  var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    accessibility:false,
    adaptiveHeight:true,
    arrows:true,
    focusOnSelect:true,
rows:4,
  };
  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: afterchange,
    fade:true,
    vertical:true,
    verticalSwiping:true,

  };
  var settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: afterchange,
    
  };
  var settings4 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: afterchange,
slickGoTo:4,
  };
return (
  <div className="sliderdiv">
  <Slider {...settings} className="sliderclass">
       <div className="sliderinsidediv"><h3>1</h3></div>
       <div className="sliderinsidediv"><h3>2</h3></div>
       <div className="sliderinsidediv"><h3>3</h3></div>
       <div className="sliderinsidediv"><h3>4</h3></div>
       <div className="sliderinsidediv"><h3>5</h3></div>
       <div className="sliderinsidediv"><h3>6</h3></div>
     </Slider>
  <Slider {...settings1} className="sliderclass1">
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
    <Slider {...settings2} className="sliderclass2">
             <div><h3>1</h3></div>
             <div><h3>2</h3></div>
             <div><h3>3</h3></div>
             <div><h3>4</h3></div>
             <div><h3>5</h3></div>
             <div><h3>6</h3></div>
        </Slider>
          <Slider ref={c => this.slider = c } {...settings3} className="sliderclass3">
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
                <div><h3>5</h3></div>
                <div><h3>6</h3></div>
              </Slider>
              {  // <Slider {...settings4} className="sliderclass4">
                //    <div><h3>1</h3></div>
                //    <div><h3>2</h3></div>
                //    <div><h3>3</h3></div>
                //    <div><h3>4</h3></div>
                //    <div><h3>5</h3></div>
                //    <div><h3>6</h3></div>
                //  </Slider>
}
     </div>
)
}


export default ReactSlickExample;
