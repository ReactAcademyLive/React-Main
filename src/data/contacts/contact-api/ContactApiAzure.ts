import Contact from './ContactType';

const base = 'https://contacts.reactacademy.live/api';

export default class ContactApi {
  static ws: WebSocket | null = null;

  static getAllContacts() {
    return fetch(`${base}/contacts`).then(
      (resp): Promise<Contact[]> => resp.json(),
    );
  }

  static getContact(contactId: string) {
    return fetch(`${base}/contacts/${contactId}`).then(
      (resp): Promise<Contact> => resp.json(),
    );
  }

  static saveContact(contact: Contact) {
    // Simulate server-side validation

    const minContactLength = 3;
    if (contact.firstName.length < minContactLength) {
      throw new Error(
        `First Name must be at least ${minContactLength} characters.`,
      );
    }

    if (contact.lastName.length < minContactLength) {
      throw new Error(
        `Last Name must be at least ${minContactLength} characters.`,
      );
    }

    if (contact.id) {
      //if id, update contact
      return fetch(`${base}/contacts/${contact.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact), // body data type must match "Content-Type" header
      });
    } else {
      //if no id, create contact
      return fetch(`${base}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact), // body data type must match "Content-Type" header
      }).then((resp) => resp.json());
    }
  }

  static deleteContact(contactId: string | number) {
    return fetch(`${base}/contacts/${contactId}`, { method: 'DELETE' });
  }

  static async registerNotification(fn: () => void) {
    if (this.ws === null) {
      // this.ws = {};
      const res = await fetch(`${base}/negotiate`);
      const url = await res.json();
      this.ws = new WebSocket(url.url);

      this.ws.onopen = () => console.log('connected');

      this.ws.onmessage = () => {
        fn();
      };
    }
  }

  static async unregisterNotification() {
    if (this.ws !== null) {
      this.ws.close();
      this.ws = null;
    }
  }

  // static async getAllContacts() {
  //   const resp = await fetch("/contacts");
  //   if(resp.ok) {
  //     return resp.json();
  //   }
  //   throw new Error('Network response was not ok.');
  // }
}
