import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Alert } from 'react-bootstrap';
import { AuthContext } from '../common/AuthProvider';

const SignUp = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState(null);
  const auth = useContext(AuthContext);

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password,
    displayName
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.auth.createUserWithEmailAndPassword(
        email,
        password
      );

      const result = await fetch('https://randomuser.me/api/', {
        //  headers: { 'x-API-KEY': '873771d7760b846d51d025ac5804ab' },
      });
      const data = await result.json();
      const photoURL = data.results[0].picture.large;

      await auth.generateUserDocument(user, {
        displayName,
        photoURL,
      });

      await auth.refreshDoc(user);

      history.push('/auth/profile');
    } catch (error) {
      setError('Error Signing up with email and password: ' + error);
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    } else if (name === 'displayName') {
      setDisplayName(value);
    }
  };

  return (
    <div className='mt-5'>
      <h1 className='mb-3 text-center '>Sign Up</h1>
      <div
        className='border   rounded py-5 px-3 mx-auto '
        style={{ maxWidth: 400 }}
      >
        {error !== null && (
          <Alert variant='danger' className='py-4   text-center mb-3'>
            {error}
          </Alert>
        )}
        <Form>
          <Form.Label>Display Name:</Form.Label>
          <Form.Control
            type='text'
            className='mb-4'
            name='displayName'
            value={displayName}
            placeholder='E.g: Full NAme'
            id='displayName'
            onChange={(event) => onChangeHandler(event)}
          />
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type='email'
            className='mb-4'
            name='userEmail'
            value={email}
            placeholder='E.g: user@gmail.com'
            id='userEmail'
            onChange={(event) => onChangeHandler(event)}
          />
          <label htmlFor='userPassword'>Password:</label>
          <Input
            type='password'
            className='mb-4'
            name='userPassword'
            value={password}
            placeholder='Your Password'
            id='userPassword'
            onChange={(event) => onChangeHandler(event)}
          />
          <Button
            variant='primary'
            onClick={(event) => {
              createUserWithEmailAndPasswordHandler(
                event,
                email,
                password,
                displayName
              );
            }}
          >
            Sign up
          </Button>
        </Form>
        <p className='my-3'>or</p>
        <Button
          variant='warning'
          onClick={async () => {
            await auth.login('google');
            history.push('/auth/profile');
          }}
        >
          Sign In with Google
        </Button>{' '}
        <Button
          variant='warning'
          onClick={async () => {
            await auth.login('github');
            history.push('/auth/profile');
          }}
        >
          Sign In with Github
        </Button>
        <p className='my-3'>
          Already have an account?{' '}
          <Link to='/auth/signin' className='text-blue-500 hover:text-blue-600'>
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
