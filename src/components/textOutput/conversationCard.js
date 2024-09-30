import colors from "../utils/colorPallete";
import styled from "styled-components";

const conversationCard = styled.div`
    background-color: ${colors.cardPrimary};
    border: none;
    border-radius: 8px;
    margin-top: 20px;
    width: 80%;
    height: 100%;
    position: relative;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    text-align: center;
    overflow-y: auto;
`;

export default conversationCard;