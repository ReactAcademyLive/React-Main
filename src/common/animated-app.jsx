import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import './custom.scss';
import Menu from './Menu';
import Footer from './Footer';
import Home from '../home';
import Covid from '../covid';
import WithRef from '../context/RefSample';
import ClassesCounter from '../counter/classes/counter';
import HooksCounterV1 from '../counter/hooks/counter-v1';
import HooksCounterV2 from '../counter/hooks/counter-v2';
import HooksCounterV3 from '../counter/hooks/counter-v3';
import ContactsHooks from '../contacts/Contacts-hooks';
import ContactsClass from '../contacts/Contacts-class';
import ContactDetails from '../contacts/contact-details/contact-details-hooks';
import NotFound from '../404';
import TodosClassic from '../todos/state/todos';
import TodosContextHooks from '../todos/context-use-reducer/todos';
import ReduxClassic from '../todos/redux/classic/connect/todos';
import ReduxHooks from '../todos/redux/classic/hooks/todos';
import ToolkitClassic from '../todos/redux/toolkit/connect/todos';
import ToolkitHooks from '../todos/redux/toolkit/hooks/todos';
import Reddits from '../reddit';
import Clock from '../clock';
import Step1 from '../best/steps/Step1';
import Step2 from '../best/steps/Step2';
import Step3 from '../best/steps/Step3';
import Step4 from '../best/steps/Step4';
import Step5 from '../best/steps/Step5';
import ContextDrill from '../context/PropDrilling/L1-SimpleState';
import ContextWith from '../context/WithContext/L1-SimpleContext';
import About from '../about';
//const About = React.lazy(() => import('./about'));

function Content() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      style={{
        ...props,
        position: 'absolute',
        width: '100%',
        paddingBottom: '100px',
      }}
    >
      {/* <React.Suspense fallback={<h1>Loading...</h1>}   > */}
      <Switch location={item}>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route
          path='/counter/classes'
          render={() => <ClassesCounter init={5} />}
        />
        <Route
          path='/counter/hooks-v1'
          render={() => <HooksCounterV1 init={5} />}
        />
        <Route
          path='/counter/hooks-v2'
          render={() => <HooksCounterV2 init={5} />}
        />
        <Route
          path='/counter/hooks-v3'
          render={() => <HooksCounterV3 init={5} />}
        />
        <Route path='/context/reference' component={WithRef} />
        <Route path='/covid' component={Covid} />
        <Route path='/contacts/hooks' component={ContactsHooks} />
        <Route path='/contacts/class' component={ContactsClass} />
        <Route path='/contact/:id?' component={ContactDetails} />
        <Route path='/todos/ClassicState' component={TodosClassic} />
        <Route path='/todos/ContextHooks' component={TodosContextHooks} />
        <Route path='/todos/ReduxClassic' component={ReduxClassic} />
        <Route path='/todos/ReduxHooks' component={ReduxHooks} />
        <Route path='/todos/ToolkitClassic' component={ToolkitClassic} />
        <Route path='/todos/ToolkitHooks' component={ToolkitHooks} />
        <Route path='/reddits' component={Reddits} />
        <Route path='/clock' component={Clock} />
        <Route path='/context/PropDrill' component={ContextDrill} />
        <Route path='/context/WithContext' component={ContextWith} />
        <Route path='/best/step1' component={Step1} />
        <Route path='/best/step2' component={Step2} />
        <Route path='/best/step3' component={Step3} />
        <Route path='/best/step4' component={Step4} />
        <Route path='/best/step5' component={Step5} />
        <Route component={NotFound} />
      </Switch>
      {/* </React.Suspense> */}
    </animated.div>
  ));
}

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: '100vh',
          // display: 'flex',
          // flexDirection: 'column',
          overflowX: 'hidden',
        }}
      >
        <Menu />
        <Container className='position-relative '>
          <Content />
        </Container>
        <Footer className='bg-dark text-light py-3 fixed-bottom' />
      </div>
    </BrowserRouter>
  );
}
