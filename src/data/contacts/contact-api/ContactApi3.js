import './ContactTypes';

export default class ContactApi {
  static getAllContacts() {
    return fetch('/contacts').then((resp) => resp.json());
  }

  static getContact(contactId) {
    return fetch('/contacts/' + contactId).then((resp) => resp.json());
  }

  static saveContact(contact) {
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
      //if id, update contact
      return fetch('/contacts/' + contact.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact), // body data type must match "Content-Type" header
      });
    } else {
      //if no id, create contact
      return fetch('/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact), // body data type must match "Content-Type" header
      }).then((resp) => resp.json());
    }
  }

  static deleteContact(contactId) {
    return fetch('/contacts/' + contactId, { method: 'DELETE' });
  }

  // static async getAllContacts() {
  //   const resp = await fetch("/contacts");
  //   if(resp.ok) {
  //     return resp.json();
  //   }
  //   throw new Error('Network response was not ok.');
  // }
}
