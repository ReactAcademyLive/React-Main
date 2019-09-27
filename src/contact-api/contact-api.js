export default class EmployeeApi {
  static getAllContacts() {
    return fetch('/employees').then(resp => resp.json());
  }

  static getContact(contactId) {
    return fetch('/employees/' + contactId).then(resp => resp.json());
  }

  static saveContact(contact) {
    //employee = {...employee}; // spread to clone object
    //to avoid manipulating original employee.

    // Simulate server-side validation
    const minContactLength = 3;
    if (contact.firstName.length < minContactLength) {
      throw new Error(
        `First Name must be at least ${minContactLength} characters.`
      );
    }

    if (contact.lastName.length < minContactLength) {
      throw new Error(
        `Last Name must be at least ${minContactLength} characters.`
      );
    }

    if (contact.id) {
      //if id, update employee
      return fetch('/employees/' + contact.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact) // body data type must match "Content-Type" header
      });
    } else {
      //if no id, create employee
      return fetch('/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact) // body data type must match "Content-Type" header
      }).then(resp => resp.json());
    }
  }

  static deleteContact(contactId) {
    return fetch('/employees/' + contactId, { method: 'DELETE' });
  }

  // static async getAllEmployees() {
  //   const resp = await fetch("/employees");
  //   if(resp.ok) {
  //     return resp.json();
  //   }
  //   throw new Error('Network response was not ok.');
  // }
}
