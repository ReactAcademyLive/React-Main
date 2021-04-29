import React from 'react';
import { Col, Container, Row, Alert } from 'reactstrap';
import RegionDetails from './RegionDetails';
import RegionList from './RegionList';

export default function TwoColumns() {
  return (
    <Container className='mt-5'>
      <Row>
        <Col md>
          <Alert color='danger'>
            <RegionList />
          </Alert>
        </Col>
        <Col md>
          <Alert color='primary'>
            <RegionDetails />
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}
