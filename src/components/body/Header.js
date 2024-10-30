import styled from "styled-components";
import { useTheme } from "../utils/ThemeContext"; 

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.textPrimary};
  padding: 20px 0;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Header = ({ children }) => {
  const { colors } = useTheme(); 

  return <StyledHeader theme={colors}>{children}</StyledHeader>;
};

export default Header;