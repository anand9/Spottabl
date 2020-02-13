import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  Container, 
  Row,
  Col
} from 'reactstrap'

const TeamHome = () => {
  return (
    <Fade left>
      <Container>
        <Row className="justify-content-center">
          <Col md="6" lg="6" xs="12" className="text-center">
            Team
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default TeamHome;