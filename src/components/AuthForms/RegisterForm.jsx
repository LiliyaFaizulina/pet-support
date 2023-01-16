import { object, string, ref } from 'yup';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useFormik, Formik } from 'formik';
import { Link } from 'react-router-dom';
import {
  Form1,
  FormContainer,
  Input,
  Button,
  Title,
  ErrBox,
} from './LoginForm.styled';

const RegisterSchema = object().shape({
  password: string()
    .min(7, 'Too Short!')
    .max(32, 'Too Long!')
    .required('Required'),
  confirmPassword: string()
    .required('Please confirm your password')
    .oneOf([ref('password')], 'Passwords do not match'),

  email: string().email('Invalid email').required('Email Required'),
});
export const RegisterForm = () => {
  const [isShown, setIsShown] = useState(true);

  const showForm = () => {
    setIsShown(false);
  };
  const hideForm = () => {
    setIsShown(true);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      city: '',
    },
    valivalidationSchema: RegisterSchema,
  });
  console.log(formik.values);
  return (
    <FormContainer>
      <Formik>
        <Form1>
          <Title>Register</Title>
          {isShown && (
            <Input
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          )}

          {/* <div>
          {errors.email && touched.email ? (
            <ErrBox>{errors.email}</ErrBox>
          ) : null}
          </div>  */}

          {isShown && (
            <Input
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          )}

          {/* <div>
          {errors.password && touched.password ? (
            <ErrBox>{`Password ${errors.password}`}</ErrBox>
          ) : null}
        </div>  */}
          {isShown && (
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
          )}
          {isShown && (
            <Button type={'button'} onClick={showForm}>
              Next
            </Button>
          )}
          {!isShown && (
            <Input
              name="name"
              type="text"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          )}
          {!isShown && (
            <Input
              name="city"
              type="text"
              placeholder="City, region"
              onChange={formik.handleChange}
              value={formik.values.city}
            />
          )}
          {!isShown && (
            <Input
              name="phone"
              type="phone"
              placeholder="Mobile phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          )}
          {!isShown && (
            <Button type={'submit'} onClick={hideForm}>
              Register
            </Button>
          )}
          <div>
            <span>Don't have an account?</span> <Link to="/login">Login</Link>
          </div>
        </Form1>
      </Formik>
    </FormContainer>
  );
};
