import BlueBox from './L2Left-BlueBox';
import GreyBoxes from './L2Right-GreyBoxes';
import { Row, Col } from 'react-bootstrap';
import { PersonProvider } from './PersonContext';

export default function SimpleContext() {
  return (
    <PersonProvider>
      <Content />
    </PersonProvider>
  );
}

//The following would prevent the content from re-rendering
//when the props are the same (hint: here they are always the same)
//let MemoContent = memo(Content);

function Content() {
  //console.log('Rendering Content');
  return (
    <Row>
      <Col md='6'>
        <BlueBox />
      </Col>
      <Col md='6'>
        <GreyBoxes />
      </Col>
    </Row>
  );
}
