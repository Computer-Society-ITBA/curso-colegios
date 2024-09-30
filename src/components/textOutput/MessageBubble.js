import colors from "../utils/colorPallete";
import styled from "styled-components";

const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  margin: 10px 0 10px; 
`;
const SenderBubble = styled.div`
  background-color: ${colors.primaryButton}; 
  color: white;
  border-radius: 15px 15px 0 15px; 
  padding: 10px 15px;
  display: inline-block;
  max-width: 70%;
  margin-left: auto; 
  margin-right: 15px;
  word-wrap: break-word;
`;

const ReceiverBubble = styled.div`
  background-color: ${colors.secondaryColor}; 
  color: white;
  border-radius: 15px 15px 15px 0; 
  padding: 10px 15px;
  display: inline-block;
  max-width: 70%;
  margin-right: auto; 
  margin-left: 15px;
  word-wrap: break-word;
`;
export {BubbleContainer, SenderBubble, ReceiverBubble}