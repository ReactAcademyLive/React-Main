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
import SignUp from '../security/keycloak/SignUp';
import SignIn from '../security/keycloak/SignIn';
import PasswordReset from '../security/keycloak/PasswordReset';
import SignOff from '../security/keycloak/SignOff';
import ApiCalls from '../security/keycloak/ApiCalls';
import ManageAccount from '../security/keycloak/ManageAccount';
import Secret from '../security/keycloak/Secret';
import ProtectedRoute from './ProtectedRoute';
import TokenDetails from '../security/keycloak/TokenDetails';
import { lazy } from 'react';
import Profile from '../security/msal/Profile';
import MsalSignUp from '../security/msal/SignUp';
import MsalSignIn from '../security/msal/SignIn';
//import MsalPasswordReset from '../security/msal/PasswordReset';
import MsalSignOff from '../security/msal/SignOff';
//import MsalApiCalls from '../security/msal/ApiCalls';
//import MsalManageAccount from '../security/msal/ManageAccount';
//import MsalSecret from '../security/msal/Secret';
//import MsalTokenDetails from '../security/msal/TokenDetails';
//import Profile from '../security/msal/Profile';

//import MapWithPins from '../data/maps/MapWithPins';
// eslint-disable-next-line react-refresh/only-export-components
const MapWithPins = lazy(() => import('../data/maps/MapWithPins'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: { title: 'Home', advanced: false },
      },
      {
        path: 'hello',
        children: [
          { index: true, element: <Home /> },
          { path: ':name', element: <Home /> },
        ],
      },
      {
        path: 'basics',
        handle: { dropMenu: 'Basics', advanced: false },
        children: [
          {
            path: 'list',
            element: <BasicList />,
            handle: { title: 'Display List' },
          },
          {
            path: 'lifecycle',
            element: <Lifecycle />,
            handle: { title: 'Hooks Lifecycle' },
          },

          {
            path: 'reference',
            element: <WithRef />,
            handle: { title: 'Using References' },
          },
          {
            path: 'myform',
            element: <MyForm />,
            handle: { title: 'Form Validation' },
          },
          {
            path: 'rendering',
            element: <Rendering />,
            handle: { title: 'Rendering' },
          },
        ],
      },
      {
        path: 'counter',
        handle: { dropMenu: 'Counter', advanced: false },
        children: [
          {
            path: 'hooks-v1',
            element: <HooksCounterV1 init={5} />,
            handle: { title: 'Simple Counter Without Save' },
          },
          {
            path: 'hooks-v2',
            element: <HooksCounterV2 init={5} />,
            handle: { title: 'Saving to Local Storage' },
          },
          {
            path: 'hooks-v3',
            element: <HooksCounterV3 init={5} />,
            handle: { title: 'Saving with Custom Hooks' },
          },
          { path: 'divider1', element: <></> },
          {
            path: 'classes',
            element: <ClassesCounter init={5} />,
            handle: { title: 'Counter Class (legacy)' },
          },
        ],
      },
      {
        path: 'data',
        handle: { dropMenu: 'Data', advanced: false },
        children: [
          {
            path: 'heading1',
            element: <></>,
            handle: { title: 'Effect Hooks' },
          },
          {
            path: 'covid',
            element: <Covid />,
            handle: { title: 'Covid' },
          },
          {
            path: 'videos',
            element: <Videos />,
            handle: { title: 'Videos' },
          },
          {
            path: 'map',
            element: <MapWithPins />,
            handle: { title: 'Map with Pins' },
          },
          {
            path: 'election',
            element: <ElectionResult />,
            handle: { title: 'Election Results (Context Provider)' },
          },

          {
            path: 'contacts',
            element: <ContactsHooks />,
            handle: { title: 'Contacts' },
          },
          {
            path: 'details',
            children: [
              { index: true, element: <ContactDetails /> },
              { path: ':id', element: <ContactDetails /> },
            ],
          },
          {
            path: 'heading2',
            element: <></>,
            handle: { title: 'Use Hooks (new)' },
          },

          {
            path: 'heading3',
            element: <></>,
            handle: { title: 'Data Router' },
          },
          {
            path: 'contacts-data-router',
            loader: contactsLoader,
            action: contactsAction,
            element: <ContactsRouterData />,
            handle: { title: 'Contacts' },
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
          {
            path: 'heading4',
            element: <></>,
            handle: { title: 'Legacy (classes)' },
          },
          {
            path: 'contacts-classes',
            element: <ContactsClass />,
            handle: { title: 'Contacts' },
          },
        ],
      },
      {
        path: 'context',
        handle: { dropMenu: 'Context', advanced: false },
        children: [
          {
            path: 'PropDrill',
            element: <ContextDrill />,
            handle: { title: 'Property Drilling' },
          },
          {
            path: 'WithContext',
            element: <ContextWith />,
            handle: { title: 'Context' },
          },
          {
            path: 'containment',
            element: <ContextContainment />,
            handle: { title: 'Containment' },
          },
        ],
      },
      {
        path: 'best',
        handle: { dropMenu: 'React Patterns', advanced: true },
        children: [
          {
            path: 'step1',
            element: <Step1 />,
            handle: { title: 'Single Component' },
          },
          {
            path: 'step2',
            element: <Step2 />,
            handle: { title: 'Split Components' },
          },
          {
            path: 'step3',
            element: <Step3 />,
            handle: { title: 'Containment with children (2014)' },
          },
          {
            path: 'step4',
            element: <Step4 />,
            handle: { title: 'Higher-Order Component (2015)' },
          },
          {
            path: 'step5',
            element: <Step5 />,
            handle: { title: 'Render Props (2016' },
          },
          {
            path: 'step6',
            element: <Step6 />,
            handle: { title: 'Custom Hooks (2019)' },
          },
        ],
      },
      {
        path: 'todos',
        handle: { dropMenu: 'Todos', advanced: true },
        children: [
          {
            path: 'heading1',
            element: <></>,
            handle: { title: 'Current ways' },
          },
          {
            path: 'ClassicState',
            element: <TodosClassic />,
            handle: { title: 'Classic State' },
          },
          {
            path: 'ContextHooks',
            element: <TodosContextHooks />,
            handle: { title: 'Context and Reducer' },
          },

          {
            path: 'ToolkitHooks',
            element: <ToolkitHooks />,
            handle: { title: 'Redux Toolkit' },
          },
          {
            path: 'heading2',
            element: <></>,
            handle: { title: 'Legacy' },
          },
          {
            path: 'ReduxClassic',
            element: <TodosReduxClassic />,
            handle: { title: 'Redux Connect' },
          },
          {
            path: 'ReduxHooks',
            element: <TodosReduxHooks />,
            handle: { title: 'Redux Hooks' },
          },
          {
            path: 'ToolkitClassic',
            element: <TodosToolkitClassic />,
            handle: { title: 'Redux Tookit Connect' },
          },
        ],
      },
      {
        path: 'reddit',
        handle: { dropMenu: 'Reddit', advanced: true },
        children: [
          {
            path: 'toolkitNoThunk',
            element: <RedditNoThunk />,
            handle: { title: 'ReduxToolkit - No Thunk' },
          },
          {
            path: 'toolkitThunk',
            element: <RedditThunk />,
            handle: { title: 'ReduxToolkit - with Thunk' },
          },
          {
            path: 'classicNoThunk',
            element: <RedditClassicNoThunk />,
            handle: { title: 'Classic Redux - No Thunk' },
          },
          {
            path: 'classicThunk',
            element: <RedditClassicThunk />,
            handle: { title: 'Classic Redux - with Thunk' },
          },
        ],
      },
      {
        path: 'perf',
        handle: { dropMenu: 'Performance', advanced: true },
        children: [
          { path: 'clock', element: <Clock />, handle: { title: 'Clock' } },
        ],
      },

      {
        path: 'auth',
        handle: { dropMenu: 'Authentication', advanced: true },
        children: [
          { path: 'heading1', element: <></>, handle: { title: 'Keycloak' } },

          { path: 'signup', element: <SignUp />, handle: { title: 'Sign Up' } },
          { path: 'signin', element: <SignIn />, handle: { title: 'Sign In' } },
          {
            path: 'profile2',
            element: <NotFound />,
            handle: { title: 'Profile' },
          },
          {
            path: 'passwordreset',
            element: <PasswordReset />,
            handle: { title: 'Reset Password' },
          },
          {
            path: 'apicalls',
            element: <ApiCalls />,
            handle: { title: 'Api Calls' },
          },
          {
            path: 'secret',
            element: (
              <ProtectedRoute roles='app-admin'>
                <Secret />
              </ProtectedRoute>
            ),
            handle: { title: 'Secret Section' },
          },
          {
            path: 'manageaccount',
            element: <ManageAccount />,
            handle: { title: 'Manage Account' },
          },
          {
            path: 'tokendetails',
            element: <TokenDetails />,
            handle: { title: 'ID Token Details' },
          },
          {
            path: 'signoff',
            element: <SignOff />,
            handle: { title: 'Sign Off' },
          },
          { path: 'heading2', element: <></>, handle: { title: 'Msal' } },
          {
            path: 'msal/signup',
            element: <MsalSignUp />,
            handle: { title: 'SignUp' },
          },
          {
            path: 'msal/signin',
            element: <MsalSignIn />,
            handle: { title: 'SignIn' },
          },
          {
            path: 'msal/profile',
            element: <Profile />,
            handle: { title: 'Profile' },
          },
          {
            path: 'msal/signoff',
            element: <MsalSignOff />,
            handle: { title: 'SignOff' },
          },
        ],
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default routes;
