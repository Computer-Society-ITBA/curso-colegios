import styled from "styled-components";
import { useTheme } from "../utils/ThemeContext";

const StyledColorPickerCard = styled.div`
    background-color: ${({ theme }) => theme.cardPrimary};
    border: none;
    border-radius: 8px;
    margin-top: 20px;
    margin-left: 10px;
    display: flex;
    flex-direction:column;
    width: 160px;
    height: 250px;
    position: relative;
    align-items: flex-start;
    justify-content:flex-start;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    text-align: center;
    overflow-y: auto;
`;

const ColorPickerCard = (props) => {
    const { colors } = useTheme();

    return <StyledColorPickerCard theme={colors} {...props} />;
};

export default ColorPickerCard;