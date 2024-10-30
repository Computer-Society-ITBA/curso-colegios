import styled from "styled-components";
import { useTheme } from "../utils/ThemeContext"; 


const StyledButton = styled.button`
  padding: 9px 18px;
  background-color: ${({ theme }) => theme.primaryButton};
  color: ${({ theme }) => theme.textPrimary};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.primaryButtonHover};
  }
`;

const SubmitButton = ({ children }) => {
  const { colors } = useTheme(); 

  return (
    <StyledButton theme={colors}>
      {children}
    </StyledButton>
  );
};

export default SubmitButton;