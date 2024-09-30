import React, { useState } from 'react';
import { useTheme } from '../utils/ThemeContext';
import ColorPickerCard from './ColorPickerCard';
import styled from 'styled-components';


const Label = styled.label`
    font-size: 8px;
    margin-bottom: 3px;
    margin-left: 5px;
    display: flex;
    align-items: center;
    color:  ${({ theme }) => theme.textSecondary};
`;

const ColorInputWrapper = styled.div`
    display: inline-block;
    width: 20px; 
    height: 20px; 
    margin-left: 5px; 
    position: relative; 
`;

const ColorInput = styled.input`
    -webkit-appearance: none;
    width: 20px; 
    height: 20px; 
    appearance: none;
    border: none; 
    border-radius: 50%; 
    outline: none; 
    cursor: pointer;

    &::-webkit-color-swatch {
        border: none; 
        border-radius: 50%; 
        width: 100%; 
        height: 100%; 
    }
`;

const ColorPickerInput = ({ name, value, onChange, label }) => {
    const { colors } = useTheme();
    return (
        <Label theme={colors}>
            {label}:
            <ColorInputWrapper>
                <ColorInput
                    type="color"
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </ColorInputWrapper>
        </Label>
    );
};

const ColorPicker = () => {
    const { colors, setColors } = useTheme();

    const handleColorChange = (e) => {
        const { name, value } = e.target;
        setColors((prevColors) => ({
            ...prevColors,
            [name]: value,
        }));
    };

    return (
            <ColorPickerCard>
            <div style={{marginTop:'10px'}}/>
                    <ColorPickerInput
                        name="primaryButton"
                        value={colors.primaryButton}
                        onChange={handleColorChange}
                        label="Primary Button Color"
                    />
                    <ColorPickerInput
                        name="primaryButtonHover"
                        value={colors.primaryButtonHover}
                        onChange={handleColorChange}
                        label="Primary Button Hover Color"
                    />
                    <ColorPickerInput
                        name="secondaryButton"
                        value={colors.secondaryButton}
                        onChange={handleColorChange}
                        label="Secondary Button Color"
                    />
                    <ColorPickerInput
                        name="secondaryButtonHover"
                        value={colors.secondaryButtonHover}
                        onChange={handleColorChange}
                        label="Secondary Button Hover Color"
                    />
                    <ColorPickerInput
                        name="primaryColor"
                        value={colors.primaryColor}
                        onChange={handleColorChange}
                        label="Primary Color"
                    />
                    <ColorPickerInput
                        name="secondaryColor"
                        value={colors.secondaryColor}
                        onChange={handleColorChange}
                        label="Secondary Color"
                    />
                    <ColorPickerInput
                        name="textPrimary"
                        value={colors.textPrimary}
                        onChange={handleColorChange}
                        label="Text Primary Color"
                    />
                    <ColorPickerInput
                        name="textSecondary"
                        value={colors.textSecondary}
                        onChange={handleColorChange}
                        label="Text Secondary Color"
                    />
                    <ColorPickerInput
                        name="accentColor"
                        value={colors.accentColor}
                        onChange={handleColorChange}
                        label="Accent Color"
                    />
                    <ColorPickerInput
                        name="cardPrimary"
                        value={colors.cardPrimary}
                        onChange={handleColorChange}
                        label="Card Primary Color"
                    />
            </ColorPickerCard>
    );
};

export default ColorPicker;

