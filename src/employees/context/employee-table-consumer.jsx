import React from "react";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import EmployeeContext from "./employee-context";

function EmployeeTable() {
  return (
    <EmployeeContext.Consumer>
      {context => (
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
            {context.employees.map(emp => (
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
                    onClick={() => context.onDelete(emp.id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </EmployeeContext.Consumer>
  );
}

export default EmployeeTable;
