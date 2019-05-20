import React from 'react'
import EmployeeApi from '../../employee-api/employee-api';
import EmployeeTable from "./employee-table-hooks";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import EmployeeContext from "./employee-context";

export default class Employees extends React.Component {
  state = { employees: [], isLoading: true }

  componentDidMount() {
    this.refreshData();
  }
 
  async refreshData(){
    // EmployeeApi.getAllEmployees().
    // then(data => this.setState({employees: data})).
    // catch(err => console.log(err))
    try {
      this.setState({ isLoading: true });
      let data = await EmployeeApi.getAllEmployees();
      this.setState({ employees: data, isLoading: false });

    }
    catch (err) {
      console.log(err);
      this.setState({ isLoading: false });
    }
  } 

  delete = async (empId) => {
    await EmployeeApi.deleteEmployee(empId);
    await this.refreshData();
  }

  render() {
    return (
      <EmployeeContext.Provider value={{
        employees: this.state.employees,
        onDelete: this.delete
      }} >
        <h1>Employees (context)  </h1>
        <EmployeeTable />
        <Link to="/employee"><Button color="primary">Create Employee</Button></Link>
      </EmployeeContext.Provider>
    );
  }
}





// {
//     this.state.isLoading ?
//     <img alt="wait-spinner" src="/wait.gif" /> 
//     :
//     <EmployeeTable  />
// }