import { Nav } from 'components/Nav/Nav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserNav } from 'components/UserNav/UserNav';

export const Navigation = () => {
  return (
    <>
      <Nav />
      <AuthNav />
      <UserNav />
    </>
  );
};
