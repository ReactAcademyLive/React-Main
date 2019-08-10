import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import './custom.scss';
import useRouter from './use-router';
import Menu from './menu';
import Footer from './footer';
import Home from '../home/home';
import Counter from '../counter/counter';
import Employees from '../employees/employees';
import EmployeeDetails from '../employee-details/employee-details';
import NotFound from '../404/404';
import Todos from '../todos-state/todos';
import Reddits from "../reddit/reddits";
import Clock from '../clock/clock';
import Mouser from '../mouser/mouser';
import About from '../about/about';
//const About = React.lazy(() => import('./about/about'));


function Content() {
  const { location } = useRouter();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });
  return (

    transitions.map(({ item, props, key }) => (
      <animated.div key={key} style={{ ...props, position: 'absolute' }} >
        {/* <React.Suspense fallback={<h1>Loading...</h1>}   > */}
        <Switch location={item}>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/counter'
            render={() => <Counter init={5} />} />
          <Route path='/employees'
            component={Employees} />
          <Route exact path="/employee"
            component={EmployeeDetails} />
          <Route path='/employee/:id'
            component={EmployeeDetails} />
          <Route path="/todos" component={Todos} />
          <Route path="/reddits" component={Reddits} />
          <Route path="/clock" component={Clock} />
          <Route path="/mouser" component={Mouser} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        {/* </React.Suspense> */}

      </animated.div>

    ))
  );

}


export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container style={{position:'relative'}}>
        <Content />
      </Container>
    </BrowserRouter>
  );
}
