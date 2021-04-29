import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home';
import NotFound from '../404';
import Lifecycle from '../basics/lifecycle';
import ClassesCounter from '../counter/classes/counter';
import HooksCounterV1 from '../counter/hooks/counter-v1';
import HooksCounterV2 from '../counter/hooks/counter-v2';
import HooksCounterV3 from '../counter/hooks/counter-v3';
import HooksCounterV4 from '../counter/hooks/counter-v4';
import HooksCounterV5 from '../counter/hooks/counter-v5';
import Covid from '../data/covid';
import ContactsHooks from '../data/contacts/contact-list/Contacts-hooks';
import ContactsClass from '../data/contacts/contact-list/Contacts-class';
import ContactDetails from '../data/contacts/contact-details/ContactDetails-hooks';
import MapWithPins from '../data/maps/MapWithPins';
import ElectionResult from '../data/election/ElectionResult';
import ContextDrill from '../context/PropDrilling/L1-SimpleState';
import ContextContainment from '../context/Containment/L1-SimpleContainment';
import ContextWith from '../context/ContextSample/L1-SimpleContext';
import WithRef from '../basics/RefSample';
import Step1 from '../best/hooks/Step1';
import Step2 from '../best/hooks/Step2';
import Step3 from '../best/hooks/Step3';
import Step4 from '../best/hooks/Step4';
import Step5 from '../best/hooks/Step5';
import Step6 from '../best/hooks/Step6';
import TodosClassic from '../todos/classic-state/TodosContainer';
import TodosContextHooks from '../todos/context-use-reducer/TodosContainer';
import TodosReduxClassic from '../todos/older-ways/redux/classic/connect/todos';
import TodosReduxHooks from '../todos/older-ways/redux/classic/hooks/todos';
import TodosToolkitClassic from '../todos/older-ways/toolkit/connect/todos';
import ToolkitHooks from '../todos/redux-toolkit/TodosContainer';
import RedditToolkit from '../reddit/toolkit/fetch';
import RedditThunk from '../reddit/toolkit/fetch';
import RedditClassicFetch from '../reddit/classic/fetch';
import RedditClassicThunk from '../reddit/classic/thunk';
import Clock from '../perf/Clock';
import SignUp from '../security/SignUp';
import SignIn from '../security/SignIn';
import Profile from '../security/Profile';
import PasswordReset from '../security/PasswordReset';
import SignOff from '../security/SignOff';

import About from '../basics/list';
//const About = React.lazy(() => import('./about'));

export default function MyRouting({ location }) {
  return (
    <>
      {/* <React.Suspense fallback={<h1>Loading...</h1>}   > */}
      <Switch location={location}>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/lifecycle' component={Lifecycle} />
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
        <Route
          path='/counter/hooks-v4'
          render={() => <HooksCounterV4 init={5} />}
        />
        <Route
          path='/counter/hooks-v5'
          render={() => <HooksCounterV5 init={5} />}
        />
        <Route path='/data/covid' component={Covid} />
        <Route path='/data/hooks' component={ContactsHooks} />
        <Route path='/data/class' component={ContactsClass} />
        <Route path='/data/details/:id?' component={ContactDetails} />
        <Route path='/data/map' component={MapWithPins} />
        <Route path='/data/election' component={ElectionResult} />
        <Route path='/todos/ClassicState' component={TodosClassic} />
        <Route path='/todos/ContextHooks' component={TodosContextHooks} />
        <Route path='/todos/ReduxClassic' component={TodosReduxClassic} />
        <Route path='/todos/ReduxHooks' component={TodosReduxHooks} />
        <Route path='/todos/ToolkitClassic' component={TodosToolkitClassic} />
        <Route path='/todos/ToolkitHooks' component={ToolkitHooks} />
        <Route path='/reddit/toolkitFetch' component={RedditToolkit} />
        <Route path='/reddit/toolkitThunk' component={RedditThunk} />
        <Route path='/reddit/classicFetch' component={RedditClassicFetch} />
        <Route
          path='/reddit/classicThunk'
          component={RedditClassicThunk}
        />{' '}
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
