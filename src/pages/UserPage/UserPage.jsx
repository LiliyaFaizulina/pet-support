import Logout from '../../components/Logout/Logout';
import PetsData from '../../components/PetsData/PetsData';

import { UserPageContainer, BoxUser } from './UserPage.styled';

import { UserData } from 'components/UserData/UserData';

const UserPage = () => {
  return (
    <>
      <UserPageContainer>
        <BoxUser>
          <UserData />
          <Logout />
        </BoxUser>
        <PetsData />
      </UserPageContainer>
    </>
  );
};

export default UserPage;
