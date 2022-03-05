import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

export default function ValidatedForm({ login }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    await login(data.email, data.password);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className='mb-3' controlId='email'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          {...register('email', {
            required: 'required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
          type='email'
          isInvalid={!!errors.email}
        />
        {!!errors.email && (
          <Form.Control.Feedback type='invalid' role='alert'>
            {errors?.email?.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group className='mb-3' controlId='password'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          {...register('password', {
            required: 'required',
            minLength: {
              value: 5,
              message: 'min length is 5',
            },
          })}
          isInvalid={!!errors.password}
          type='password'
        />
        {!!errors.password && (
          <Form.Control.Feedback type='invalid' role='alert'>
            {errors?.password?.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
}
