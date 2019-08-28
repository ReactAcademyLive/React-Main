import React from "react";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import EmployeeContext from "./employee-context";

class EmployeeTable extends React.Component {
  static contextType = EmployeeContext;

  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.context.employees.map(emp => (
            <tr key={emp.id}>
              <td>
                <Link to={`/employee/${emp.id}`}>
                  <Button color="primary">{emp.id}</Button>
                </Link>
              </td>
              <td className="align-middle">{emp.firstName}</td>
              <td className="align-middle">{emp.lastName}</td>
              <td className="align-middle">
                <Button
                  color="danger"
                  onClick={() => this.context.onDelete(emp.id)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default EmployeeTable;
