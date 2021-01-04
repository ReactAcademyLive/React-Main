import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, Form, Label } from 'reactstrap';
import { AuthContext } from '../common/AuthProvider';

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState(null);
  const auth = useContext(AuthContext);
  const user2 = auth.user;

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
      await auth.generateUserDocument(user, { displayName });
      console.log('user2.refresh');
      await user2.refresh();

      props.history.push('/auth/profile');
    } catch (error) {
      setError('Error Signing up with email and password');
    }

    setEmail('');
    setPassword('');
    setDisplayName('');
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
          <div className='py-4 danger text-white text-center mb-3'>{error}</div>
        )}
        <Form>
          <Label htmlFor='displayName'>Display Name:</Label>
          <Input
            type='text'
            className='mb-4'
            name='displayName'
            value={displayName}
            placeholder='E.g: Full NAme'
            id='displayName'
            onChange={(event) => onChangeHandler(event)}
          />
          <label htmlFor='userEmail'>Email:</label>
          <Input
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
            color='primary'
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
          color='danger'
          onClick={() => {
            auth.login('google');
          }}
        >
          Sign In with Google
        </Button>{' '}
        <Button
          color='danger'
          onClick={() => {
            auth.login('github');
          }}
        >
          Sign In with Github
        </Button>
        <p className='my-3'>
          Already have an account?{' '}
          <Link to='/' className='text-blue-500 hover:text-blue-600'>
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
