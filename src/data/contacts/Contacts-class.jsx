import React from 'react';
import './contact-api/ContactTypes';
import ContactApi from './contact-api/ContactApi';
import ContactTable from './ContactTable';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Contacts extends React.Component {
  state = { contacts: [] };

  componentDidMount() {
    this.refreshData();
  }

  // This is the old way of calling data
  // eslint-disable-next-line 
  refreshDataPromise() {
    ContactApi.getAllContacts()
      .then((data) => {
        this.setState({ contacts: data });
      })
      .catch((err) => console.log(err));
  }

  async refreshData() {
    try {
      let data = await ContactApi.getAllContacts();
      this.setState({ contacts: data });
    }
    catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <>
        <h1>Contacts (using Classes)</h1>
        <ContactTable contacts={this.state.contacts} />
        <Link to='/data/details'>
          <Button color='primary'>Create Contact</Button>
        </Link>
      </>
    );
  }
}
