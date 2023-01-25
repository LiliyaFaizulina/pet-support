import { useState } from 'react';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import {
  Form1,
  FormContainer,
  Input,
  Button,
  Title,
  ErrBox,
  ShowPassword,
} from './LoginForm.styled';
import { login } from 'redux/auth/authOperations';

const SignupSchema = object().shape({
  password: string()
    .min(7, 'Too Short!')
    .max(32, 'Too Long!')
    .required('Password is required'),

  email: string().email('Invalid email').required('Email Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const showPassword = () => {
    setShowPass(!showPass);
  };
  return (
    <FormContainer>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={({ email, password }, { resetForm }) => {
          dispatch(login({ email, password }));

          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form1>
            <Title>Login</Title>
            <div>
              <Input name="email" type="email" placeholder="Email" />

              {errors.email && touched.email ? (
                <ErrBox>{errors.email}</ErrBox>
              ) : null}
            </div>
            <div>
              <Input
                name="password"
                type={showPass ? 'text' : 'password'}
                placeholder="Password"
              />
              <ShowPassword onClick={showPassword}>
                {!showPass ? <ImEyeBlocked /> : <ImEye />}
              </ShowPassword>
              {errors.password && touched.password ? (
                <ErrBox>{errors.password}</ErrBox>
              ) : null}
            </div>

            <Button type="submit">Login</Button>

            <div>
              <span>Don't have an account?</span>{' '}
              <Link to="/register">Register</Link>
            </div>
          </Form1>
        )}
      </Formik>
    </FormContainer>
  );
};
