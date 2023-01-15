import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import {
  Form1,
  FormContainer,
  Input,
  Button,
  Title,
  ErrBox,
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

  email: yup.string().email('Invalid email').required('Email Required'),
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
          // login({ email, password });
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
              <span>Don't have an account?</span> <a href="/">Register</a>
            </div>
          </Form1>
        )}
      </Formik>
    </FormContainer>
  );
};
