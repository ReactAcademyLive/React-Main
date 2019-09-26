import React from 'react';
import EmployeeApi from '../employee-api/employee-api';
import EmployeeForm from './employee-form';

export default function EmployeeDetails(props) {
  const [state, setState] = React.useState({
    id: 0,
    firstName: '',
    lastName: '',
    formErrors: {}
  });

  React.useEffect(() => {
    async function getData(id) {
      let emp = await EmployeeApi.getEmployee(id);
      setState({ ...emp, formErrors: {} });
    }

    if (props.match.params.id) {
      getData(props.match.params.id);
    }
  }, [props.match.params.id]);

  React.useEffect(() => {
    employeeFormIsValid();
  });

  async function submit() {
    if (!employeeFormIsValid()) {
      return;
    }

    await EmployeeApi.saveEmployee({
      id: state.id,
      firstName: state.firstName,
      lastName: state.lastName
    });
    props.history.push('/employees');
  }

  function change(evt) {
    setState({ ...state, [evt.target.name]: evt.target.value });
  }

  function employeeFormIsValid() {
    let formErrors = {};

    if (state.firstName.length < 3) {
      formErrors.firstName = `First name needs three letters or more (${state.firstName})`;
    }

    if (state.lastName.length < 3) {
      formErrors.lastName = 'Last name needs three letters or more';
    }

    if (!isEquivalent(state.formErrors, formErrors)) {
      setState({ ...state, formErrors });
    }

    return Object.keys(formErrors).length === 0;
  }

  return (
    <>
      <h1>
        {props.match.params.id
          ? `Employee ${state.firstName} ${state.lastName} `
          : 'Create Employee'}
      </h1>
      <EmployeeForm {...state} onChange={change} onSubmit={submit} />
    </>
  );
}

function isEquivalent(a, b) {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length !== bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}
