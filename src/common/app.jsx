import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './custom.scss';
import Menu from './menu';
import Footer from './footer';
import Home from '../home/home';
import ClassesCounter from '../counter/classes/counter';
import HooksCounterV1 from '../counter/hooks/counter-v1';
import HooksCounterV2 from '../counter/hooks/counter-v2';
import HooksCounterV3 from '../counter/hooks/counter-v3';
import ContactsHooks from '../contacts/contacts-hooks';
import ContactsClass from '../contacts/contacts-class';
import ContactDetails from '../contacts/contact-details/contact-details-hooks';
import NotFound from '../404/404';
import TodosClassic from '../todos/state/todos';
import TodosContextHooks from '../todos/context-use-reducer/todos';
import ReduxClassic from '../todos/redux/classic/connect/todos';
import ReduxHooks from '../todos/redux/classic/hooks/todos';
import ToolkitClassic from '../todos/redux/toolkit/connect/todos';
import ToolkitHooks from '../todos/redux/toolkit/hooks/todos';
import Covid from '../covid/Covid';
import WithRef from '../context/WithRef/WithRef';
import Step1 from '../best/steps/DisplayMouse1';
import Step2 from '../best/steps/DisplayMouse2';
import Step3 from '../best/steps/DisplayMouse3';
import Step4 from '../best/steps/DisplayMouse4';
import Step5 from '../best/steps/DisplayMouse5';
import Reddits from '../reddit/reddits';
import Clock from '../clock/clock';
import ContextDrill from '../context/PropDrilling/L1-SimpleState';
import ContextWith from '../context/WithContext/L1-SimpleContext';
import About from '../about/about';

//const About = React.lazy(() => import('../about/about'));

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Menu />
          <Container className='mb-5'>
            {/* <React.Suspense fallback={<h1>Loading...</h1>}> */}
            <Switch>
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
              <Route exact path='/contact' component={ContactDetails} />
              <Route path='/contact/:id' component={ContactDetails} />
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
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
