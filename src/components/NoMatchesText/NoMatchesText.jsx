import { TbBone } from 'react-icons/tb';
import { Box, ErrorText } from './NoMatchesText.styled';

export const NoMatchesText = () => {
  return (
    <Box>
      <TbBone />
      <ErrorText>No matches found</ErrorText>
    </Box>
  );
};
