import styled from "styled-components";
import { useTheme } from "../utils/ThemeContext";

const StyledConversationCard = styled.div`
    background-color: ${({ theme }) => theme.cardPrimary};
    border: none;
    border-radius: 8px;
    margin-right:10px;
    width: 80%;
    height: 95%;
    position: relative;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const ConversationCard = (props) => {
    const { colors } = useTheme();

    return <StyledConversationCard theme={colors} {...props} />;
};

export default ConversationCard;