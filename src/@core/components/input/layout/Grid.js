import React from 'react';
import { Col, Row } from 'antd';

const row = {
    padding: "10px"
}

const purple1 = { background:"#7367f0", 
color:"white", 
padding:"20px",
fontSize: "1rem",
fontFamily:"Montserrat, Helvetica, Arial, Serif",
fontWeight:"500",

};

const purple2 = { background:"#5c52c0", 
color:"white", 
padding:"20px",
fontSize: "1rem",
fontFamily:"Montserrat, Helvetica, Arial, Serif",
fontWeight:"500",

};

function Grid(){
    
    return(
  <>
    <Row style={row}>
      <Col span={24} style={purple1}>col</Col>
    </Row>
    <Row style={row}>
      <Col span={12} style={purple1}>col-12</Col>
      <Col span={12} style={purple2}>col-12</Col>
    </Row>
    <Row style={row}>
      <Col span={8} style={purple1}>col-8</Col>
      <Col span={8} style={purple2}>col-8</Col>
      <Col span={8} style={purple1}>col-8</Col>
    </Row>
    <Row style={row}>
      <Col span={6} style={purple1}>col-6</Col>
      <Col span={6} style={purple2}>col-6</Col>
      <Col span={6} style={purple1}>col-6</Col>
      <Col span={6} style={purple2}>col-6</Col>
    </Row>
  </>
);
}

export default Grid;