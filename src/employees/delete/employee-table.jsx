import React from "react";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
 import { FaRegTrashAlt, FaPenAlt } from 'react-icons/fa';

const EmployeeTable = (props) => {
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
            {props.employees.map(emp =>
                <tr key={emp.id} >
                                      <td><Link to={`/employee/${emp.id}`}><Button color="primary"  ><FaPenAlt /></Button></Link></td>
                    <td className="align-middle">{emp.firstName}</td>
                    <td className="align-middle">{emp.lastName}</td>
                    <td className="align-middle" >
                       <Button color='danger'
                           onClick={ () => props.onDelete(emp.id) }  >
                            <FaRegTrashAlt />  
                       </Button> 
                    </td>
                </tr>)
            }
        </tbody>
    </Table>);
}

export default EmployeeTable;


