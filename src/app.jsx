import React from 'react';
import Counter from './counter/counter';
import { Container } from 'reactstrap';
import Menu from './menu';
import Footer from './footer';
import About from './about/about';
import Home from './home/home';
import './custom.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Employees from './employee/employees';
import EmployeeDetails from './employee/employee-details';
import NotFound from './404';
import Todos from './todos-state/todos';
import Reddits from "./reddit/reddits";
import Clock from './clock/clock';
import Mouser from './mouser/mouser3';


//npm install node-sass bootstrap reactstrap
//npm install react-icons 
//npm install redux react-redux redux-thunk redux-logger

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <>
                    <Menu />
                    <Container>
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/about' component={About} />
                            <Route path='/counter'
                                render={() => <Counter />} />
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
                            <Route component={NotFound}  />
                        </Switch>
                        <Footer />
                    </Container>
                </>
            </BrowserRouter>
        );
    }
}
