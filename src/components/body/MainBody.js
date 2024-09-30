import styled from "styled-components"
import colors from "../utils/colorPallete"

const MainBody = styled.main`
  background-color: ${colors.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
`;

export default MainBody;