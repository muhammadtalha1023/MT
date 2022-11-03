import { Container, Row } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaVimeoSquare } from "react-icons/fa";


function Paront()
{
    return(
      <div>
        <div class="row">
       <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" >Free Shipping over $100 & 60 days returns</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <FaFacebook size="25" fontStyle="italic" title="facebook"/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FaTwitter size="25" title="twitter"/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FaVimeoSquare size="25" title="vimeo"/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
      </div>
    )
}

export default Paront;