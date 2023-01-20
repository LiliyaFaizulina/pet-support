import UserDataForm from 'components/UserDataItem/UserDataForm';
import { TitleUser, BoxTitleUser, BoxBtnTablet } from './UserData.styled';

export const UserData = () => {
  return (
    <>
      <BoxTitleUser>
        <TitleUser>My information:</TitleUser>
        <BoxBtnTablet></BoxBtnTablet>
      </BoxTitleUser>
      <UserDataForm />
    </>
  );
};
