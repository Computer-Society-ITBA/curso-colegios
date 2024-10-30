import styled from "styled-components";
import { useTheme } from "../utils/ThemeContext";

const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 15px 0px 20px 0px;
`;


const ThemedInputField = styled.textarea`
  padding: 10px;
  margin: 0 10px 0;
  width: 300px;
  background: ${({ theme }) => theme.primaryColor};
  border: 2px solid ${({ theme }) => theme.accentColor}; 
  border-radius: 18px;
  font-size: 12px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accentColor};  
  }
`;

const InputField = (props) => {
  const { colors } = useTheme(); 

  return <ThemedInputField {...props} theme={colors} />;
};

export {FormContainer, InputField};