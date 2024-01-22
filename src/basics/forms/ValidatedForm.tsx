import { SubmitHandler, useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

//Todo: create a new field for 'name'
//that is required and has between 5 and 25 characters

interface FormValues {
  email: string;
  password: string;
}

interface ValidatedFormProps {
  login?: (email: string, password: string) => Promise<boolean>;
}

function myLogin(email: string, password: string) {
  const p = new Promise<boolean>((resolve) => {
    if (email === password) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
  return p;
}

export default function ValidatedForm({ login }: ValidatedFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    login = login ?? myLogin;
    const result = await login(data.email, data.password);

    // @   ts-ignore
    if (!global.chai) {
      if (result) {
        alert('Login was a success');
      } else {
        alert(
          'Login failed. Try using using a password that is identical to the email.'
        );
      }
    }
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
