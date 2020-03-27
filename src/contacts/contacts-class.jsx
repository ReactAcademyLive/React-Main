import React from 'react';
import ContactApi from './contact-api/contact-api';
import ContactTable from './contact-table';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Contacts extends React.Component {
  state = { contacts: [] };

  componentDidMount() {
    this.refreshData();
  }

  refreshData() {
    ContactApi.getAllContacts()
      .then((data) => {
        this.setState({ contacts: data });
      })
      .catch((err) => console.log(err));
    // try {
    //   let data = await ContactApi.getAllContacts();
    //   this.setState({ contacts: data });
    // }
    // catch (err) {
    //   console.log(err);
    // }
  }

  render() {
    return (
      <>
        <h1>Contacts (using Classes)</h1>
        <ContactTable contacts={this.state.contacts} />
        <Link to='/contact'>
          <Button color='primary'>Create Contact</Button>
        </Link>
      </>
    );
  }
}
