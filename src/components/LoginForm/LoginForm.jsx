import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import {
  Form1,
  LoginFormContainer,
  Input,
  Button,
  Title,
} from './LoginForm.styled';
import { login } from 'redux/auth/authOperations';

// import axios from 'axios';

// const login = async userData => {
//   try {
//     const { data } = await axios.post(
//       'http://localhost:4000/api/users/login',
//       userData
//     );
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

const SignupSchema = yup.object().shape({
  password: yup
    .string()
    .min(7, 'Too Short!')
    .max(32, 'Too Long!')
    .required('Required'),

  email: yup.string().email('Invalid email').required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <LoginFormContainer>
      <Title>Login</Title>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={({ email, password }, { resetForm }) => {
          dispatch(login({ email, password }));
          // login({ email, password });
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form1>
            <Input name="email" type="email" placeholder="Email" />

            <div>
              {errors.email && touched.email ? (
                <div>{`Email ${errors.email}`}</div>
              ) : null}
            </div>

            <Input name="password" type="password" placeholder="Password" />

            <div>
              {errors.password && touched.password ? (
                <div>{`Password ${errors.password}`}</div>
              ) : null}
            </div>
            <Button type={'submit'}>Login</Button>
          </Form1>
        )}
      </Formik>
      <div>
        <span>Don't have an account?</span> <a href="/">Register</a>
      </div>
    </LoginFormContainer>
  );
};
