export const BurgerNav = () => {
  return (
    <>
      <Logo />
      <button type="button">x</button>
      <Nav /> {/* !desctop */}
      <UserNav /> {/* mobile */}
      <AuthNav />
    </>
  );
};
