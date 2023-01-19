import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

const Button = ({ type = "button", active = false, disabled = false, children, ...props }) => {
  return (
    <StyledButton type={type} active={active} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

Button.prototype = {
  type: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};