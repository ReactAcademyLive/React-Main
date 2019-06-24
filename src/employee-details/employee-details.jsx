import React from 'react';
import EmployeeApi from '../employee-api/employee-api';
import EmployeeForm from './employee-form';



export default class EmployeeDetails extends React.Component {
    constructor(){
        super();
        this.state = {id: 0, 
                      firstName:"", lastName:"", 
                      formErrors:{}}
    }
    
    async componentDidMount() {
        if (this.props.match.params.id){
            let emp = await EmployeeApi.getEmployee(this.props.match.params.id)
            console.log(emp);
            this.setState(emp);
        }   
    }


    submit = async () => { 
        if (! this.employeeFormIsValid()) {
            return;
        }

        await EmployeeApi.saveEmployee({
            id:this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        });
        this.props.history.push("/employees");
    }


    change = (e) => {
        this.setState ({[e.target.name]: e.target.value}, 
                 this.employeeFormIsValid );      
    }

    employeeFormIsValid = () => {
        let formErrors={};

        if (this.state.firstName.length <3 ) {
            formErrors.firstName=`First name needs three letters or more (${this.state.firstName})`; 
        }
  
        if (this.state.lastName.length <3 ) {
            formErrors.lastName="Last name needs three letters or more"; 
        }

        this.setState({formErrors})
        return Object.keys(formErrors).length===0;
    }

        
    render = () => 
    <>
         <h1>
              {(this.props.match.params.id) ? 
              `Employee ${this.state.firstName} ${this.state.lastName} ` : 
              "Create Employee" 
              }
         </h1>
         <EmployeeForm 
             {...this.state}
             onChange={this.change}
             onSubmit={this.submit}
             />
    </>
}