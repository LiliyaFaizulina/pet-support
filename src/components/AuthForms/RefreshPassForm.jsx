import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { toast } from 'react-toastify';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { GiCat } from 'react-icons/gi';

import { updatePassword } from 'redux/auth/authOperations';
import {
  FormRef,
  RefreshInput,
  ButtonModal,
  Title,
  ErrBox,
  ShowPassword,
} from './LoginForm.styled';

const SignupSchema = object().shape({
  passwordOld: string().required('All passwords is required'),
  password: string()
    .min(7, 'Too Short!')
    .max(32, 'Too Long!')
    .required('All passwords is required'),
});

export const RefreshPassForm = ({ close }) => {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const showPassword = () => {
    setShowPass(!showPass);
  };
  return (
    <Formik
      initialValues={{
        passwordOld: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={({ password, passwordOld }, { resetForm }) => {
        if (password !== passwordOld) {
          dispatch(
            updatePassword({ password: passwordOld, newPassword: password })
          );
          resetForm();
          close();
        } else {
          toast.error(
            'You must use the password that differ from you old one',
            {
              icon: <GiCat />,
            }
          );
        }
      }}
    >
      {({ errors, touched }) => (
        <FormRef>
          <Title>Update Password</Title>
          <div>
            <RefreshInput
              name="passwordOld"
              type={showPass ? 'text' : 'password'}
              placeholder="Old Password"
            />
            <ShowPassword onClick={showPassword}>
              {!showPass ? <ImEyeBlocked /> : <ImEye />}
            </ShowPassword>
            {errors.password && touched.password ? (
              <ErrBox>{errors.password}</ErrBox>
            ) : null}
          </div>
          <div>
            <RefreshInput
              name="password"
              type={showPass ? 'text' : 'password'}
              placeholder="New Password"
            />
            <ShowPassword onClick={showPassword}>
              {!showPass ? <ImEyeBlocked /> : <ImEye />}
            </ShowPassword>
            {errors.password && touched.password ? (
              <ErrBox>{errors.password}</ErrBox>
            ) : null}
          </div>
          <ButtonModal type="submit" filling>
            Refresh
          </ButtonModal>
          <ButtonModal type="button" onClick={() => close()}>
            Cancel
          </ButtonModal>
        </FormRef>
      )}
    </Formik>
  );
};
