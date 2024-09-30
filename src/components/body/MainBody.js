import styled from "styled-components"
import { useTheme } from "../utils/ThemeContext";

const StyledMainBody = styled.main`
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
  position: relative;
`;

const MainBody = ({ children }) => {
  const { colors } = useTheme(); 

  return <StyledMainBody theme={colors}>{children}</StyledMainBody>;
};

export default MainBody;