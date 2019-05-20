import React from "react";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from 'react-icons/fa';
import EmployeeContext from './employee-context';

function EmployeeTable() {
  const context = React.useContext(EmployeeContext)
  
  return (<Table striped>
    <thead>
      <tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {context.employees.map(emp =>
        <tr key={emp.id} >
          <td><Link to={`/employee/${emp.id}`}><Button color="primary"  >{emp.id}</Button></Link></td>
          <td className="align-middle">{emp.firstName}</td>
          <td className="align-middle">{emp.lastName}</td>
          <td className="align-middle" >
            <Button color='danger'
              onClick={() => context.onDelete(emp.id)}  >
              <FaRegTrashAlt />
            </Button>
          </td>
        </tr>)
      }
    </tbody>
  </Table>);
}

export default EmployeeTable;


