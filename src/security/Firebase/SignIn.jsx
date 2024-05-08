import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { AuthContext } from './AuthProvider.Firebase';

const SignIn = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const auth = useContext(AuthContext);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError('Error signing in with password and email!');
      console.error('Error signing in with password and email', error);
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    }
  };

  return (
    <div className='mt-5'>
      <h1 className='mb-3 text-center'>Sign In</h1>
      <div
        className='border rounded py-5 px-3 mx-auto '
        style={{ maxWidth: 400 }}
      >
        {error !== null && <Alert variant='danger'>{error}</Alert>}
        <Form>
          <Form.Label htmlFor='userEmail'>Email:</Form.Label>
          <Form.Control
            type='email'
            name='userEmail'
            value={email}
            placeholder='E.g: user@gmail.com'
            id='userEmail'
            onChange={(event) => onChangeHandler(event)}
          />
          <Form.Label htmlFor='userPassword'>Password:</Form.Label>
          <Form.Control
            type='password'
            name='userPassword'
            value={password}
            placeholder='Your Password'
            id='userPassword'
            onChange={(event) => onChangeHandler(event)}
          />
          <Button
            variant='primary'
            className='mt-5'
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign in
          </Button>
        </Form>
        <p>or</p>
        <Button
          variant='warning'
          onClick={async () => {
            await auth.login('google');
            history.push('/auth/profile');
          }}
        >
          Sign in with Google
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
        <p>
          Don't have an account? <Link to='/auth/signUp'>Sign up here</Link>
          <br />
          <Link to='/auth/passwordreset'>Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
