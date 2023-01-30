import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { MdPets } from 'react-icons/md';
import { restorePassword } from 'redux/auth/authOperations';
import { ErrBox } from 'components/AuthForms/LoginForm.styled';
import { Input, Form, StyledButton } from './RestorePassword.styled';

export const RestorePasswordForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
  });

  const { handleSubmit, values, handleChange, errors, touched } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: values => {
      dispatch(restorePassword(values));
      closeModal();
    },
  });
  return (
    <Form onSubmit={handleSubmit}>
      <p>
        <MdPets /> To restore your password, enter your email address and
        submit. We will send you a new password to your email.
      </p>
      <label>
        <Input
          type="email"
          onChange={handleChange}
          name="email"
          value={values.email}
          placeholder="Email"
        />
        {errors.email || touched.email ? <ErrBox>{errors.email}</ErrBox> : null}
      </label>
      <StyledButton type="button" onClick={closeModal}>
        Cancel
      </StyledButton>
      <StyledButton type="submit" filling>
        Submit
      </StyledButton>
    </Form>
  );
};
