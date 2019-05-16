

export default class EmployeeApi {
  
  static getAllEmployees() {
    return fetch("/employees").then(resp => resp.json()) ;   
  }
    
  static getEmployee(empId) {
    return fetch("/employees/" + empId).then(resp => resp.json()) ; 
  }

  static saveEmployee(employee) {
    employee = {...employee}; // spread to clone object
                              //to avoid manipulating original employee.

    // Simulate server-side validation
    const minEmpNameLength = 3;
    if (employee.firstName.length < minEmpNameLength) {
      throw new Error(`First Name must be at least ${minEmpNameLength} characters.`);
    }

    if (employee.lastName.length < minEmpNameLength) {
      throw new Error(`Last Name must be at least ${minEmpNameLength} characters.`);
    }

    if (employee.id) { 
      return fetch("/employees/" + employee.id, 
        {
          method: "PUT", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(employee) // body data type must match "Content-Type" header
        }
      ); 
    } else {
      return fetch("/employees" , 
        {
          method: "POST", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(employee) // body data type must match "Content-Type" header
        }
      ).then(resp => resp.json()) ; 
    }
    
  }

  static deleteEmployee(empId) {
    return fetch("/employees/" + empId , 
                   { method: "DELETE" }
                ); 
  }
}
