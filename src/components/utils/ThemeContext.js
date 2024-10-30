import React, { createContext, useState, useContext } from 'react';
import pallete from './colorPallete';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [colors, setColors] = useState({
        primaryButton: pallete.primaryButton,
        primaryButtonHover: pallete.primaryButtonHover,
        secondaryButton: pallete.secondaryButton,
        secondaryButtonHover: pallete.secondaryButtonHover,
        primaryColor: pallete.primaryColor,
        secondaryColor: pallete.secondaryColor,
        textPrimary: pallete.textPrimary,
        textSecondary: pallete.textSecondary,
        accentColor: pallete.accentColor,
        cardPrimary: pallete.cardPrimary
    });

    return (
        <ThemeContext.Provider value={{ colors, setColors }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => useContext(ThemeContext);


export {ThemeProvider,
    useTheme
};
