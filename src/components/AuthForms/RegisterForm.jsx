import { object, string, ref } from 'yup';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useFormik, Formik } from 'formik';
import { Link } from 'react-router-dom';

import { register } from 'redux/auth/authOperations';
import {
  Form1,
  FormContainer,
  Input,
  Button,
  Title,
  ErrBox,
  BackButton,
  PhoneInput,
} from './LoginForm.styled';

const phoneNumberMask = [
  '+',
  '3',
  '8',
  '(',
  /[0-9]/,
  /\d/,
  /\d/,

  ')',

  /\d/,
  /\d/,
  /\d/,

  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const RegisterSchema = object().shape({
  password: string()
    .min(7, 'Too Short!')
    .max(32, 'Too Long!')
    .required('Password is required'),
  confirmPassword: string()
    .required('Please confirm your password')
    .oneOf([ref('password')], 'Passwords does not match'),
  email: string().email('Invalid email').required('Email is required'),
  name: string()
    .min(2, 'min 2 symbols')
    .matches(/^[a-zA-Zа-яА-Я-]*$/, 'Only letters')
    .required('Name is required'),
  phone: string()
    .min(13, 'Too Short!')
    .matches(
      /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12}(\s*)?$/,
      'bad phone number'
    )
    .required('Phone is required'),
  city: string()
    .matches(
      /^[a-zA-Zа-яА-Я-]+(,)[a-zA-Zа-яА-Я-]*$/,
      'Error. Example: Brovary, Kyiv'
    )
    .required('City is required'),
});

export const RegisterForm = () => {
  const [isShown, setIsShown] = useState(true);
  const dispatch = useDispatch();
  const showForm = () => {
    setIsShown(false);
  };
  const hideForm = () => {
    setIsShown(true);
  };
  const onSubmit = values => {
    const { name, email, password, phone, city } = values;
    dispatch(
      register({
        name,
        email,
        password,
        phone,
        city,
      }),
      hideForm()
    );
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
    validationSchema: RegisterSchema,
    onSubmit,
  });
  const isValid =
    (formik.errors.email && formik.touched.email) ||
    (formik.errors.password && formik.touched.password) ||
    (formik.errors.confirmPassword && formik.touched.confirmPassword) ||
    formik.values.email === '' ||
    formik.values.confirmPassword === ''
      ? true
      : false;

  return (
    <FormContainer>
      <Formik validationSchema={RegisterSchema}>
        <Form1 onSubmit={formik.handleSubmit}>
          <Title>Register</Title>
          {isShown && (
            <>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />

                {formik.errors.email || formik.touched.email ? (
                  <ErrBox>{formik.errors.email}</ErrBox>
                ) : null}
              </div>
            </>
          )}

          {isShown && (
            <>
              <div>
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />

                {formik.errors.password && formik.touched.password ? (
                  <ErrBox>{formik.errors.password}</ErrBox>
                ) : null}
              </div>
            </>
          )}
          {isShown && (
            <>
              <div>
                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  onBlur={formik.handleBlur}
                />

                {formik.errors.confirmPassword &&
                formik.touched.confirmPassword ? (
                  <ErrBox>{formik.errors.confirmPassword}</ErrBox>
                ) : null}
              </div>
            </>
          )}
          {isShown && (
            <Button type="button" onClick={showForm} disabled={isValid}>
              Next
            </Button>
          )}
          {!isShown && (
            <>
              <div>
                <Input
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />

                {formik.errors.name && formik.touched.name ? (
                  <ErrBox>{formik.errors.name}</ErrBox>
                ) : null}
              </div>
            </>
          )}
          {!isShown && (
            <>
              <div>
                <Input
                  name="city"
                  type="text"
                  placeholder="City, region"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  onBlur={formik.handleBlur}
                />

                {formik.errors.city && formik.touched.city ? (
                  <ErrBox>{formik.errors.city}</ErrBox>
                ) : null}
              </div>
            </>
          )}
          {!isShown && (
            <>
              <div>
                <PhoneInput
                  mask={phoneNumberMask}
                  id="phone"
                  type="phone"
                  placeholder="Mobile phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                  name="phone"
                />

                {formik.errors.phone && formik.touched.phone ? (
                  <ErrBox>{formik.errors.phone}</ErrBox>
                ) : null}
              </div>
            </>
          )}
          {!isShown && <Button type="submit">Register</Button>}
          {!isShown && (
            <BackButton type="button" onClick={hideForm}>
              Back
            </BackButton>
          )}
          <div>
            <span>Already have an account?</span> <Link to="/login">Login</Link>
          </div>
        </Form1>
      </Formik>
    </FormContainer>
  );
};
