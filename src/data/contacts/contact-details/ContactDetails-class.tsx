import React, { ChangeEvent, ComponentType } from 'react';
import ContactApi from '../contact-api/ContactApi';
import ContactForm from './ContactForm';
import Contact from '../contact-api/ContactType';
import { useNavigate, useParams } from 'react-router-dom';

interface ParamsProps {
  params: { [key: string]: any };
  navigate: (to: string) => void;
}

//https://reactrouter.com/en/main/start/faq#what-happened-to-withrouter-i-need-it
function withRouter(Component: ComponentType<ParamsProps>) {
  function ComponentWithParams({ ...props }) {
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        params={params as unknown as ParamsProps}
        navigate={navigate}
      />
    );
  }

  return ComponentWithParams;
}

interface ContactDetailsState extends Contact {
  formErrors: FormErrors;
}

type FormErrors = {
  [Property in keyof Contact]?: string;
};

class ContactDetails extends React.Component<ParamsProps, ContactDetailsState> {
  constructor(props: ParamsProps) {
    super(props);
    this.state = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      formErrors: {},
    };
  }

  async componentDidMount() {
    if (this.props.params.id) {
      let contact = await ContactApi.getContact(this.props.params.id);
      this.setState(contact);
    }
  }

  submit = async () => {
    if (!this.contactFormIsValid()) {
      return;
    }

    await ContactApi.saveContact({
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    });
    this.props.navigate('/data/hooks');
  };

  change = (evt: ChangeEvent<HTMLInputElement>) => {
    this.setState(
      { [evt.target.name]: evt.target.value } as unknown as ContactDetailsState,
      this.contactFormIsValid
    );
  };

  contactFormIsValid = () => {
    let formErrors: FormErrors = {};

    if (this.state.firstName.length < 3) {
      formErrors.firstName = `First name needs three letters or more (${this.state.firstName})`;
    }

    if (this.state.lastName.length < 3) {
      formErrors.lastName = 'Last name needs three letters or more';
    }

    this.setState({ formErrors });
    return Object.keys(formErrors).length === 0;
  };

  render = () => (
    <>
      <h1>
        {this.props.params.id
          ? `Contact ${this.state.firstName} ${this.state.lastName} `
          : 'Create Contact'}
      </h1>
      <ContactForm
        {...this.state}
        onChange={this.change}
        onSubmit={this.submit}
      />
    </>
  );
}

export default withRouter(ContactDetails);
