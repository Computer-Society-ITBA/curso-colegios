import { useTheme } from "../utils/ThemeContext";
import styled from "styled-components";

const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  margin: 10px 0 10px; 
`;

const BubbleBase = styled.div`
  color: white;
  padding: 10px 15px;
  display: inline-block;
  max-width: 70%;
  word-wrap: break-word;
  border-radius: 15px;
`;

const SenderBubble = (props) => {
  const { colors } = useTheme();

  const StyledSenderBubble = styled(BubbleBase)`
    background-color: ${colors.primaryButton}; 
    color: ${colors.textPrimary};
    border-radius: 15px 15px 0 15px; 
    margin-left: auto; 
    margin-right: 15px;
  `;

  return <StyledSenderBubble {...props} />;
};


const ReceiverBubble = (props) => {
  const { colors } = useTheme(); 

  const StyledReceiverBubble = styled(BubbleBase)`
    background-color: ${colors.secondaryColor}; 
        color: ${colors.textPrimary};
    border-radius: 15px 15px 15px 0; 
    margin-right: auto; 
    margin-left: 15px;
  `;

  return <StyledReceiverBubble {...props} />;
};

export {BubbleContainer, SenderBubble, ReceiverBubble}