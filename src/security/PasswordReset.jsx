import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Label, Button, Alert } from 'reactstrap';
import { auth } from '../common/firebase';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    }
  };

  const sendResetEmail = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch(() => {
        setError('Error resetting password');
      });
  };

  return (
    <div className='mt-5'>
      <h1 className='text-center '>Reset your Password</h1>
      <div
        className='border  rounded py-5 px-3 mx-auto '
        style={{ maxWidth: 400 }}
      >
        <Form action=''>
          {emailHasBeenSent && (
            <Alert color='success'>An email has been sent to you!</Alert>
          )}
          {error !== null && <Alert color='danger'>{error}</Alert>}
          <Label htmlFor='userEmail' className='mt-3'>
            Email:
          </Label>
          <Input
            type='email'
            name='userEmail'
            id='userEmail'
            value={email}
            placeholder='Input your email'
            onChange={onChangeHandler}
            className='mb-3 '
          />
          <Button
            color='primary'
            onClick={(event) => {
              sendResetEmail(event);
            }}
          >
            Send me a reset link
          </Button>
        </Form>
        <Link to='/auth/signin'>&larr; back to sign in page</Link>
      </div>
    </div>
  );
};
export default PasswordReset;
