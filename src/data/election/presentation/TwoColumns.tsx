import { Col, Container, Row, Alert } from 'react-bootstrap';
import RegionDetails from './RegionDetails';
import RegionList from './RegionList';

export default function TwoColumns() {
  return (
    <Container className='mt-5'>
      <Row>
        <Col md>
          <Alert variant='danger'>
            <RegionList />
          </Alert>
        </Col>
        <Col md>
          <Alert variant='primary'>
            <RegionDetails />
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}
