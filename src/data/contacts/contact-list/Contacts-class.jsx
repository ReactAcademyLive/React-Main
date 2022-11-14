import React from 'react';
import '../contact-api/ContactTypes';
import ContactApi from '../contact-api/ContactApi';
import ContactTable from './ContactTable';

export default class Contacts extends React.Component {
  state = { contacts: [] };

  componentDidMount() {
    this.refreshData();
    // ContactApi.registerNotification(this.refreshData);
  }

  // componentWillUnmount() {
  //   ContactApi.unregisterNotification();
  // }

  // This is the old way of calling data
  // eslint-disable-next-line
  refreshDataPromise() {
    ContactApi.getAllContacts()
      .then((data) => {
        this.setState({ contacts: data });
      })
      .catch((err) => console.log(err));
  }

  modifyContact = async (formData) => {
    const contact = Object.fromEntries(formData);
    //change id from "0" to undefined (for contact creation)
    contact.id = contact.id !== '0' ? contact.id : undefined;
    await ContactApi.saveContact(contact);
    await this.refreshData();
  };

  deleteContact = async (id) => {
    await ContactApi.deleteContact(id);
    await this.refreshData();
  };

  refreshData = async () => {
    try {
      let data = await ContactApi.getAllContacts();
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
