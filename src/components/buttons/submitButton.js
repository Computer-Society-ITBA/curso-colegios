import styled from "styled-components";
import colors from "../utils/colorPallete";

const SubmitButton = styled.button`
  padding: 9px 18px;
  background-color: ${colors.primaryButton};
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: ${colors.primaryButtonHover};
  }
`;

export default SubmitButton;