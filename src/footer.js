import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from 'react-router-dom';
import './CSS/footer.css'

const Footer = () => {
  return (
    <div className="wrapper">
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
            <MDBCol md="8">
            <h5 className="title">Links</h5>
            <ul>
              
              <Link id='option' to='/faq'><li>FAQ</li></Link>
              <br/>
              <br/>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    </MDBFooter>
    </div>
  );
}

export default Footer;