import React from 'react';
import '../contact-api/ContactTypes-js';
import ContactApi from '../contact-api/ContactApi';
import ContactTable from './ContactTable';
import Contact from '../contact-api/ContactType';

interface ContactsState {
  contacts: Contact[];
}

export default class Contacts extends React.Component<
  Record<string, never>,
  ContactsState
> {
  state = { contacts: [] };

  componentDidMount() {
    this.refreshData();
    // ContactApi.registerNotification(this.refreshData);
  }

  // componentWillUnmount() {
  //   ContactApi.unregisterNotification();
  // }

  // This is the old way of calling data
  refreshDataPromise() {
    ContactApi.getAllContacts()
      .then((data) => {
        this.setState({ contacts: data });
      })
      .catch((err) => console.log(err));
  }

  modifyContact = async (formData: FormData) => {
    const contact: Contact = Object.fromEntries(formData) as unknown as Contact;
    if (contact.id === '0') contact.id = 0;
    await ContactApi.saveContact(contact);
    await this.refreshData();
  };

  deleteContact = async (id: string | number) => {
    await ContactApi.deleteContact(id);
    await this.refreshData();
  };

  refreshData = async () => {
    try {
      const data = await ContactApi.getAllContacts();
      this.setState({ contacts: data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <>
        <h1>Contacts (using Classes)</h1>
        <ContactTable
          contacts={this.state.contacts}
          modifyContact={this.modifyContact}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
