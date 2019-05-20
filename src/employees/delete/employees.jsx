import React from 'react'
import EmployeeApi from '../../employee-api/employee-api';
import EmployeeTable from "./employee-table";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Employees extends React.Component {
  state = { employees: [] }

  componentDidMount() {
    this.refreshData();
  }

  delete = async (empId) => {
    await EmployeeApi.deleteEmployee(empId);
    await this.refreshData();
  } 

  async refreshData() {
    // EmployeeApi.getAllEmployees()
    //   .then(data => this.setState({ employees: data }))
    //   .catch(err => console.log(err))
    try {
      let data = await EmployeeApi.getAllEmployees();
      this.setState({ employees: data });
    }
    catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <>
        <h1>Employees (with delete)</h1>
        <EmployeeTable employees={this.state.employees} onDelete={this.delete} />
        <Link to="/employee">
          <Button color="primary">Create Employee</Button>
        </Link>
      </>
    );
  }
}
