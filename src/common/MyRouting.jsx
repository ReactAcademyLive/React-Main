import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home';
import NotFound from '../404';
import ClassesCounter from '../counter/classes/counter';
import HooksCounterV1 from '../counter/hooks/counter-v1';
import HooksCounterV2 from '../counter/hooks/counter-v2';
import HooksCounterV3 from '../counter/hooks/counter-v3';
import Covid from '../data/covid';
import ContactsHooks from '../data/contacts/Contacts-hooks';
import ContactsClass from '../data/contacts/Contacts-class';
import ContactDetails from '../data/contacts/contact-details/ContactDetails-hooks';
import MapWithPins from '../data/maps/MapWithPins';
import ContextDrill from '../context/PropDrilling/L1-SimpleState';
import ContextContainment from '../context/Containment/L1-SimpleContainment';
import ContextWith from '../context/ContextSample/L1-SimpleContext';
import WithRef from '../context/RefSample';
import Step1 from '../best/steps/Step1';
import Step2 from '../best/steps/Step2';
import Step3 from '../best/steps/Step3';
import Step4 from '../best/steps/Step4';
import Step5 from '../best/steps/Step5';
import Step6 from '../best/steps/Step6';
import TodosClassic from '../todos/state/todos';
import TodosContextHooks from '../todos/context-use-reducer/todos';
import ReduxClassic from '../todos/redux/classic/connect/todos';
import ReduxHooks from '../todos/redux/classic/hooks/todos';
import ToolkitClassic from '../todos/redux/toolkit/connect/todos';
import ToolkitHooks from '../todos/redux/toolkit/hooks/todos';
import Reddits from '../reddit';
import Clock from '../clock';
import SignUp from '../security/SignUp';
import SignIn from '../security/SignIn';
import Profile from '../security/Profile';
import PasswordReset from '../security/PasswordReset';
import SignOff from '../security/SignOff';

import About from '../about';
//const About = React.lazy(() => import('./about'));

export default function MyRouting({ location }) {
  return (
    <>
      {/* <React.Suspense fallback={<h1>Loading...</h1>}   > */}
      <Switch location={location}>
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
        <Route path='/data/covid' component={Covid} />
        <Route path='/data/hooks' component={ContactsHooks} />
        <Route path='/data/class' component={ContactsClass} />
        <Route path='/data/details/:id?' component={ContactDetails} />
        <Route path='/data/map' component={MapWithPins} />
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
        <Route path='/context/containment' component={ContextContainment} />
        <Route path='/context/reference' component={WithRef} />
        <Route path='/best/step1' component={Step1} />
        <Route path='/best/step2' component={Step2} />
        <Route path='/best/step3' component={Step3} />
        <Route path='/best/step4' component={Step4} />
        <Route path='/best/step5' component={Step5} />
        <Route path='/best/step6' component={Step6} />
        <Route path='/auth/signup' component={SignUp} />
        <Route path='/auth/signin' component={SignIn} />
        <Route path='/auth/profile' component={Profile} />
        <Route path='/auth/passwordreset' component={PasswordReset} />
        <Route path='/auth/signoff' component={SignOff} />

        <Route component={NotFound} />
      </Switch>
      {/* </React.Suspense> */}
    </>
  );
}
