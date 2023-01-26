import { useState } from 'react';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import {
  FormRef,
  RefreshInput,
  ButtonModal,
  Title,
  ErrBox,
  ShowPassword,
} from './LoginForm.styled';
import { Card} from 'components/NoticeModal/NoticeModal.styled';
import { updatePassword } from 'redux/auth/authOperations';

const SignupSchema = object().shape({
  passwordOld: string().required('Email Required'),
  password: string()
    .min(7, 'Too Short!')
    .max(32, 'Too Long!')
    .required('All passwords is required'),

});

export const RefreshPassForm = ({close}) => {
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
          dispatch(updatePassword({password: passwordOld, newPassword: password
         }));
          resetForm();
          close()
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
              <ButtonModal type="submit"  filling>Refresh</ButtonModal>
              <ButtonModal type="button" onClick={()=>close()}>Cancel</ButtonModal>
          </FormRef>
        )}
      </Formik>
  );
};
