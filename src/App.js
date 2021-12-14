// import logo from './logo.svg';
import React from "react";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullNames  from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import { Col, Row, Container } from "react-bootstrap";
import "./Style.css"

const App = () => (
 
      <header className="App-header" >
        
<Container style={{ textAlign: "center"}} >
     <Row>
     
    <Col>
   <ProfilePhoto />
   <FullNames />
   <Address />
   </Col>
   </Row>
   </Container>
 </header>
);
export default App;