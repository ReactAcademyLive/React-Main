import { createBrowserRouter } from 'react-router-dom';

//import Root from './Animated-Root';
import Root from './Root';
import Home from '../home';
import NotFound from '../404';
import BasicList from '../basics/list';
import Lifecycle from '../basics/lifecycle';
import MyForm from '../basics/forms/ValidatedForm';
import Rendering from '../basics/rendering';
import ClassesCounter from '../counter/classes/counter';
import HooksCounterV1 from '../counter/hooks/counter-v1';
import HooksCounterV2 from '../counter/hooks/counter-v2';
import HooksCounterV3 from '../counter/hooks/counter-v3';
import Covid from '../data/covid';
import Videos from '../data/videos';
import ContactsRouterData, {
  action as contactsAction,
  loader as contactsLoader,
} from '../data/contacts/contact-list/Contacts-data-router';
import ContactsHooks from '../data/contacts/contact-list/Contacts-hooks';
import ContactsClass from '../data/contacts/contact-list/Contacts-class';
import ContactDetails from '../data/contacts/contact-details/ContactDetails-hooks';
import ContactDetailsData, {
  createLoader,
  detailsLoader,
  detailsAction,
} from '../data/contacts/contact-details/ContactDetails-data-router';
import ElectionResult from '../data/election/ElectionResult';
import ContextDrill from '../context/PropDrilling/L1-SimpleState';
import ContextContainment from '../context/Containment/L1-SimpleContainment';
import ContextWith from '../context/ContextSample/L1-SimpleContext';
import WithRef from '../basics/DomRefSample';
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
import RedditNoThunk from '../reddit/toolkit/no-thunk';
import RedditThunk from '../reddit/toolkit/thunk';
import RedditClassicNoThunk from '../reddit/classic/no-thunk';
import RedditClassicThunk from '../reddit/classic/thunk';
import Clock from '../perf/clock/Clock';
import SignUp from '../keycloak/SignUp';
import SignIn from '../keycloak/SignIn';
import PasswordReset from '../keycloak/PasswordReset';
// import Profile from '../keycloak/Profile';
import SignOff from '../keycloak/SignOff';
import ApiCalls from '../keycloak/ApiCalls';
import ManageAccount from '../keycloak/ManageAccount';
import Secret from '../keycloak/Secret';
import ProtectedRoute from './ProtectedRoute';
import TokenDetails from '../keycloak/TokenDetails';

// import MapWithPins from '../data/maps/MapWithPins';
//const MapWithPins = React.lazy(() => import('../data/maps/MapWithPins'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'hello',
        children: [
          { index: true, element: <Home /> },
          { path: ':name', element: <Home /> },
        ],
      },
      {
        path: 'basics',
        children: [
          { path: 'list', element: <BasicList /> },
          { path: 'lifecycle', element: <Lifecycle /> },
          { path: 'myform', element: <MyForm /> },
          { path: 'reference', element: <WithRef /> },
          { path: 'rendering', element: <Rendering /> },
        ],
      },
      {
        path: 'counter',
        children: [
          { path: 'classes', element: <ClassesCounter init={5} /> },
          { path: 'hooks-v1', element: <HooksCounterV1 init={5} /> },
          { path: 'hooks-v2', element: <HooksCounterV2 init={5} /> },
          { path: 'hooks-v3', element: <HooksCounterV3 init={5} /> },
        ],
      },
      {
        path: 'data',
        children: [
          { path: 'covid', element: <Covid /> },
          { path: 'videos', element: <Videos /> },
          {
            path: 'contacts-data-router',
            loader: contactsLoader,
            action: contactsAction,
            element: <ContactsRouterData />,
          },
          { path: 'contacts', element: <ContactsHooks /> },
          { path: 'contacts-classes', element: <ContactsClass /> },
          {
            path: 'details',
            children: [
              { index: true, element: <ContactDetails /> },
              { path: ':id', element: <ContactDetails /> },
            ],
          },
          {
            path: 'details-data-router',
            children: [
              {
                index: true,
                element: <ContactDetailsData />,
                loader: createLoader,
                action: detailsAction,
              },
              {
                path: ':id',
                element: <ContactDetailsData />,
                loader: detailsLoader,
                action: detailsAction,
              },
            ],
          },

          // { path: 'map', element: <MapWithPins /> },
          { path: 'election', element: <ElectionResult /> },
        ],
      },
      {
        path: 'todos',
        children: [
          { path: 'ClassicState', element: <TodosClassic /> },
          { path: 'ContextHooks', element: <TodosContextHooks /> },
          { path: 'ReduxClassic', element: <TodosReduxClassic /> },
          { path: 'ReduxHooks', element: <TodosReduxHooks /> },
          { path: 'ToolkitClassic', element: <TodosToolkitClassic /> },
          { path: 'ToolkitHooks', element: <ToolkitHooks /> },
        ],
      },
      {
        path: 'reddit',
        children: [
          { path: 'toolkitNoThunk', element: <RedditNoThunk /> },
          { path: 'toolkitThunk', element: <RedditThunk /> },
          { path: 'classicNoThunk', element: <RedditClassicNoThunk /> },
          { path: 'classicThunk', element: <RedditClassicThunk /> },
        ],
      },
      {
        path: 'perf',
        children: [{ path: 'clock', element: <Clock /> }],
      },
      {
        path: 'context',
        children: [
          { path: 'PropDrill', element: <ContextDrill /> },
          { path: 'WithContext', element: <ContextWith /> },
          { path: 'containment', element: <ContextContainment /> },
        ],
      },

      {
        path: 'best',
        children: [
          { path: 'step1', element: <Step1 /> },
          { path: 'step2', element: <Step2 /> },
          { path: 'step3', element: <Step3 /> },
          { path: 'step4', element: <Step4 /> },
          { path: 'step5', element: <Step5 /> },
          { path: 'step6', element: <Step6 /> },
        ],
      },
      {
        path: 'auth',
        children: [
          { path: 'signup', element: <SignUp /> },
          { path: 'signin', element: <SignIn /> },
          { path: 'profile', element: <NotFound /> },
          { path: 'passwordreset', element: <PasswordReset /> },
          { path: 'apicalls', element: <ApiCalls /> },
          {
            path: 'secret',
            element: (
              <ProtectedRoute roles='app-admin'>
                <Secret />
              </ProtectedRoute>
            ),
          },
          { path: 'manageaccount', element: <ManageAccount /> },
          { path: 'tokendetails', element: <TokenDetails /> },
          { path: 'signoff', element: <SignOff /> },
        ],
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default routes;
