import styled from "styled-components";
import Button from "components/Button";

export const AddPet = styled(Button)`
  width: 40px;
  height: 40px;
  padding: 0;
  justify-content: center;
  font-size: 50px;
  border-radius: ${p => p.theme.radii.round};
`;

