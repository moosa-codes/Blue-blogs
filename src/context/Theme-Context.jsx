"use client"
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});

const defaultTheme = () => {
    if (typeof window !== "undefined") {
        const theme = localStorage.getItem("theme");
        return theme || "light";
    }
    return "light";
}
export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return defaultTheme();
    });

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};
