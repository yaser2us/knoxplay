import React from 'react';
import { Anchor, Row, Col } from 'antd';

const { Link } = Anchor;

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



function Anchor1(){

return(
  <Row>
    <Col span={16}>
      <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.02)' }} />
      <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }} />
      <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }} />
    </Col>
    <Col span={8} style={purple1}>
      <Anchor style={purple1}>
        <Link href="#part-1" title="Part 1" /> 
        <Link href="#part-2" title="Part 2" />
        <Link href="#part-3" title="Part 3" />
      </Anchor>
    </Col>
  </Row>
);
}

export default Anchor1;