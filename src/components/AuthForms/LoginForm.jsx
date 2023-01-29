import { useState } from 'react';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/auth/authSelectors';
import Spinner from 'components/Spinner/Spinner';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import {
  Form1,
  FormContainer,
  Input,
  Button,
  Title,
  ErrBox,
  ForgotPassword,
  ShowPassword,
  StyledLink,
} from './LoginForm.styled';
import { login } from 'redux/auth/authOperations';

const SignupSchema = object().shape({
  password: string()
    .min(7, 'Too Short!')
    .max(32, 'Too Long!')
    .required('Password is required'),

  email: string().email('Invalid email').required('Email Required'),
});

export const LoginForm = ({ openModal }) => {
  const loading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const showPassword = () => {
    setShowPass(!showPass);
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
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
                  <ForgotPassword type="button" onClick={openModal}>
                    Forgot password?
                  </ForgotPassword>
                  {errors.password && touched.password ? (
                    <ErrBox>{errors.password}</ErrBox>
                  ) : null}
                </div>

                <Button type="submit">Login</Button>

                <div>
                  <span>Don't have an account?</span>{' '}
                  <StyledLink to="/register">Register</StyledLink>
                </div>
              </Form1>
            )}
          </Formik>
        </FormContainer>
      )}
    </>
  );
};
