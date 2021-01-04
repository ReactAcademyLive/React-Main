import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form, Label, Button, Input, Alert } from 'reactstrap';
import { AuthContext } from '../common/AuthProvider';

const SignIn = (props) => {
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
        {error !== null && <Alert color='danger'>{error}</Alert>}
        <Form>
          <Label htmlFor='userEmail'>Email:</Label>
          <Input
            type='email'
            name='userEmail'
            value={email}
            placeholder='E.g: user@gmail.com'
            id='userEmail'
            onChange={(event) => onChangeHandler(event)}
          />
          <Label htmlFor='userPassword'>Password:</Label>
          <Input
            type='password'
            name='userPassword'
            value={password}
            placeholder='Your Password'
            id='userPassword'
            onChange={(event) => onChangeHandler(event)}
          />
          <Button
            color='primary'
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
          color='danger'
          onClick={() => {
            auth.login('google');
          }}
        >
          Sign in with Google
        </Button>{' '}
        <Button
          color='danger'
          onClick={() => {
            auth.login('github');
          }}
        >
          Sign In with Github
        </Button>
        <p>
          Don't have an account? <Link to='/signUp'>Sign up here</Link>
          <br />
          <Link to='/passwordreset'>Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
