export const SearchField = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="query" />
      <button type="submit" aria-label="Search icon"></button>
    </form>
  );
};
