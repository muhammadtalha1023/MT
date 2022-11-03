import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Nav.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from "react-icons/fa";
import { Placeholder } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';


function AutoLayoutExample() {
  return (
    <Container>
      <div className='fluid-container'>
      <Row>
        <Col xs={2}>
        <Image 
        src='https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/retina-bethemestore.png' width={140} height={30}/>
        </Col>
        <Col xs={8}>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
        <Form.Control
          placeholder="Enter Your Search"
          aria-label="Enter Your Search"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
        </Col>
        <Col xs={2}>
        <FaUserAlt />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FaRegHeart />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FaLock />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Col>
      </Row>
      </div>
      <Row>
        <Col>1 of 3</Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;