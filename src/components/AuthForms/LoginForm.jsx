import { object, string, ref } from 'yup';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import {
  Form1,
  FormContainer,
  Input,
  Button,
  Title,
  ErrBox,
} from './LoginForm.styled';
import { login } from 'redux/auth/authOperations';

const SignupSchema = object().shape({
  password: string()
    .min(7, 'Too Short!')
    .max(32, 'Too Long!')
    .required('Required'),

  email: string().email('Invalid email').required('Email Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

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
            <Input name="email" type="email" placeholder="Email" />

            <div>
              {errors.email && touched.email ? (
                <ErrBox>{errors.email}</ErrBox>
              ) : null}
            </div>

            <Input name="password" type="password" placeholder="Password" />

            <div>
              {errors.password && touched.password ? (
                <ErrBox>{`Password ${errors.password}`}</ErrBox>
              ) : null}
            </div>
            <Button type={'submit'}>Login</Button>
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
