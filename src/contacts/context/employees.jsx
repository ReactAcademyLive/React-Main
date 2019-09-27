import React from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import EmployeeApi from '../../employee-api/employee-api';
import EmployeeTable from "./employee-table-hooks";
import EmployeeContext from "./employee-context";

export default function Employees() {
  const [employees, setEmployees] = React.useState([]);

  React.useEffect(() => { refreshData(); }, []);

  async function refreshData() {
    try {
      let data = await EmployeeApi.getAllEmployees();
      setEmployees(data);
    }
    catch (err) {
      console.log(err);
    }
  }

  async function del(empId) {
    await EmployeeApi.deleteEmployee(empId);
    await refreshData();
  }

  return (
    <EmployeeContext.Provider value={{
      employees: employees,
      onDelete: del
    }} >
      <h1>Employees (hooks)  </h1>
      <EmployeeTable />
      <Link to="/employee"><Button color="primary">Create Employee</Button></Link>
    </EmployeeContext.Provider>
  );
}


// {
//     this.state.isLoading ?
//     <img alt="wait-spinner" src="/wait.gif" /> 
//     :
//     <EmployeeTable  />
// }