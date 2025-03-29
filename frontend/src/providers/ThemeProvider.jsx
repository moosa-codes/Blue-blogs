"use client";

import { ThemeContext } from "@/context/Theme-Context";
import { useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        document.documentElement.className = theme; 
    }, [theme]);

    if (!mounted) {
        return null; 
    }

    return <>{children}</>;
};

export default ThemeProvider;
