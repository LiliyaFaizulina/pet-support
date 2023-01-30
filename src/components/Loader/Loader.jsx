import { RotatingLines } from 'react-loader-spinner';
import { Spinner } from './Loader.styled.js';

export const Loader = () => {
  return (
    <Spinner>
      <RotatingLines
        strokeColor="#F59256"
        strokeWidth="5"
        animationDuration="0.75"
        width="75"
        visible={true}
      />
    </Spinner>
  );
};
