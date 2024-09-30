import styled from "styled-components"
import colors from "../utils/colorPallete"

const Header = styled.header`
  background-color: ${colors.secondaryColor};
  color: ${colors.primaryColor};
  padding: 20px 0px 20px 0px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 1000;
`;


export default Header;