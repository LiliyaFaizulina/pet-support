import { TbBone } from 'react-icons/tb';
import { ErrorText } from './NoMatchesText.styled';

export const NoMatchesText = () => {
  return (
    <ErrorText>
      <TbBone /> No matches found
    </ErrorText>
  );
};
